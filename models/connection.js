require('dotenv').config(); // load env variables 
const mongoose = require ('mongoose'); // gives us that db connections and cool methods from CRUD to the data

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)


mongoose.connection
    .on('open', ()=> console.log('Mongoose connected'))
    .on('close', ()=> console.log('Disconnected from Mongoose'))
    .on('error', (error)=> console.log('Mongoose error', error))


module.exports = mongoose 