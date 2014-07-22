var View = require('ampersand-view');
var MainTemplate = require('../templates/main.jade');

module.exports = View.extend({
    template: MainTemplate,
    autoRender: true
});