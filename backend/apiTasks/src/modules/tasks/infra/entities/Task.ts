import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('tasks')
class Task {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}

export default Task;
