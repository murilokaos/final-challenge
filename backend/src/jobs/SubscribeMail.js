const Mail = require('../services/Mail');

module.exports = {
  get key() {
    return 'SubscribeMail';
  },

  async handle(job, done) {
    const { meetup, user } = job.data;

    await Mail.sendMail({
      from: `"Meetapp Avisa" <avisa@meetapp.com>`,
      to: `"${meetup.user.name}" <${meetup.user.email}>`,
      subject: `Nova inscriçao no seu meetup: ${meetup.title}`,
      template: 'subscribe',
      context: { meetup, user },
    });

    return done();
  },
};
