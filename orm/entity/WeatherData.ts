import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique} from "typeorm"

@Entity()
@Unique(['date'])
export default class WeatherData extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    date: Date

    @Column()
    maxTemp: number

    @Column()
    minTemp: number

    @Column()
    rainfall: number
}
