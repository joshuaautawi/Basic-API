const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 5002
const env = process.env.NODE_ENV || 'development'
const router = require('./routes/index')
const cors = require('cors')

app.use('/api',router)


//Body parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended :false}))




try{
    app.listen(PORT,()=>{
        console.log(`Server is started ${new Date} in ${env} and listen in port : ${PORT} `)
    })
}catch(e){
    console.log(`Failed to connect to port : ${PORT}`)
}