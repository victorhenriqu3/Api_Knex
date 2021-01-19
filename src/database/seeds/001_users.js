
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'victorhenriqu3'},
        { username: 'v1ctor'},
      ]);
    });
};
