import { Subscription, Meetup, User } from '../models';
import { isPast } from 'date-fns';
import Queue from '../services/Queue';
import SubscribeMail from '../jobs/SubscribeMail';

module.exports = {
  async store(req, res) {
    const { meetupId } = req.body;
    const { userId } = req.headers;

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

    const [subscription, isNew] = await Subscription.findCreateFind({
      where: { userId, meetupId },
      defaults: {
        userId,
        meetupId,
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (isNew) {
      Queue.create(SubscribeMail.key, {
        meetup,
        user: subscription.user,
      })
        .attempts(3)
        .priority(0)
        .save();
    }

    return res
      .status(200)
      .json({ ...subscription.toJSON(), newSubscription: isNew });
  },
};
