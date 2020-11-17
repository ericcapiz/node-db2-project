exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()
   
  await knex("cars").insert([
    { make:"nissan", model:"sentra",vin:"1234", transmission:"auto"},
    { make:"ford", model:"focus",vin:"2468", transmission:"manual"},
    {make:"audi", model:"a5",vin:"3690", transmission:"auto"},
    {make:"hyundai", model:"sonata",vin:"9513", transmission:"auto"},
    {make:"honda", model:"accord",vin:"1234", transmission:"auto"},
  ])
};
