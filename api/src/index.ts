import express from 'express';
import mongoose from 'mongoose';
import { router } from './router.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cors from 'cors';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Conectado ao mongo');

    const app = express();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.use(
      cors.default({
        origin: 'http://localhost:5173',
      }),
    );

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    const port = 3001;

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
      app.use(express.json());
      app.use('/', router);
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongo'));
