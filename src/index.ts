import next from 'next'
import express, { Express } from 'express'
import bodyParser from 'body-parser'
import userRoute from './routes/users'
import todoRoute from './routes/todos'

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const app = express() as Express

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))

	app.use('/api/v1', userRoute())
	app.use('/api/v1', todoRoute())

	app.get('**', (req, res) => handle(req, res))

	app.listen(port, () => console.log('server is running on port ' + port))
})
