import express from 'express';
import {
	borrarNoticia,
	crearNoticia,
	listarNoticia,
	obtenerNoticiaId,
} from './noticia.service';

const noticiasRoutes = express.Router();

// endpoint para crear una noticia
noticiasRoutes.post('/', crearNoticia);

// endpoint para consultar todas las noticias

noticiasRoutes.get('/', listarNoticia);

// [GET] endpoint obtener noticia por id /:id

noticiasRoutes.get('/:id', obtenerNoticiaId);

// [DELETE] endpoint borrar
noticiasRoutes.delete('/:id', borrarNoticia);

export default noticiasRoutes;
