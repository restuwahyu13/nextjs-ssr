import next from 'next'
import express, { Express } from 'express'
import http, { Server } from 'http'
import bodyParser from 'body-parser'
import userRoute from './routes/users'
import todoRoute from './routes/todos'
import path from 'path'

const env: boolean = process.env.NODE_ENV !== 'production'
const nextHandler = next({ dir: path.resolve(process.cwd(), 'client'), dev: env })
const handler = nextHandler.getRequestHandler()
const clientPort: string | number | undefined = process.env.PORT || 3000
const serverPort: string | number | undefined = process.env.PORT || 5000
const app = express() as Express
const server = http.createServer(app) as Server

if (process.env.TYPE !== 'server') {
	nextHandler.prepare().then(() => {
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))

		app.use('/api/v1', userRoute())
		app.use('/api/v1', todoRoute())

		app.get('**', (req, res) => handler(req, res))

		server.listen(clientPort, () => console.log('client is running on port ' + clientPort))
	})
} else {
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))

	app.use('/api/v1', userRoute())
	app.use('/api/v1', todoRoute())

	server.listen(serverPort, () => console.log('server is running on port ' + serverPort))
}
