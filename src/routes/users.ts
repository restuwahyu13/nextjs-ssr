import { Router, Request, Response } from 'express'
import axios from 'axios'

const router = Router()

const userRouter = (): Router => {
  router.get('/users', async (req: Request, res: Response): Promise<any> => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    return res.status(200).json([data])
  })

  return router
}

export default userRouter
