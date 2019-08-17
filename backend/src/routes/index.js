import express from 'express';
import validate from 'express-validation';
import handler from 'express-async-handler';

import authMiddleware from '../middleware/auth';
import validators from '../validators';

import { UserController, AuthController } from '../controllers';

const routes = new express.Router();

routes.get('/', (req, res, next) => {
  res.json({
    Hello:
      'How are you? This is my API of Meetapp and in this api exists a lot of methods HTTP, listed below.',
    Get: {
      users: ['/user/:id'],
    },
    Post: {
      users: ['/register', '/user/:id/lost-password', '/user/:id'],
    },
  });
});

routes.post(
  '/user',
  validate(validators.user.register),
  handler(UserController.store)
);

routes.post(
  '/auth',
  validate(validators.user.auth),
  handler(AuthController.store)
);

routes.use(authMiddleware);

routes.put(
  '/user/:id',
  validate(validators.user.update),
  handler(UserController.update)
);

module.exports = routes;
