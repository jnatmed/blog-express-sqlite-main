import { Noticia } from '../noticias/noticia.entity';

export interface iComentario {
  id?: string;
  comentario: string;
  noticia: Noticia;
}