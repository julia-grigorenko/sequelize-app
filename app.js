const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT;

//Use to parse JSON bodies
app.use(express.json());

app.use('/api', routes);


app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.listen(port, ()=> {
    console.log(`App is listening at http://localhost:${port}`);
});