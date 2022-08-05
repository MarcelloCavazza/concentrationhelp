import { getCustomRepository } from 'typeorm';
import { ICreateTask } from '../dto/taskDTO';
import Task from '../typeorm/entities/Task';
import { TasksRepository } from '../typeorm/repositories/TasksRepository';

class CreateTaskService {
  public async execute(data: ICreateTask): Promise<Task> {
    const { title, description, status } = data;
    const taskRepository = getCustomRepository(TasksRepository);
    const task = taskRepository.create({ title, description, status });
    await taskRepository.save(task);
    return task;
  }
}

export default CreateTaskService;
