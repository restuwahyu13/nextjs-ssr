import next from 'next'
import express from 'express'
import bodyParser from 'body-parser'
import userRoute from './routes/users'
import todoRoute from './routes/todos'

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const app = express()

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))

	app.use('/api/v1', userRoute())
	app.use('/api/v1', todoRoute())

	app.all('*', (req, res) => handle(req, res))

	app.listen(port, () => console.log('server is running on port ' + port))
})
