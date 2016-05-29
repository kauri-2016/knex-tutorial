# Knex.js tutorial

## Steps

* Setup

  ```sh
  git init
  nvm use 6
  npm init
  npm i tape --save-dev
  npm i knex sqlite3 --save
  echo "node_modules" > .gitignore
  echo "*.sqlite" >> .gitignore
  echo "6" > .nvmrc
  git add .
  git commit -m "Initial commit"
  ```

* Add scripts in `package.json` to run knex.

  ```js
  "scripts": {
    "init": "knex init",
    "migrate:make": "knex migrate:make",
    "migrate:latest": "knex migrate:latest",
    "migrate:rollback": "knex migrate:rollback",
    "seed:make": "knex seed:make",
    "seed:run": "knex seed:run",
    "test": "tape tests.js"
  },
  ```

* Create `knexfile.js` by running `npm run init`.

* Prune the `knexfile.js` to:

  ```js
  module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite'
      },
      useNullAsDefault: true
    }
  } 
  ```

* Create `Users` table by running `npm run migrate:make create-users`

* Edit the migration file accordingly:

  ```js
  exports.up = function (knex, Promise) {
    console.log('Creating Users')
    return knex.schema.createTableIfNotExists('Users', function (table) {
      table.increments('id')
      table.string('firstName')
      table.string('lastName')
      table.string('username')
    })
  }

  exports.down = function (knex, Promise) {
    console.log('Dropping Users')
    return knex.schema.dropTableIfExists('Users').then(function () {
      console.log('Users table was dropped')
    })
  }
  ```

* Apply the migration file by running `npm run migrate:latest`.


