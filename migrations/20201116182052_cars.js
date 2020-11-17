exports.up = async function(knex) {
  await knex.schema.createTable("cars",(table)=>{
      table.integer("id").notNull().unique().primary()
      table.text("make").notNull()
      table.text("model").notNull()
      table.text("vin").notNull()
      table.text("transmission").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
