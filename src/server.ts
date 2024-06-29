import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'


//conectar la db
async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bgGreen.bold('Conexión exitosa a la db'))
    } catch (error) {
        console.log(colors.bgRed.bold('Error al conectarse a la db:') + ' ' + error)
    }
}
connectDB()

// Instancia de express
const server = express()


// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)



export default server