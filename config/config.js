// config.js
require('dotenv').config();

const {CONFIG_DEVELOPMENT_USERNAME,CONFIG_DEVELOPMENT_PASSWORD,CONFIG_DEVELOPMENT_DATABASE,CONFIG_DEVELOPMENT_HOST} = process.env;
const {CONFIG_TEST_USERNAME,CONFIG_TEST_PASSWORD,CONFIG_TEST_DATABASE,CONFIG_TEST_HOST} = process.env;
const {CONFIG_PRODUCTION_USERNAME,CONFIG_PRODUCTION_PASSWORD,CONFIG_PRODUCTION_DATABASE,CONFIG_PRODUCTION_HOST} = process.env;

module.exports = {
  "development": {
    "username": CONFIG_DEVELOPMENT_USERNAME,
    "password": CONFIG_DEVELOPMENT_PASSWORD,
    "database": CONFIG_DEVELOPMENT_DATABASE,
    "host": CONFIG_DEVELOPMENT_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": CONFIG_TEST_USERNAME,
    "password": CONFIG_TEST_PASSWORD,
    "database": CONFIG_TEST_DATABASE,
    "host": CONFIG_TEST_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": CONFIG_PRODUCTION_USERNAME,
    "password": CONFIG_PRODUCTION_PASSWORD,
    "database": CONFIG_PRODUCTION_DATABASE,
    "host": CONFIG_PRODUCTION_HOST,
    "dialect": "postgres"
  }
};