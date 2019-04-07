const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Heroes = new Schema({
    heroName: { 
        type: String
    }, 
    birthName: { 
        type: String
    },
    series: { 
        type:[ String],
        default: undefined
    }, 
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

module.exports = mongoose.model('Heroes', Heroes);