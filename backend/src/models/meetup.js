import { User } from '../models';

module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    banner: DataTypes.STRING,
  });

  Meetup.associate = function(models) {
    Meetup.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Meetup.hasMany(models.Subscription, { foreignKey: 'meetupId' });
  };

  return Meetup;
};
