import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { tasks } from '@modules/tasks/infra/http/tasks.routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(tasks);

app.use(
  (error: Error, request: Request, reponse: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return reponse.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return reponse.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000`);
});
