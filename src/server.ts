import express from 'express';
import colors from 'colors';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import router from './router';
import db from './config/db';

// Conectar la db
export async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        // console.log(colors.bgGreen.bold('Conexión exitosa a la db'));
    } catch (error) {
        console.log(colors.bgRed.bold('Error al conectarse a la db'));
    }
}
connectDB();


const server = express();


server.use('/docs', cors(), swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const corsOptions: CorsOptions = {
    origin: function(origin, cb) {
        if (origin === process.env.FRONTEND_URL || !origin) {
            cb(null, true);
        } else {
            cb(new Error('Error de CORS'));
        }
    }
};
server.use(cors(corsOptions));


server.use(express.json());
server.use(morgan('dev'));

server.use('/api/products', router);

export default server;
