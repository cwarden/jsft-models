var View = require('ampersand-view');
var PersonTemplate = require('../templates/person.jade');

module.exports = View.extend({
    template: PersonTemplate,
    autoRender: true,
    bindings: {
        'model.name': '[role=name]'
    }
});