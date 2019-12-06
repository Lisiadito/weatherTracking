import { Entity, PrimaryGeneratedColumn, Column, Unique, BaseEntity} from "typeorm"

@Entity()
@Unique(['username'])
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column({default: () => false})
    enabled: boolean

    @Column({default: () => false})
    admin: boolean
}
