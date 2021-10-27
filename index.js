const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Volunteer server runnig');
})

app.listen(port, (req, res) => {
    console.log('Server running on port :', port);
})