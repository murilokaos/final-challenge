import { Op, col } from 'sequelize';
import { Subscription, Meetup, User } from '../models';
import isPast from 'date-fns/isPast';
import Queue from '../services/Queue';
import SubscribeMail from '../jobs/SubscribeMail';

module.exports = {
  async store(req, res) {
    const { meetupId } = req.body;
    const { userId } = req.headers;

    try {
      const meetup = await Meetup.findOne({
        where: { id: meetupId },
        attributes: ['title', 'date'],
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['id', 'name', 'email'],
          },
        ],
      });

      if (meetup.user.id === userId) {
        return res.status(400).json({
          error: 'Unable to subscribe for a meetup that you are the organizer!',
        });
      }

      if (isPast(meetup.date)) {
        return res.status(400).json({
          error: 'Unable to subscribe to past meetup!',
        });
      }

      const userSubscriptions = await Subscription.findAll({
        include: [
          {
            model: Meetup,
            as: 'meetup',
            where: {
              date: {
                [Op.eq]: meetup.date,
              },
            },
            attributes: ['id', 'date'],
          },
        ],
        where: { userId },
      });

      if (userSubscriptions.length > 0) {
        return res.status(400).json({
          error: 'Unable to subscribe in two meetups with same hour!',
        });
      }

      const [subscription, isNew] = await Subscription.findOrCreate({
        where: { userId, meetupId },
        defaults: {
          userId,
          meetupId,
        },
      });

      if (isNew) {
        const user = await User.findOne({
          where: { id: userId },
          attributes: ['name', 'email'],
        });

        Queue.create(SubscribeMail.key, {
          meetup,
          user,
        })
          .attempts(3)
          .priority(0)
          .save();
      }

      return res
        .status(200)
        .json({ ...subscription.toJSON(), newSubscription: isNew });
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'We were unable to submit your subscription!' });
    }
  },

  async index(req, res) {
    const { userId } = req.headers;
    const { page = 0 } = req.query;

    const subscriptions = await Subscription.findAndCountAll({
      where: { userId },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          attributes: ['id', 'title', 'date', 'description', 'banner'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
      ],
      order: [[col('meetup.date'), 'ASC']],
      attributes: ['id'],
      limit: 10,
      offset: 10 * page,
    });

    return res.status(200).json(subscriptions);
  },
};
