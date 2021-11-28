const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const favoriteSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    campsites:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Campsites'
    
    }]
    }, {
        timestamps: true
    });


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;     