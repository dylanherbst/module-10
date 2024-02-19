// console.log('HAS STARTED');
const calcRoute = require('./routes/calcRoute');




const express = require('express')

const app = express()
const port = 3000

app.use(express.json());

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('../swagger.json');
app.use( '/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.get('/E1', (req, res) => {
    res.send('Exercise 1 Example')
    })


app.use('/', express.static('public'))

// app.use('/', express.static('calc'))


app.use('/calc', calcRoute);




app.listen(port, () => {
    console.log(`Example app listening
    at http://localhost:${port}`)
    })