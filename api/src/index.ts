import express from 'express';
import mongoose from 'mongoose';
import { router } from './router.js';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Conectado ao mongo');

    const app = express();
    const port = 3001;
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
      app.use(express.json());
      app.use('/', router);
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongo'));
