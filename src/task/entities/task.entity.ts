import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class Task {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column()
  status: string;

  @Column()
  fechaEntrega: Date;

  @Column()
  comentarios: string;

  @Column()
  creadoPor: number;

  @Column()
  tag: string;

  @Column()
  file: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
