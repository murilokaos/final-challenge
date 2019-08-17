import { File } from '../models';
import path from 'path';

module.exports = {
  async store(req, res) {
    const { filename, originalname: name } = req.file ? req.file : '';
    const file = await File.create({ name, path: filename });
    return res.status(200).json(file);
  },
  async show(req, res) {
    const { file } = req.params;
    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      'tmp',
      'uploads',
      file
    );

    res.sendFile(filePath);
  },
};
