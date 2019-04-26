const express = require('express');
const router = express.Router();
const heroController = require('../../Controller/heroController');

// Hero Model
const Hero = require('../../models/Hero');

// @route GET api/heroes
// @desc Get All Heroes
// @access Public
router.get('/', (req, res) => {
    Hero.find(req.birthName)
        .sort({ birthName: 1 })
        .then(heroes => res.json(heroes))
});

// @route POST api/heroes
// @desc Create A Post
//@access Public
router.post('/', (req, res) => {
    const newHero = new Hero({
        heroName: req.body.heroName,
        birthName: req.body.birthName,
        series: req.body.series,
        genre: req.body.genre,
        medium: req.body.medium,
        gender: req.body.gender,
        skills_abilities: req.body.skills_abilities  
    });

    newHero.save().then(hero => res.json(hero));
});

// @route DELETE api/heroes:id
// @desc Delete A Hero
//@access Public
router.delete('/:id', (req, res) => {
    Hero.findById(req.params.id)
        .then(hero => hero.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});




module.exports = router; 
