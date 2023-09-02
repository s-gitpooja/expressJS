const express = require('express');
const res = require('express/lib/response');
const app = express();//create new express app and save it as app
const port = 3000; //server configuration 
//create a route for the app 

app.get('/', (req,res) => {
    res.send("Hello World");
})

app.get('/product', (req,res) => {
    res.send("I am product ")
})

//Make the server listen the request 
app.listen(port, () => {
    console.log(`listening on ${port}`);
})



             