require('dotenv').config()
const mongoose = require('./connection')
const animal = require('./animal')


mongoose.connection.on('open', () => {

     // data
    const startingAnimals = [
        {
            species:'Viper', 
            location: 'North Africa', 
            lifeExpectancy: 25, 
            extinct: false
        },
        {
            species:'Anaconda', 
            location: 'South America', 
            lifeExpectancy: 10, 
            extinct: false
        },
        {
            species:'Python', 
            location: 'Southeast Asia', 
            lifeExpectancy: 30, 
            extinct: false
        },
        {
            species:'Western Diamondback Rattlesnake', 
            location: 'U.S.A', 
            lifeExpectancy: 20, 
            extinct: false
        },
        {
            species:'Anaconda', 
            location: 'South America', 
            lifeExpectancy: 10, 
            extinct: false
        },
        {
            species:'Black Mamba', 
            location: 'South Africa', 
            lifeExpectancy: 11, 
            extinct: false
        },
        {
            species:'King Cobra', 
            location: 'North India', 
            lifeExpectancy: 20, 
            extinct: false
        }
    ]

    //delete 
    animal.deleteMany({}, (err, data) => {
        animal.create(startingAnimals, (err, createdAnimals) => {
            console.log(createdAnimals)
        })
    })
})