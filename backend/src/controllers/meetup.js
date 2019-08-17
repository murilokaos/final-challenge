import { Meetup } from '../models';

module.exports = {
  async store(req, res) {
    const data = req.body;
    const { userId } = req.headers;

    const meetup = await Meetup.create({ userId, ...data });

    return res.status(200).json(meetup);
  },
  async update(req, res) {},

  async show(req, res) {},

  async index(req, res) {},

  async delete(req, res) {},
};
