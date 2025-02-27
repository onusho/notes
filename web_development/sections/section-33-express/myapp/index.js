const express = require('express');

const app = express()
// console.dir(app)


// app.use((req, res) => {
//     console.log("We got a new REQUEST!")
//     res.send(`<h1>This is my webpage!</h1>
//         <p>${res}</p>`)
// })                 // runs all callback everytime request hit the sever

app.get('/cats', (req, res) => {
    res.send('MEOW!')
})
// /cats => 'meow'

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))       // http://localhost:3000

