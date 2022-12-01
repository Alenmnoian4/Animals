const express = require('express')
const animal = require('../models/animal')
const router = express.Router()

// ROUTES

router.get('/seed', (req, res) => {

})


// index  
router.get('/', (req, res) => {
    animal.find({})
    .then((animals) => {
        res.render('animals/index.ejs', {animals})
    })
    .catch(err => console.log(err))
})


// new 
router.get("/new", (req, res) => {
    res.render("animals/new.ejs")
})


// post 
router.post('/animals', (req, res) => {
    animal.create(req.body, (err, createdAnimal) => {
        console.log(createdAnimal)
        res.redirect('/animals')
    })
})


// edit 
router.get('/:id/edit', (req, res) => {
    
    const id = req.params.id
    animal.findById(id, (err, foundAnimal) => {
        res.render('animals/edit.ejs', { animal: foundAnimal })
    })
})


// update 
router.put('/:id', (req, res) => {
    const id = req.params.id
    req.body.extinct = req.body.extinct === 'on' ? true : false
    animal.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedAnimal) => {
        console.log(updatedAnimal, err)
        res.redirect('/animals')
    })
})


// show 
router.get('/:id', (req, res) => {
    animal.findById(req.params.id)
    .then((animal) => {
        // res.json(animal)
        res.render('animals/show.ejs', {animal})
    })
})


// destroy 
router.delete('/:id', (req, res) => {
    const id = req.params.id
    animal.findByIdAndDelete(id, (err, deletedAnimal) => {
        console.log(err, deletedAnimal)
        res.redirect('/animals')
    })
})

module.exports = router;