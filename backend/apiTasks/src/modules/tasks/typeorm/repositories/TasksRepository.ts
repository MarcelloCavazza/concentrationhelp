import { ICreateTask } from '@modules/tasks/dto/taskDTO';
import { EntityRepository, Repository } from 'typeorm';
import Task from '../entities/Task';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  // public async createTask(taskData: ICreateTask): Promise<Task | undefined> {
  //   const { title, description, status } = taskData;
  //   return task;
  // }
}
