const { Router } = require('express')
const moviesRouter = require('../routes/movieRoutes')

const router = Router()

router.use('/movies', moviesRouter)


module.exports = router