(function () {

  'use strict';

  var app = require('../load')([
    'mods/mod1',
    'mods/dep1',
    'mods/dep2',
    'mods/dep3',
  ]);

  // console.log(app);

  var theMeaningOfLife = app.mod1.calculate();

  console.log('The meaning of life, the universe and everything is: ' + theMeaningOfLife);

})();
