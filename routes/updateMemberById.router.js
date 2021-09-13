const router = require('express').Router()
const petsController = require('../controller/PetsController')

router.post('/:id',petsController.updateMember)


module.exports =router