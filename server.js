import express from 'express';

const app = express(); 
const port = 3000;

app.use(express.json());
app.use(logger);
app.use("/controle-automoveis", automoveisRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});