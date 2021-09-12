const router = require('express').Router()
const petsController = require('../controller/PetsController')

router.get('/:id',petsController.delMemberById)


module.exports =router