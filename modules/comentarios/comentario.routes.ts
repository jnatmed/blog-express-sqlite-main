import express from 'express';
import {
  crearComentario,
  listarComentarios,
  obtenerComentarioPorId,
  borrarComentario,
  actualizarComentario,
} from './comentario.service';

const comentariosRoutes = express.Router();

// Endpoint para crear un comentario
comentariosRoutes.post('/', crearComentario);

// Endpoint para consultar todos los comentarios
comentariosRoutes.get('/', listarComentarios);

// Endpoint para obtener un comentario por ID
comentariosRoutes.get('/:id', obtenerComentarioPorId);

// Endpoint para borrar un comentario
comentariosRoutes.delete('/:id', borrarComentario);

// Endpoint para actualizar un comentario
comentariosRoutes.patch('/:id', actualizarComentario);

export default comentariosRoutes;
