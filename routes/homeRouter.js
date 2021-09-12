const router = require('express').Router()

router.get("/",(req,res)=>{
    res.json({"route" : "home page" , "data" : "none"})
})

module.exports = router