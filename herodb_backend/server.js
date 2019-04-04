const express = require('express');
const app = express(); //creates new express instance
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;
const heroRoutes = express.Router();

let Heroes = require('./heroes.model');

app.use(cors()); 
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/heroDB',{useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() { 
    console.log("MongoDB database connection established successfully!");
});

heroRoutes.route('/').get(function(req, res) { 
    Heroes.find(function(err, hero){ 
        if(err) { 
            console.log(err);
        } else { 
            res.json(hero);
        }
    });
});

heroRoutes.route('/:id').get(function(req, res) { 
    let id = req.params.id
    Heroes.findById(id, function(err, hero) { 
        res.json(hero);
    });
});

heroRoutes.route('/add').post(function(req, res) { 
    let hero = new Heroes(req.body);
    hero.save()
        .then(hero => { 
            res.status(200).json({'hero':'Hero has successfully been added'})
        })
        .catch(err => { 
            res.status(400).json.send('There was an error adding the hero')
        });
});

heroRoutes.route('/update/:id').post(function(req, res) { 
    Heroes.findById(req.params.id, function(err, hero) { 
        if(!hero) { 
            res.status(404).send('data was not found');
        } else { 
            hero.hero_name = req.body.hero_name;
            hero.Name = req.body.Name;
            hero.hero_series = req.body.hero_series;
            hero.hero_genre = req.body.hero_genre;
            hero.hero_medium = req.body.hero_medium;
            hero.hero_gender = req.body.hero_gender;
            hero.hero_skils_abilities = req.body.hero_skils_abilities;

            hero.save().then(hero => { 
                res.json('Hero updated');
            })
            .catch(err => { 
                res.status(400).send("Update not possible");
            });
        }
    })
})

app.use('/hero', heroRoutes);

app.listen(PORT, function() { 
    console.log("Server is running of Port: " + PORT)
});