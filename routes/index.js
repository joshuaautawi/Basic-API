const router = require('express').Router()
const homeRouter = require('./homeRouter')
const petsRouter = require('./petsRouter')
const getAllPets = require('./getAllDataRouter')
const getPetById = require('./getPetByIdRouter')
const newMember = require('./newMemberRoute')
const delMemberById = require('./deleteMemberRouter')
const updateMemberById =require('./updateMemberByIdRouter')




router.use('/homepage',homeRouter)
router.use('/pets',petsRouter)
router.use('/alldata',getAllPets)
router.use('/getdata',getPetById)
router.use('/newmember',newMember)
router.use('/delById',delMemberById)
router.use('/updatemember',updateMemberById)



module.exports = router