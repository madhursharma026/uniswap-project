import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AddCoin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    coinId: string;

    @Column()
    coinName: string;

    @Column()
    coinPrice: number;

    @Column()
    coinQty: number;

    @Column()
    totalPrice: number;

    @Column()
    walletAddress: string;
}
