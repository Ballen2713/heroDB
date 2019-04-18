const express = require('express');
const router = express.Router();

// Hero Model
const Hero = require('../../models/Hero');

// @route GET api/heroes
// @desc Get All Heroes
//@access Public
router.get('/', (req, res) => {
    Hero.find().sort({ name: -1 }).then(heroes => res.json(heroes))
});






module.exports = router; 



























