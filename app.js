const express = require('express');
const path = require('path')
const res = require('express/lib/response');
const app = express();//create new express app and save it as app
const port = 3000; //server configuration 
//create a route for the app 

app.get('/', (req,res) => {
    res.send("Hello World");
})

app.get('/product', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
 app.get('/about', (req,res) => {
     res.json({
         "Version " : 2.0,
         "author": "Pooja"
     })
 })
 
 app.post('/user', (req,res) => {
     res.send("This is post method")
 })

//Make the server listen the request 
app.listen(port, () => {
    console.log(`listening on ${port}`);
})



             