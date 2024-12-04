import 'reflect-metadata';
import express from 'express';
import router from './routes/CustomerRoutes';
import { AppDataSource } from './config/database';
import { errorHandler } from './handler/erroHandler';

const port = 3000;
const App = express();
App.use(express.json());

/**
 * Configuração das rotas da API.
 * Todas as rotas estão prefixadas com `/api`.
 */
App.use('/api', router);

// Middleware de erros deve ser registrado após as rotas
App.use(errorHandler);

/**
 * Inicializa a conexão com o banco de dados e inicia o servidor.
 * Em caso de erro, exibe uma mensagem de erro no console.
 */
AppDataSource.initialize()
    .then(() => {
        console.log('Connected to database');
        App.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error on connect to database', error);
    });
