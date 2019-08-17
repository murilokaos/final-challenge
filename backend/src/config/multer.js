import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) return cb(err);

        cb(null, raw.toString('hex') + path.extname(file.originalname));
      });
    },
  }),
};
