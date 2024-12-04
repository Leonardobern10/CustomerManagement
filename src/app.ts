import 'reflect-metadata';
import express from 'express';
import router from './routes/CustomerRoutes';
import { AppDataSource } from './config/database';

const port = 3000;
const App = express();
App.use(express.json());

/**
 * Configuração das rotas da API.
 * Todas as rotas estão prefixadas com `/api`.
 */
App.use('/api', router);

/**
 * Inicializa a conexão com o banco de dados e inicia o servidor.
 * Em caso de erro, exibe uma mensagem de erro no console.
 */
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
