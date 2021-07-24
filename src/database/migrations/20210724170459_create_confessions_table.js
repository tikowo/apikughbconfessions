
exports.up = function (knex) {
    return knex.schema.createTable('confessions', function(table) {
        table.engine('InnoDB');

        table.bigIncrements();
        table.string('confession', 1024).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('confessions');
};
