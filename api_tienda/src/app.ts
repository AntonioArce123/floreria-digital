import express from 'express'
import cors from 'cors'
import personalRoutes from './routes/personal.routes'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('API Florería funcionando correctamente')
})

app.use('/api/personal', personalRoutes)

app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en http://localhost:${PORT}`)
})
