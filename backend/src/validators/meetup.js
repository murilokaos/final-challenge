import joi from 'joi';

const meetup = {
  register: {
    body: {
      title: joi
        .string()
        .required()
        .min(15),
      description: joi
        .string()
        .required()
        .min(55),
      location: joi.string().required(),
      date: joi.date().required(),
      banner: joi.string().required(),
    },
  },
  update: {
    params: {
      id: joi.number().required(),
    },
    body: {
      title: joi.string().min(15),
      description: joi.string().min(55),
      location: joi.string(),
      date: joi.date(),
      banner: joi.string(),
    },
  },
};

module.exports = meetup;
