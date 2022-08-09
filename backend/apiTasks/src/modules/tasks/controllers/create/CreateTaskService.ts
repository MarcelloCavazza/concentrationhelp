import { Tasks } from '@modules/tasks/domain/tasks';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ICreateTask } from '../../dto/tasksDTO';
import { TasksRepository } from '../../infra/repositories/TasksRepository';
import { v4 as uuid } from 'uuid';
import { formatDate } from '@shared/utils/utils';
import { Request, Response } from 'express';

class CreateTaskService {
  private taskData: Tasks;
  public async execute(request: Request, response: Response): Promise<Tasks> {
    //data: ICreateTask
    const { title, description } = request.body;
    const taskRepository = getCustomRepository(TasksRepository);
    const tasksAlreadyExists = await taskRepository.listTask(title);
    if (!tasksAlreadyExists) {
      throw new AppError('A task with this title already exists');
    }
    Object.assign(this.taskData, {
      id: uuid(),
      title,
      description,
      status: Tasks.TASK_STATUS.TODO,
      created_at: formatDate(new Date().toISOString()),
    });
    const task = taskRepository.createTask(this.taskData);
    return task;
  }
}

export default CreateTaskService;
