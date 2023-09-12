import { Request, Response } from 'express';
import { Comentario } from './comentario.entity';
import { dbcontext } from '../db/dbcontext';
import { iComentario } from './comentario.interface';
import { Connection, getConnection, Repository } from 'typeorm';

export const crearComentario = async (req: Request, res: Response) => {
  try {
    const comentarioRepository = dbcontext.getRepository(Comentario);
    const nuevoComentario: iComentario = req.body;

    const comentario = comentarioRepository.create(nuevoComentario);

    const result = await comentarioRepository.save(comentario);

    res.json({
      msg: `Se creó el comentario correctamente con el id: ${result.id}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'No se pudo guardar el comentario' });
  }
};

export const listarComentarios = async (req: Request, res: Response) => {
  try {
    const comentarioRepository = await dbcontext.getRepository(Comentario);
    const comentarios = await comentarioRepository.find();

    res.json({ data: comentarios, cantidad: comentarios.length });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'No se pudo obtener un listado de comentarios' });
  }
};


export const obtenerComentarioPorId = async (req: Request, res: Response) => {
    try {
      const connection: Connection = getConnection();
      const comentarioRepository: Repository<Comentario> = connection.getRepository(Comentario);
      const comentario = await comentarioRepository.findOne({
        where: { id: req.params.id },
      });
      if (!comentario) {
        throw new Error();
      }
      res.json({ comentario });
    } catch (error) {
      res.status(404).json({ msg: 'No se pudo encontrar el comentario' });
    }
  };
  
  

export const borrarComentario = async (req: Request, res: Response) => {
  try {
    const comentarioRepository = await dbcontext.getRepository(Comentario);

    const comentarioBorrar = await comentarioRepository.delete(req.params.id);

    if (!comentarioBorrar.affected) {
      throw new Error('No se afectaron columnas');
    }

    res.json({ msg: 'Comentario borrado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: 'No se pudo borrar el comentario' });
  }
};

export const actualizarComentario = async (req: Request, res: Response) => {
  try {
    const comentarioRepository = await dbcontext.getRepository(Comentario);

    const idComentario = req.params.id;
    const updateComentario: iComentario = req.body;

    const result = await comentarioRepository.update(idComentario, updateComentario);

    if (!result.affected) {
      throw new Error('No se pudo actualizar el comentario');
    }

    res.json({ msg: 'Comentario actualizado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: 'No se pudo actualizar el comentario' });
  }
};
