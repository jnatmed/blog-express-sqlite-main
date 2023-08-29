import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import noticiasRoutes from './modules/noticias/notica.routes';
import { dbcontext } from './modules/db/dbcontext';

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

app.use('/', async (req: Request, res: Response) => {
	res.json({
		mgs: 'Servidor funcionando OK 🚀🚀',
	});
	res.status(201).json({ success: true });
});

app.use('/noticia', noticiasRoutes);

app.listen(3000, () => {
	console.log('Servidor funcionando OK 🚀 EN EL PORT 3000');
});
