const express = require('express')
const router = express.Router()
//Get all workouts
router.get('/', (req, res) => {
res.json({mssg:'GET all workouts'})
})

//Get single workouts 
router.get('./:id', (req, res) => {
res.json({mssg: 'Get a single workouts'})
})
// POST a new workout
router.post('/', (req, res) => {
res.json({mss:'post a new  workout'})
})
// Delete a workout
router.delete('/:id', (req,res) => {
    
    res.json({mssg: 'DELETE a workout'})
})
//Update a workout 
router.patch('/:id', (req, res) => {
    res.json({mssg:'Post a new workout'})
})
module.exports = router