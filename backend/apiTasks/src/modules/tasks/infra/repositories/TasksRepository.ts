import { Tasks } from '@modules/tasks/domain/tasks';
import { ICreateTask, IListOrDeleteTask } from '@modules/tasks/dto/tasksDTO';
import { EntityRepository, Repository } from 'typeorm';
import Task from '../entities/Task';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  public async createTask(taskData: ICreateTask): Promise<Tasks> {
    const task = await this.save(taskData);
    return task;
  }
  public async listTask(name: string): Promise<boolean> {
    const task = this.findOne({ where: { name } });
    if (!task) {
      return false;
    }
    return true;
  }
}
