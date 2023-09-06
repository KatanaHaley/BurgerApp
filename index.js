import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fetch from 'node-fetch';
// import { Client } from '@elastic/elasticsearch';
const PORT = 8000;

import 'dotenv/config';

// const client = new Client({
//     cloud: {
//       id: 'Quick_Start_Enterprise_Search:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyQyZmJkOTM4MWZmOTk0MTM3OWJiMWM3YTUyZWM3NjY4MSRjOWFjOWI0NTJmNDA0ZjBjYjkwN2NmZDRiMTdmYzhiNw==',
//     },
//     auth: {
//       username: 'elastic',
//       password: 'EdUQXG1KQMX0uQ9mdst3NoUZ'
//     }
//   })

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