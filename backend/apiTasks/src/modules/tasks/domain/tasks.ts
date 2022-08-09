export class Tasks {
  public static TASK_STATUS = {
    TODO: 'todo',
    DOING: 'doing',
    DONE: 'done',
  };

  public id: string;
  public title: string;
  public description: string;
  public status: string;
  public created_at: string;
  public updated_at?: string;
}
