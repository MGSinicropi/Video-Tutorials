const express = require('express');

const app = express();

const port = 4500;

//middelware funnels requests and responses
//.use is not precise,  .get will return the precise route
//app.use((req, res, next) => {
app.get('/', (req, res, next)=>)
//send data to browser

    res.send(`<h1> Home Page </h1>`);


})

app.listen(4500, () =>{
    console.log(`Server is running on port ${port}`);
})