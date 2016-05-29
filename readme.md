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
