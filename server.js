const express = require('express');
const app = express();
const port = 3012;
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    var competences = fs.readFileSync(__dirname + "/datas/competences.json");
    var competence = JSON.parse(competences);
    console.log(competence);
    res.render('index', {
        //message: "hello world",
        data: competence
    })
});

app.listen(port, function () {
    console.log("Server ON / port: " + port);
});