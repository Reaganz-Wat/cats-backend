import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cat } from "./cats/entities/cat.entity";
import { Owner } from "./owners/entities/owner.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "cat",
    synchronize: false, 
    logging: true,
    entities: [Cat, Owner], 
    migrations: ["dist/migrations/*.js"], // Ensure this matches compiled files
});

AppDataSource.initialize()
    .then(() => console.log("Data Source has been initialized!"))
    .catch((err) => console.error("Error initializing Data Source", err));
