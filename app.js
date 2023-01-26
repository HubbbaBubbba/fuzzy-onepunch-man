const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.set('view engine', 'ejs');

let myName = 'Ethan';

app.get('/', async (req,res) => {



    let result = await res.send(`<h3> Hi, ${ myName } </h3>`)

    console.log( myName );
})

app.get('/', function (req, res) {
//  res.send('<!DOCYPE html><html lang ="en"><h1>Hello World, is it November?</h1>')

res.send(`<h3> Hi, ${ myName } </h3>`);

})


app.get('/show', (req, res) => {

    //res.send('index.html');

    res.sendFile('index.html' , { root : __dirname});

})


app.get('/ejs', (req,res) => {

    console.log("in /ejs before render:", myName)

    res.render('index', { myName: myName });
    console.log("after res render /ejs:", myName);
})


console.log('in the node console')


app.listen(PORT, () => {
    console.log('Example app running.')
})

app.get('/name', (req, res) => {

    console.log("in get to slash name:", req.query.ejsFormName);

    res.sendFile('index.html' , { root : __dirname});

})
