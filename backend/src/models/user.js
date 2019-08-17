import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authConfig } from '../config';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: hashPassword,
        beforeBulkUpdate: user => console.log(user),
      },
    }
  );

  User.prototype.checkPassword = function(password) {
    console.log('entrou aqui');
    return bcrypt.compare(password, this.password);
  };

  User.prototype.generateToken = async ({ id, email }) => {
    const token = jwt.sign({ id, email }, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });

    return token;
  };

  return User;
};

const hashPassword = async (instance, _) => {
  if (!instance.changed('password')) return null;
  return instance.set(
    'password',
    await bcrypt.hash(instance.get('password'), 8)
  );
};
