
exports.up = function(knex, Promise) {
    return Promise.all([knex.schema.createTable('users', function(table){
      table.increments('id').primary;
      table.string('username');
      table.string('name');
      table.string('email');
      table.string('password');
      table.string('points');
      table.timestamp('created_at');
    }),
    knex.schema.createTable('quests', function(table) {
      table.increments('id').primary;
      table.integer('name');
      table.string('description');
      table.string('total_items');
      table.string('points_value');
      table.timestamp('created_at');
    }),
    knex.schema.createTable('quest_items', function(table) {
      table.increments('id').primary;
      table.integer('quest_id');
      table.string('points_value');
      table.string('description');
      table.timestamp('created_at');
    }),
    knex.schema.createTable('users_quests', function(table) {
      table.increments('id').primary;
      table.integer('user_id');
      table.string('quest_id');
      table.string('date_started');
      table.string('date_completed');
      table.timestamp('created_at');
    }),
    knex.schema.createTable('users_quest_items', function(table) {
      table.increments('id').primary;
      table.integer('user_id');
      table.string('quest_item_id');
      table.string('date_completed');
      table.timestamp('created_at');
    }),
    knex.schema.createTable('objects', function(table) {
      table.increments('id').primary;
      table.string('type');
      table.integer('points');
      table.string('name');
      table.string('description');
      table.timestamp('created_at');
    }),
    knex.schema.createTable('communes', function(table) {
      table.increments('id').primary;
      table.integer('user_id');
      table.string('name');
      table.string('defense_points');
      table.string('attack_points');
      table.timestamp('created_at');
    }),
    knex.schema.createTable('communes_objects', function(table) {
      table.increments('id').primary;
      table.integer('object_id');
      table.string('commune_id');
      table.timestamp('created_at');
    })
    ]);
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('quests'),
    knex.schema.dropTable('quest_items'),
    knex.schema.dropTable('users_quests'),
    knex.schema.dropTable('user_quest_items'),
    knex.schema.dropTable('objects'),
    knex.schema.dropTable('communes'),
    knex.schema.dropTable('commune_objects')
    ]);
  };
  