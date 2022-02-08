const fromAnotherFile = require("./functions")



const sample = () => 'proba'
const express = require('express')
const port = process.env.PORT || 3000;
const app = express()
//ustawienie, ze moja aplikacja musi korzystac z silnika hbs
app.set('view engine', 'hbs')
//gdy uzytkownik wchodzi na stronę
app.get('/', function (req, res) {
	res.render('index', {
        pageTitle: "Lekcja01",
        anotherTitle: sample()
        
    })
})
app.get('/about', function (req, res) {
	res.send('My site')
})
// ------------------------------------------------------
// DODAWANIE PODSTRON
app.get('/contact', function (req, res) {
	res.send('Contact Us')
})
// -------------------------------------------------------
app.listen(port, err => {
	if (err) {
		return console.log('coś poszło nie tak...:', err)
	}
	console.log('serwer działa na porcie', port)
})


const path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));

app.use('/js', express.static(path.join(__dirname, "./js")));