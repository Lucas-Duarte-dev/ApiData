const { json } = require('body-parser');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();


app.use(cors())


app.get('/', async (req, res) => {
try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts')

    res.json(data);
} catch (error) {
    
}

})

app.listen('3333')