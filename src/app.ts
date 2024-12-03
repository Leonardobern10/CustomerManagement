import 'reflect-metadata';
import express from 'express';
import router from './routes/CustomerRoutes';
import { AppDataSource } from './config/database';

const port = 3000;
const App = express();
App.use(express.json());

App.use('/api', router);

AppDataSource.initialize()
    .then(() => {
        console.log('Banco de dados conectado!');
        App.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao se conectar ao banco de dados', error);
    });
