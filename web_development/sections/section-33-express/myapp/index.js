const express = require('express');

const app = express()
// console.dir(app)


app.use((req, res) => console.log("We got a new REQUEST!"))                 // runs all callback everytime request hit the sever
const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))       // http://localhost:3000

