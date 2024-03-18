const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        min:1,
        required:true
    },
    director: {
        type:String,
        required:true
    },
    duration: {
        type:String,
        required:true
    },
    genre:{
        type:Array,
        required: true
    },
    rate:{
        type:Number,
        required:true
    },
    poster:{
        type:String,
        required:true
    }
})

const Movie = model('Movie', movieSchema)

module.exports = Movie;