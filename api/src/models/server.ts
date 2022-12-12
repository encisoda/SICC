import { Empresa } from './empresas';
import { User } from './user'
import express, { Application } from 'express';
import routesEmpresas from '../routes/empresa.router';
import routesUser from '../routes/user.router'

class Server {

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.swagger();
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port)
        })
    }

    routes(){
        this.app.use('/api/empresas', routesEmpresas)
        this.app.use('/api/users', routesUser)
    }

    swagger(){
        const swaggerSpec = {
            definition: {
                openapi: "3.0.0",
                info:{
                    title: "Node MySQL API",
                    version: "1.0"
                },
                Servers:{
                    url: "http://localhost:3001"
                }
            }
        }
        const swaggerUi = require('swagger-ui-express')
        const swaggerjsDoc = require('swagger-jsdoc')
        this.app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerjsDoc(swaggerSpec)))
    }

    midlewares(){
        this.app.use(express.json())
    }

    async dbConnect(){
        try{
            await Empresa.sync()
            await User.sync()
        }
        catch (error) {
            console.error('Unable to connect to the database', error)
        }
    }
}

export default Server