import multer from 'multer'
import path from 'path'
import { randomBytes } from 'crypto'

export const multerConfig: multer.Options = {
  dest: path.resolve(
    'C:\\Users\\infra\\Projects\\Pessoal\\backend-practice\\file-upload\\src\\temp\\uploads'
  ),
  storage: multer.diskStorage({
    destination: path.resolve(
      'C:\\Users\\infra\\Projects\\Pessoal\\backend-practice\\file-upload\\src\\temp\\uploads'
    ),
    filename: (_, file, cb) => {
      randomBytes(16, (err, hash) => {
        if (err) cb(err, 'err')
        const myHash = hash.toString('hex')

        const fileName = `${myHash}-${file.originalname}`
        cb(null, fileName)
      })
    },
  }),
  limits: { fileSize: 2 * 2 * 1024 },
  fileFilter: (_, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gifs',
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type'))
    }
  },
}
