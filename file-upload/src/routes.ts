import { Router } from 'express'
import multer from 'multer'
import { multerConfig } from './config/multer'

const route = Router()

route.post(
  '/post',
  multer(multerConfig).single('file'),
  (req: any, res: any) => {
    console.log(req.file)

    return res.json('ola')
  }
)

export default route
