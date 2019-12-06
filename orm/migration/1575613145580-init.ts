import {MigrationInterface, QueryRunner} from "typeorm";

export class init1575613145580 implements MigrationInterface {
    name = 'init1575613145580'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "enabled" boolean NOT NULL DEFAULT (false), "admin" boolean NOT NULL DEFAULT (false), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`, undefined);
        await queryRunner.query(`CREATE TABLE "weather_data" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL, "maxTemp" integer NOT NULL, "minTemp" integer NOT NULL, "rainfall" integer NOT NULL, CONSTRAINT "UQ_5f2e80b03a228821d45203b0895" UNIQUE ("date"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "weather_data"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
