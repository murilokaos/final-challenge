import joi from 'joi';

const user = {
  login: {
    body: {
      email: joi
        .string()
        .email()
        .required(),
      password: joi
        .string()
        .required()
        .min(6),
    },
  },
  register: {
    body: {
      name: joi.string().required(),
      email: joi
        .string()
        .email()
        .required(),
      password: joi
        .string()
        .required()
        .min(6),
      password_confirmation: joi
        .string()
        .required()
        .min(6)
        .valid(joi.ref('password')),
    },
  },
  update: {
    params: {
      id: joi.number().required(),
    },
    body: {
      name: joi.string(),
      email: joi
        .string()
        .email()
        .required(),
      password: joi.string().min(6),
      password_confirmation: joi
        .string()
        .valid(joi.ref('password'))
        .when('password', { is: joi.exist(), then: joi.required() }),
    },
  },
  auth: {
    body: {
      email: joi
        .string()
        .email()
        .required(),
      password: joi.string().required(),
    },
  },
  forgotPassword: {
    body: {
      email: joi
        .string()
        .email()
        .required(),
    },
  },
  resetPassword: {
    body: {
      forgotToken: joi.string().required(),
      password: joi
        .string()
        .required()
        .min(6),
      password_confirmation: joi
        .string()
        .required()
        .min(6)
        .valid(joi.ref('password')),
    },
  },
};

module.exports = user;

/* .options({
  language: {
    any: {
      allowOnly: 'Passwords do not match!',
    },
  },
}), */
