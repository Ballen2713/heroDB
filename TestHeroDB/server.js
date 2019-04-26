// add dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const heroes = require('./routes/api/heroes');

const app = express(); // Initialize express

// BodyParser Middleware
app.use(bodyParser.json());


// DB Config
const db = require('./config/keys').mongoURI;
// Connect to Mongo
mongoose
.connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));
    

// Use Routes
<<<<<<< HEAD
app.use('/heroes', heroes);
=======
app.use('/api/heroes', heroes);
>>>>>>> bf7436b04a0e4782f0bbf118f6f350bd358ea128


// Define port
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



