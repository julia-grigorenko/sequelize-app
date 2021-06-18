const express = require('express');
const routes = require('./routes');
const logger = require('morgan');
const db = require('./models');


const app = express();
const port = process.env.PORT;

//Use to parse JSON bodies
app.use(express.json());
app.use(logger('dev'))
app.use(logger('test'))

app.use('/api', routes);


app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.listen(port, ()=> {
    console.log(`App is listening at http://localhost:${port}`);
    console.log(`env is ${process.env.NODE_ENV}`);
    console.log(`sequelize env is ${db.sequelize.env}`);
    console.log(`db is ${db.sequelize.config.database}`);
});

/*app.listen({ port: 5000 }, async () => {
  console.log('Server up on http://localhost:5000')
  await sequelize.authenticate()
  console.log('Database Connected!')
}) */

module.exports = app;