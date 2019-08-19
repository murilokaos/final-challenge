module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    userId: DataTypes.INTEGER,
    meetupId: DataTypes.INTEGER,
  });

  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Subscription.belongsTo(models.Meetup, { foreignKey: 'meetupId' });
  };

  return Subscription;
};
