import { User } from '../models';

module.exports = {
  async store(req, res, next) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      const validPassword = await user.checkPassword(password);

      if (validPassword) {
        const token = await user.generateToken(user);
        console.log(token);
        return res.status(200).json({
          token,
          user: { id: user.id, name: user.name, email: user.email },
        });
      } else {
        return res.status(401).json({
          error: 'User/password not found or is incorrect',
        });
      }
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  },
};
