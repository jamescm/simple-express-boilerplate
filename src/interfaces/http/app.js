import express from 'express'
import appRoot from '../../libraries/app-root.js'
import middleware from './middleware/all.js'
import user from '../../components/user/user.routes.js'

const app = express()

app.set('root', appRoot)

app.use(middleware())
app.use(user())

export default app
