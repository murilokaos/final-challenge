import express from 'express';
import validate from 'express-validation';
import handler from 'express-async-handler';

import { multerConfig } from '../config';
import multer from 'multer';

import authMiddleware from '../middleware/auth';
import validators from '../validators';

import {
  FileController,
  MeetupController,
  SessionController,
  UserController,
} from '../controllers';
const upload = multer(multerConfig);

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
  handler(SessionController.store)
);

routes.get('/file/:file', handler(FileController.show));

routes.use(authMiddleware);

routes.put(
  '/user/:id',
  validate(validators.user.update),
  handler(UserController.update)
);

routes.post('/file', upload.single('banner'), handler(FileController.store));

routes.post(
  '/meetup',
  validate(validators.meetup.register),
  handler(MeetupController.store)
);

module.exports = routes;
