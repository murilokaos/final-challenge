import jwt from 'jsonwebtoken';
import { authConfig } from '../config';
import { promisify } from 'util';

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    if (!decoded) {
      throw new Error();
    }

    req.body.email = decoded.email;
    req.headers.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
