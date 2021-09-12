
const router = require('express').Router()
const petsController = require('../controller/PetsController')


router.get('/',petsController.getPetsData)


module.exports = router