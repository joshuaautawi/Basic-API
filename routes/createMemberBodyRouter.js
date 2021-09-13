const router = require('express').Router()
const petsController = require('../controller/PetsController')

router.post('/',petsController.createNewMemberBody)

module.exports = router