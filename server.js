const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// handle form submission
app.post('/send-email', (req, res) => {
// same code as before
});

// serve the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// handle all other routes
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// start the server
app.listen(process.env.PORT || 3001, () => {
console.log(Server is running on port ${process.env.PORT || 3001});
});