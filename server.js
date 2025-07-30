const express = require('express')
const dotEnv = require('dotenv')
const mongoose= require('mongoose')
const bodyParser= require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')
const cors = require('cors');


const app = express()

app.use(cors());

const PORT = process.env.PORT || 5000

dotEnv.config() // To mongodb connections config k

app.use(bodyParser.json())
//client side redering

// app.get('/mango', (req, res)=>{
//     res.json({fruit: "mango"})
// })



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully!")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use('/employees', employeeRoutes) // this is middleware url is employee

app.listen(PORT, ()=>{
    console.log(`Server started and running at ${PORT}`)
})

