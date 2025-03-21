import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    breed: string;

    @Column()
    color: string;

    @Column()
    weight: number;

    @Column()
    owner: string;
}
