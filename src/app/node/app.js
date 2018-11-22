const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
    ref.push(obj);   // Creates a new ref with a new "push key"

})

app.get('/users', (req, res) => {
    res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:4200', 'Content-Type', 'application/json');
    res.send(JSON.stringify({
        "name": "Clément"
    }))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})