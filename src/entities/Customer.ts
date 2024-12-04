import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Entidade que representa um cliente no banco de dados.
 * Contém os campos `id` (chave primária), `name` e `email`.
 */
@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ type: 'varchar', length: 90 })
    name!: string;

    @Column({ type: 'varchar', length: 90 })
    email!: string;
}
