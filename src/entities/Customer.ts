import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ type: 'varchar', length: 90 })
    name!: string;

    @Column({ type: 'varchar', length: 90 })
    email!: string;
}
