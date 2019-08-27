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

    if (data.oldPassword) {
      const user = await User.findOne({
        where: { email, id },
      });

      const validPassword = await user.checkPassword(data.oldPassword);

      if (!validPassword) {
        return res.status(401).json({ error: 'Senha atual inválida' });
      }
    }

    const [, [updatedUser]] = await User.update(data, {
      where: { id, email },
      individualHooks: true,
    });

    updatedUser.password = undefined;

    return res.status(200).json(updatedUser);
  },
};
