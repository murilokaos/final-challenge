const authConfig = {
  ttl: 86400000,
  secret: process.env.APP_SECRET,
};

module.exports = authConfig;
