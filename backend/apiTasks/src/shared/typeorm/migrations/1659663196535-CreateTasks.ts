import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTasks1659663196535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '120',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '200',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enumName: 'order_status',
            enum: ['done', 'todo', 'doing'],
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'date',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'date',
            default: 'now()',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks');
  }
}
