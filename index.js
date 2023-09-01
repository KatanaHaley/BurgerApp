import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fetch from 'node-fetch';
const PORT = 8000;

import 'dotenv/config';


const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(json());
app.use(express.json())

app.get('/burgers', (req, res) => {
    const url = process.env.ENDPOINT
      
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
        Accept: "application/json",
        'X-Cassandra-Token': process.env.ASTRA_TOKEN
        }
    }
    
    fetch(url, options)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(err => console.log('error:'+ err))
})

function notFound(req, res, next) {
    res.status(404)
    const error = new Error('Not found')
    next(error)
}

function errorHandler(error, req, res) {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })