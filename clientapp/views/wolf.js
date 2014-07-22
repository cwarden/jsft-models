var View = require('ampersand-view');
var WolfTemplate = require('../templates/wolf.jade');

module.exports = View.extend({
    template: WolfTemplate,
    autoRender: true,
    bindings: {
        'model.name': '[role=name]'
    }
});