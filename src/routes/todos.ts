import { Router, Request, Response } from 'express'
import axios from 'axios'

const router = Router()

const todoRouter = (): Router => {
	router.get('/todos', async (req: Request, res: Response): Promise<any> => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
		return res.status(200).json([data])
	})

	return router
}

export default todoRouter
