require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Connected to DataBase.'))

app.use(express.json())

const waterRouter = require('./routes/water')
app.use('/water', waterRouter)



app.listen(3000, ()=> console.log('Server started.'))