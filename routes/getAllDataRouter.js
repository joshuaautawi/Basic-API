const router = require('express').Router()
const petsController = require('../controller/PetsController')



router.get('/',petsController.getAllData)


module.exports = router