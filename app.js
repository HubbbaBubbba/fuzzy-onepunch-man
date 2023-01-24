const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.set('view engine', 'ejs');

let myName = 'Ethan';


app.get('/', function (req, res) {
//  res.send('<!DOCYPE html><html lang ="en"><h1>Hello World, is it November?</h1>')

res.send(`<h3> Hi, ${ myName } </h3>`);

})


app.get('/show', (req, res) => {

    //res.send('index.html');

    res.sendFile('index.html' , { root : __dirname});

})

app.get('/ejs', (req,res) => {

    res.render('index');
})
console.log('in the node console')

app.listen(PORT, () => {
    console.log('Example app running.')
})
