const mongoose = require('./connection')


const { Schema, model } = mongoose 


const animalsSchema = new Schema({
    species: String, 
    location: String, 
    lifeExpectancy: Number, 
    extinct: Boolean
})

const animal = model('Animal', animalsSchema)

module.exports = animal