express = require('express')
const app = express()
const redditData = require('data.json')
// console.log(redditData)
const path= require('path')

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty'
    ]
    res.render('cats', {cats})
})
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10)
    res.render("random.ejs", {rand: num})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params 
    const data = redditData[subreddit]
    console.log(data)
    if (data) {
        res.render('subreddit.ejs', {...data})
    } else {
        res.render('notfound', {subreddit})
    }

    }
)
app.listen(3000, () => {
    console.log("love you 3000")
})