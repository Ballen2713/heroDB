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

//default route for displaying the current heroes within the database 
heroRoutes.route('/').get(function(req, res) { 
    Heroes.find(function(err, hero){ 
        if(err) { 
            console.log(err);
        } else { 
            res.json(hero);
        }
    });
});

//returns the specified hero based on id
heroRoutes.route('/:id').get(function(req, res) { 
    let id = req.params.id
    Heroes.findById(id, function(err, hero) { 
        res.json(hero);
    });
});

//adding a hero into the database 
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

//Update endpoint which allows the user to update any information about a particular hero
heroRoutes.route('/update/:id').post(function(req, res) { 
    Heroes.findById(req.params.id, function(err, hero) { 
        if(!hero) { 
            res.status(404).send('data was not found');
        } else { 
            hero.heroName = req.body.heroName;
            hero.birthName = req.body.birthName;
            hero.series = req.body.series;
            hero.genre = req.body.genre;
            hero.medium = req.body.medium;
            hero.gender = req.body.gender;
            hero.skils_abilities = req.body.skils_abilities;

            hero.save().then(hero => { 
                res.json('Hero updated');
            })
            .catch(err => { 
                res.status(400).send("Update not possible");
            });
        }
    })
})

//Delete route implemented for test purposes but won't be used 
// heroRoutes.route('/:id').delete(function(req, res) { 
//     Heroes.findById(req.params.id, function(err, hero){ 
//         if(err) { 
//             res.status(500).send(err);
//         } else { 
//             res.status(200).send('Hero Removed Successfully!');
//         }
//     })
// })

app.use('/hero', heroRoutes);

app.listen(PORT, function() { 
    console.log("Server is running of Port: " + PORT)
});