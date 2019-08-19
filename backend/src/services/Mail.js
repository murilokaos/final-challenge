import path from 'path';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import mailConfig from '../config/mail';

const transport = nodemailer.createTransport(mailConfig);

const viewPath = path.resolve(__dirname, '..', 'views', 'emails');

transport.use(
  'compile',
  hbs({
    viewEngine: {
      extName: '.hbs',
      partialsDir: path.resolve(viewPath, 'partials'),
      layoutsDir: path.resolve(viewPath, 'layouts'),
      defaultLayout: null,
    },
    viewPath,
    extName: '.hbs',
  })
);

module.exports = transport;
