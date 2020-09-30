import express from 'express'
import morgan from 'morgan'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.get('/', (_, res) => {
  return res.json('hello')
})
app.use(routes)

app.listen(4040, () => {
  console.log('Server is running on - http://localhost:4040')
})
