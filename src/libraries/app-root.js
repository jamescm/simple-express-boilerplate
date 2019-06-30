import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

export default dirname(
  resolve(
    fileURLToPath(import.meta.url),
    '../../'
  )
)
