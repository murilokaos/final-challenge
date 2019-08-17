import { User } from '../models';

module.exports = {
  async store(req, res) {
    const { email, ...data } = req.body;

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({ email, ...data });
    user.password = undefined;
    return res.send(user);
  },

  async update(req, res) {
    const { email, ...data } = req.body;
    const { id } = req.params;

    await User.update(data, { where: { id, email } });

    const user = await User.findOne({ where: { email, id } });

    return res.send({ id, name: user.name, email });
  },
};
