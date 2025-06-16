import express from 'express';
import logger from './src/middlewares/logger.js';
import automoveisRoute from './src/routes/automoveis.routes.js';

const app = express(); 
const port = 3000;

app.use(express.json());
app.use(logger);
app.use("/controle-automoveis", automoveisRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});