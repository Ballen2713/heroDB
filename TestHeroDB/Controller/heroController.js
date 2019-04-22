const Hero = require('../models/Hero');


exports.createNewHero = (req, res) => {
    let newHero = new Hero(req.body);
    newHero.save((err, hero) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).json(hero);
    });
  };