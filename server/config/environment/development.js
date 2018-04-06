'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: //'mongodb://arif:arif@ds153412.mlab.com:53412/bookku' 
    'mongodb://localhost/bookku'
  },

  // Seed database on startup
  seedDB: true

};
