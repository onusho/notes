const express = require('express')
const path = require('path');
const app = express()
const { v4: uuid } = require('uuid'); //For generating ID's
const methodOverride = require('method-override')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]


app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    // console.log(req.body)
    // res.send("it works")
    const {username, comment} = req.body 
    comments.push({id: uuid(), username: username, comment: comment})
    res.redirect('/comments')
})




app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})


app.get('/tacos', (req, res) => {
    res.send('GET /tacos Response')
}) 


app.post('/tacos', (req, res) => [
    res.send('POST /tacos')
])
app.listen(3000, () => console.log('love you 3000'))