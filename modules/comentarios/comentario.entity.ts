import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Noticia } from '../noticias/noticia.entity';

@Entity()
export class Comentario {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  texto: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Noticia, (noticia) => noticia.comentarios)
  noticia: Noticia; 

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
