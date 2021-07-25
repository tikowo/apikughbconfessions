
exports.up = function (knex) {
    return knex.schema.createTable('confession_replies', function (table) {
        table.engine('InnoDB');

        table.bigIncrements();
        table.bigInteger('confession_id').unsigned().index().references('id').inTable('confessions');
        table.bigInteger('parent_id').unsigned().index().references('id').inTable('confession_replies').nullable();

        table.string('reply', 1024).notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('confession_replies');
};
