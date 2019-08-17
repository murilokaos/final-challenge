import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import Youch from 'youch';
import validate from 'express-validation';

import { sentryConfig } from './config';
import Routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

Sentry.init(sentryConfig);

app.use(Sentry.Handlers.requestHandler());

app.use(Routes);

if (process.env.NODE_ENV === 'production') {
  app.use(Sentry.Handlers.errorHandler());
}

app.use(async (err, req, res, next) => {
  if (err instanceof validate.ValidationError) {
    return res.json(err);
  }

  if (process.env.NODE_ENV !== 'production') {
    const youch = new Youch(err, req);

    return res.json(await youch.toJSON());
  }

  return res.status(500).json({ error: 'Internal server error!' });
});

app.listen(process.env.PORT, () => {
  console.log(
    '\x1b[1m\x1b[5m\x1b[43m\x1b[37m%s\x1b[0m',
    `Listening backend in port ${process.env.PORT}`
  );
});
