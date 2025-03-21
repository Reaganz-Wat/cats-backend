import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({name: "owner_name"})
    name: string;

    @Column({name: "owner_address"})
    address: string;
}
