const User = require('../models/user-model');

module.exports = function(done) {
  if (process.env.NODE_ENV === 'test') {
    User
      .deleteMany({})
      .then(function() {
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};