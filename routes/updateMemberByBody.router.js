const router = require('express').Router()
const PetsController = require('../controller/PetsController')

router.post('/:id',PetsController.updateMemberByBody)

module.exports = router