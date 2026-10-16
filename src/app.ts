import express from 'express';
import apiRoutes from './routes';

const app = express();

// Middleware para interpretar solicitudes con cuerpos en formato JSON
app.use(express.json());

// Montar el enrutador principal bajo el prefijo /api/v1
app.use('/api/v1', apiRoutes);

export default app;