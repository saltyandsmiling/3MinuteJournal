const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/journalStorage');
const dataCon = require('./dataController')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', dataCon.createEntry, (req, res) => res.send(req.body));

app.post('/delete', dataCon.delete, (req, res) => res.send('hey'));

app.get('/loadFetch', dataCon.loadFetch, (req, res) => res.send(res.locals.body));

app.get('/', (req, res) => res.redirect('http://localhost:8080'));

app.listen(3000);
