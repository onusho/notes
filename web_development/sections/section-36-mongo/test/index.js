const mongoose = require('mongoose')
mongoose.connect()

mongoose.connect('mongodb://localhost:27017/moviesDB')      // creates moviesDB if doen't exist
mongoose.set('strictQuery', true)                           // will follow schema


var movieSchema = new mongoose.Schema({                     // blue print that defines structure of documents
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)      // model class
const amadeus = new Movie({title: 'amadeus', year: 1986, score: 9.6, rating: 'a'})
amadeus.save()