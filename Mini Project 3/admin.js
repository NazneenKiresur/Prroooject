const express = require('express');

const mongoose = require('mongoose');

const app = express();

const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('Puturl', { useNewUrlParser: true }, { useUnifiedTopology: true });

const eventSchema = {
    firstname: String,
    lastname: String,
    email: String,
    feedback: String
}

const Events = mongoose.model('Events', eventSchema);

app.get('/', function (req, res) {
    Events.find({}, function (err, events) {
        res.render('admin', {
            EventsList: events
        });

    })
})



app.listen(8080, function () {
    console.log('server running');
})

