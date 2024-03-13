// Create your own Server
const express = require('express');
const app = express();

// Activaton the server on 3000 port
app.listen(3000,() => {
    console.log("Server started at port No. 3000")
});

// get request // response found on the home page
app.get('/',(req,res) =>{
    res.send("Hello kaise ho sare log");
})

// Post request 
app.post('/api/cars',(req,res) => {
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted Successfully")
});

// To get Data -->> PUT or Post
const bodyParser = require('body-parser');

// specifically parse json data & and it to the requestAnimationFrame.body  object
app.use(body-Parser.json());
