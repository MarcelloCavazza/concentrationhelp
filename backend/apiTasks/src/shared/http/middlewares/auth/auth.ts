import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';

const checkToken = (
  request: Request,
  response: Response,
  next: NextFunction,
  // eslint-disable-next-line consistent-return
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError(`Token can not be empty`, 403);
  }

  if (request.query)
    try {
      const [, token] = authToken.split(' ');

      verify(token, process.env.SECRET_KEY);
      return next();
    } catch (error) {
      throw new AppError(`Invalid token`, 403);
    }
};

export { checkToken };
