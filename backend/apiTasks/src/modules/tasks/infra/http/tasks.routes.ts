import { Router } from 'express';

// import { UpdateController } from '@modules/useCases/update/UpdateItemController';
import CreateTaskService from '@modules/tasks/controllers/create/CreateTaskService';
// import { ListController } from '@modules/useCases/list/ListItemController';

// import { checkToken } from '@shared/infra/http/middlewares/auth/index';

const tasks = Router();
// const updateController = new UpdateController();
const createController = new CreateTaskService();
// const listController = new ListController();

// tasks.patch(`/update/:id`, updateController.updateById);

// tasks.get(`/list/:id`, listController.fyndById);

// tasks.get(`/listAll/`, listController.listAll);

tasks.post(`/create/`, createController.execute);

// tasks.delete(`/delete/:id`, updateController.deleteById);

export { tasks };
