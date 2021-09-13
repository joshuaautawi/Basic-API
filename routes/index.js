const router = require('express').Router()
const homeRouter = require('./home.router')
const petsRouter = require('./pets.router')
const getAllPets = require('./getAllData.router')
const getPetById = require('./getPetById.router')
const newMember = require('./newMember.router')
const delMemberById = require('./deleteMember.router')
const updateMemberById =require('./updateMemberById.router')
const createNewMemberBody = require('./createMemberBody.router')
const updateMemberByBody = require('./updateMemberByBody.router')



router.use('/homepage',homeRouter)
router.use('/pets',petsRouter)
router.use('/alldata',getAllPets)
router.use('/getdata',getPetById)
router.use('/newmember',newMember)
router.use('/delById',delMemberById)
router.use('/updatemember',updateMemberById)
router.use('/members',createNewMemberBody)
router.use('/update',updateMemberByBody)

module.exports = router