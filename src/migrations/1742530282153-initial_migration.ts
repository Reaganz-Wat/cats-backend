import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1742530282153 implements MigrationInterface {
    name = 'InitialMigration1742530282153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" ADD "color" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cat" ADD "weight" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cat" ADD "owner" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "owner"`);
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "color"`);
    }

}
