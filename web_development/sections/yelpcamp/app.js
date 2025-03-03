    const express = require('express')
    const mongoose = require('mongoose')
    const path = require('path')

    const Campground = require('./models/campground')


    const mongoURI = 'mongodb://localhost:27017/yelp-camp'
    const connectDB = async () => {
        try {
            await mongoose.connect(mongoURI)
            console.log('Databse Open')
        } catch (err) {
            console.error('Connection Error: ', err)
        }
    }
    connectDB()

    const app = express()

    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, 'views'))

    app.use(express.urlencoded({extended: true}))

    app.get('/', (req, res) => {
        res.render('home')
    })

    app.get('/campgrounds', async (req, res) => {
        const campgrounds = await Campground.find({})
        res.render('campgrounds/index', {campgrounds})
    })

    app.get('/campgrounds/new', (req, res) => {
        res.render('campgrounds/new')
    })

    app.post('/campgrounds', async (req, res) => {
        const campground = new Campground(req.body.campground)
        await campground.save()
        res.redirect(`/campgrounds/${campground._id}`)
    })

    app.get('/campgrounds/:id', async(req, res) => {
        const {id} = req.params
        const campground = await Campground.findById(id)
        res.render('campgrounds/show', {campground})
    })


    app.listen(3000, () => console.log('love you 3000'))