// const express = require('express')
const mongoose = require('mongoose')
// const path = require('path')
const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')

const Campground = require('../models/campground')

const mongoURI = 'mongodb://localhost:27017/yelp-camp'
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('Databse Open')
    } catch (err) {
        console.error('Connection Error: ', err)
    }
}

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async() => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const camp = new Campground({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
        })
        await camp.save()
    }
}
connectDB().then( async () => {
    await seedDB()
    mongoose.connection.close()
    console.log('Database Closed')
})