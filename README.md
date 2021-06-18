# RESTful API, Node.js, Express & Sequelize demo app

A functional RESTful API using Node.js and Express, which can transmit data to a Postgres database by utilizing Sequelize to translate JavaScript into equatable SQL commands.

* Getting data flowing from a Node.js and Express web application, to a PostgreSQL database with Sequelize as the O.R.M. 

* Define relationships between models: a sequelize project to assign tasks to particular users which use associations to define that relationship, then query the database based on those associations.

* Use migrations to manage the state of database schemas.

* App performs functionality such as getting all users with their associated tasklist, getting a specific user and tasklist, updating a user, and deleting a user.

* Use Cross-env to pass environment variables in npm scripts, which can use to specify a test environment.

* Use tests with Jest and SuperTest for testing routs


## Testing commands

* to test api routes `npm run test:routes`
* to test basic rot rout from app.js `npm run test:basic`
