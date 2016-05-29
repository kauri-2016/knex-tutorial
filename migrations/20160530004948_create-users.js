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
