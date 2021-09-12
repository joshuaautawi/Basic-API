const router = require('express').Router()
const petsController = require('../controller/PetsController')
const express = require('express')


router.post('/',petsController.createNewMember)

module.exports = router 