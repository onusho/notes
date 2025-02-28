const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(() => console.log()).catch(err => console.log(err))

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
})

const Product = mongoose.model('Product', productSchema)
const bike = new Product({name: 'Mountain Bike', price: 599})

bike.save().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})