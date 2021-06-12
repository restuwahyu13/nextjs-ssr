import next from 'next'
import express, { Express } from 'express'
import http, { Server} from 'http'
import bodyParser from 'body-parser'
import userRoute from './routes/users'
import todoRoute from './routes/todos'
import path from 'path'

const clientPort: string | number | undefined = process.env.PORT || 3000
const serverPort:  string | number | undefined = process.env.PORT || 5000
const dev: string = process.env.NODE_ENV !== 'production'
const app = next({ dir: path.resolve(process.cwd(), 'clients'), dev })
const handle = app.getRequestHandler()
const app = express() as Express
const server = http.createServer(app) as Server

if(process.env.NODE_ENV !== ('production')) {
	app.prepare().then(() => {
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))

		app.use('/api/v1', userRoute())
		app.use('/api/v1', todoRoute())

		app.get('**', (req, res) => handle(req, res))

		server.listen(port, () => console.log('client is running on port ' + clientPort))
	})
} else {
	app.prepare().then(() => {
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))

		app.use('/api/v1', userRoute())
		app.use('/api/v1', todoRoute())

		server.listen(port, () => console.log('server is running on port ' + serverPort))
	})
}
