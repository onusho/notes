const mongoose = require('mongoose')
mongoose.connect()

mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
mongoose.set('strictQuery', true)