
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.bigIncrements();
        table.string('name').notNullable();
        table.string('email').notNullable().unique('email');
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};