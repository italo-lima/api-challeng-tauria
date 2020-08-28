import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePizza1598408288940 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pizzas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'size',
            type: 'varchar',
          },
          {
            name: 'toppings',
            type: 'varchar',
          },
          {
            name: 'total',
            type: 'float',
          },
          {
            name: 'crust',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pizzas');
  }
}
