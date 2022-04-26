const express = require('express')

const cors = require('cors');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

mongoose.connect('puturl', { useNewUrlParser: true }, { useUnifiedTopology: true })

const eventsSchema = {
    firstname: String,
    lastname: String,
    email: String,
    feedback: String

}

const Event = mongoose.model("Event", eventsSchema);
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/lastpage.html");
})

app.post('/', function (req, res) {
    console.log('it came');
    let newEvent = new Event({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        feedback: req.body.feedback

    });
    newEvent.save();
    res.redirect('/');
})

app.listen(3000, function () {
    console.log('running');
})

