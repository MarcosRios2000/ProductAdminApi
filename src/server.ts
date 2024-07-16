import express from 'express'
import colors from 'colors'
import cors, { CorsOptions } from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger'
import router from './router'
import db from './config/db'


//conectar la db
export async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.bgGreen.bold('Conexión exitosa a la db'))
    } catch (error) {
        console.log(colors.bgRed.bold('Error al conectarse a la db'))
    }
}
connectDB()

// Instancia de express
const server = express()

const corsOptions : CorsOptions= {
    origin: function(origin, cb) {
        if(origin === process.env.FRONTEND_URL){
            cb(null, true)
        } else {
            cb(new Error('Error de CORS'))
        }
    }
}
server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)


server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default server