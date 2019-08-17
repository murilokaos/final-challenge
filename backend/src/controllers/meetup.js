import { isPast, isToday } from 'date-fns';
import { Op } from 'sequelize';
import { Meetup } from '../models';

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

    if (data.date && isPast(data.date)) {
      return res
        .status(400)
        .json({ error: `it's impossible edit Meetup with past date!` });
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

  async show(req, res) {},

  async index(req, res) {},

  async delete(req, res) {},
};
