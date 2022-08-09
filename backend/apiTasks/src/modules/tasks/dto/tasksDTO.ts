export interface ICreateTask {
  title: string;
  description: string;
}
export interface IUpdateTask {
  id: string;
  title?: string;
  description?: string;
  status?: string;
}
export interface IListOrDeleteTask {
  id: string;
}
