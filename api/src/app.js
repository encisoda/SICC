import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import documentsRoutes from './routes/documents.routes'
import authRoutes from './routes/auth.routes'
import {createRoles} from './libs/initialSetup'

const app = express()
createRoles();

app.set('pkg', pkg);
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/documents', documentsRoutes)
app.use('/api/auth', authRoutes)


export default app;