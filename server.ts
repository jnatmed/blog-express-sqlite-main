import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import noticiasRoutes from './modules/noticias/notica.routes';
import comentarioRoutes from './modules/comentarios/comentario.routes'; // Importa las rutas de Comentario

import { dbcontext } from './modules/db/dbcontext';
process.env.TZ = 'America/Argentina/Buenos_Aires';
const time = new Date();
console.log(time.toLocaleDateString());
dbcontext
	.initialize()
	.then(() => {
		console.log('Base datos OK');
	})
	.catch((err) => {
		console.error('Base datos DOWN', err);
	});

const app: Express = express();

app.use(bodyParser.json());

app.use('/noticia', noticiasRoutes);
app.use('/comentario', comentarioRoutes); // Agrega las rutas de Comentario


app.listen(3000, () => {
	console.log('Servidor funcionando OK 🚀 EN EL PORT 3000');
});
