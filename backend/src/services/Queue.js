import kue from 'kue';
import * as Sentry from '@sentry/node';
import jobs from '../jobs';
import { redisConfig } from '../config';

const Queue = kue.createQueue({ redis: redisConfig });

Queue.process(jobs.SubscribeMail.key, jobs.SubscribeMail.handle);

Queue.on('job enqueue', (id, type) => {
  console.log(`Job ${id} got queued of type ${type}`);
})
  .on('job complete', id => {
    console.log(`Job ${id} is completed!`);
  })
  .on('job failed', id => {
    console.log(`Job ${id} has failed!`);
  });

Queue.on('error', Sentry.captureException);

module.exports = Queue;
