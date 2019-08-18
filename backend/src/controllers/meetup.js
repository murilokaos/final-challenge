import { isPast, isToday, endOfDay } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { Op } from 'sequelize';
import { Meetup, User } from '../models';

module.exports = {
  async store(req, res) {
    const data = req.body;
    const { userId } = req.headers;

    if (isPast(data.date)) {
      return res
        .status(400)
        .json({ error: `it's impossible register Meetup with past date!` });
    }

    if (isToday(data.date)) {
      return res.status(400).json({
        error: `Unable register Meetups with date of today!`,
      });
    }

    const meetup = await Meetup.create({ userId, ...data });

    return res.status(200).json(meetup);
  },

  async update(req, res) {
    const data = req.body;
    const { userId } = req.headers;
    const { id } = req.params;

    if (data.date) {
      if (isPast(data.date)) {
        return res
          .status(400)
          .json({ error: `it's impossible edit Meetup with past date!` });
      }
    }

    try {
      const now = new Date();
      const [, [updatedMeetup]] = await Meetup.update(data, {
        where: { id, userId, date: { [Op.gt]: now } },
        individualHooks: true,
      });

      return res.status(200).json(updatedMeetup);
    } catch (error) {
      return res.status(400).json({
        error: `Unable to edit Meetups that have already happened!`,
      });
    }
  },

  async show(req, res) {
    const { id } = req.params;

    const meetup = await Meetup.findOne({
      where: { id },
      attributes: ['id', 'title', 'description', 'location', 'date', 'banner'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.status(200).json(meetup);
  },

  async index(req, res) {
    const { userId } = req.headers;
    const { date, page = 0 } = req.query;

    const dateOfSearch = date && endOfDay(toDate(date));

    const meetups = await Meetup.findAndCountAll({
      where: userId
        ? { userId }
        : date
        ? { date: { [Op.lte]: dateOfSearch } }
        : undefined,
      attributes: ['id', 'title', 'description', 'location', 'date', 'banner'],
      include: !userId && [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
      ],
      order: [['date', 'ASC']],
      limit: 10,
      offset: 10 * page,
    });

    return res.status(200).json(meetups);
  },

  async delete(req, res) {
    const { id } = req.params;
    const { userId } = req.headers;

    try {
      const meetup = await Meetup.findOne({ where: { id, userId } });

      if (isPast(meetup.date)) {
        return res
          .status(400)
          .json({ error: `it's impossible delete Meetup with past date!` });
      }

      await Meetup.destroy({ where: { id, userId } });

      return res
        .status(200)
        .json({ ok: true, msg: 'Meetup deleted with successful!' });
    } catch (error) {
      return res.status(400).json({ error: 'Unable to delete meetup!' });
    }
  },
};
