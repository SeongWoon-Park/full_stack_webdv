
if (process.env.NODE_ENV !== 'procduction') {
    require('dotenv').config()
}
// loead all to variables from .env file
// if running in production env or not 
//if not equal to production
// load up this code to load up different dependencies 

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

//set the view engine use ejs as a view engine
app.set('view engine', 'ejs')
//set where our views are coming from put in views dir 
app.set('views',__dirname + '/views')
//set what our layout file is going to be 
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
//folder public 
app.use(express.static('public'))

const mongoose = require("mongoose")

//app you want to listen 
//pull from environment variable the server is going to tell what it is listening to 


//pass the string for the url which is going to come from the env variable
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose!!!'))


app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)