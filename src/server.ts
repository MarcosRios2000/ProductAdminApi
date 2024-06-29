import express from 'express'
import router from './router'
import db from './config/db'


//conectar la db
async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log('Conexión exitosa a la db')
    } catch (error) {
        console.log(error)
    }
}
connectDB()

const server = express()

server.use('/api/products', router)



export default server