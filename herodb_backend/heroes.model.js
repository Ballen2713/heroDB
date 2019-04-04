const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Heroes = new Schema({
    hero_name: { 
        type: String
    }, 
    Name: { 
        type: String
    },
    hero_series: { 
        type: String
    }, 
    hero_genre: { 
        type: String
    }, 
    hero_medium: { 
        type: String
    },
    hero_gender: { 
        type: String
    },
    hero_skills_abilities: { 
        type: String
    }
});

module.exports = mongoose.model('Heroes', Heroes);