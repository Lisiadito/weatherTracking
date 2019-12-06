import "reflect-metadata";
import { createConnection } from "typeorm";
import User from "./entity/User";
import WeatherData from './entity/WeatherData'

const entities = [
    User,
    WeatherData
]

export const connect_promise = createConnection({
    type: 'sqlite',
    database: "./DB",
    entities
}).then(async () => console.log('Connection to DB successful'))
    .catch(error => console.log(error));
