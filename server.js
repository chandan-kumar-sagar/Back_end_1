const express = require('express');
const app= express();

app.listen(3000, () => {
    console.log("server started at port no 3000")
});

const bodyParser = require('body-parser');

//specifically parse json data & add it to the  request. body object
app.use(bodyParser.json());


app.get('/', (req,res) =>{
    res.send("hello jii kaise ho sare");
})

app.post('/api/cars',(req, res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted succesfully.")   
})

const mongoose = require('mongoose');
mongoose.connect('mongodb:/localhost:27017/myDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("connection succesful")})
.catch((error)=>{console.log("recieved error")});

