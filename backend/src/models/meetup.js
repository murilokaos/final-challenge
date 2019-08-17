module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    banner: DataTypes.STRING,
  });

  return Meetup;
};
