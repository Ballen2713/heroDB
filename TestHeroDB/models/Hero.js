const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HeroSchema = new Schema({
    heroName: { 
        type: String
    }, 
    birthName: { 
        type: String,
        required: true
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

module.exports = Hero = mongoose.model('hero', HeroSchema);