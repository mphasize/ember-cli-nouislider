/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-nouislider',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/nouislider/distribute/jquery.nouislider.all.js');
    app.import(app.bowerDirectory + '/nouislider/src/jquery.nouislider.css');
    app.import(app.bowerDirectory + '/nouislider/src/jquery.nouislider.pips.css');
  }
};
