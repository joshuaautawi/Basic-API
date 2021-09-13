const router = require('express').Router()
const petsController = require('../controller/PetsController')



router.post('/',petsController.createNewMember)

module.exports = router 