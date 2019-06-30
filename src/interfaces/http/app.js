import express from 'express'
import middleware from './middleware/all.js'

const app = express()

app.use(middleware())

export default app
