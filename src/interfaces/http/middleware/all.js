import express from 'express'
import headers from './headers.js'

export default () => {
  const router = new express.Router()

  router.use(headers())

  return router
}
