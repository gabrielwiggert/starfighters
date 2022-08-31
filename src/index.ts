import cors from 'cors'
import express from 'express'
import * as operacoesController from './controllers/operacoesController'

const app = express()
app.use(cors())

app.get('/soma/:numero', operacoesController.fazerSoma)

const PORT: number = 5000

app.listen(5000, () => console.log(`Funfando na porta: ${PORT}`))