import cors from 'cors'
import express from 'express'
import * as rankingController from './controllers/rankingController.js'

const app = express()
app.use(cors())

app.get('ranking', rankingController.getRanking)

const PORT: number = 5000

app.listen(5000, () => console.log(`Funfando na porta: ${PORT}`))