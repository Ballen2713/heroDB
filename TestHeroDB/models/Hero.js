const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var notEmpty = function(series){
    if(series.length === 0){return false}
    else {return true};
}


// Create Schema
const HeroSchema = new Schema({
    heroName: { 
        type: String
    }, 
    birthName: { 
        type: String,
        required: [true, 'No birth was entered']
    },
    series: [{ 
        type: String,
        required:[true, 'Hero must belong to a series of some sort']
    }], 
    genre: { 
        type: [String]
    }, 
    medium: { 
        type: [String],
        default: undefined
    },
    gender: { 
        type: String
    },
    skills_abilities: { 
        type: [String],
        default: undefined
    }
});

module.exports = Hero = mongoose.model('hero', HeroSchema);