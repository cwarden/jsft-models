var View = require('ampersand-view');
var WolfTemplate = require('../templates/wolf.jade');

module.exports = View.extend({
    template: WolfTemplate,
    autoRender: true,
    events: {
        'change input[role]': 'changePropByRole'
    },
    changePropByRole: function (event) {
        var prop = event.target.getAttribute('role');
        var value = event.target.value;
        this.model[prop] = parseFloat(value);
    },
    bindings: {
        'model.title': {
            role: 'name'
        },
        'model.map': {
            type: 'attribute',
            name: 'src',
            role: 'map'
        },
        'model.zoom': {
            type: 'attribute',
            name: 'value',
            role: 'zoom'
        },
        'model.longitude': {
            type: 'attribute',
            name: 'value',
            role: 'longitude'
        },
        'model.latitude': {
            type: 'attribute',
            name: 'value',
            role: 'latitude'
        },
        'model.isMe': {
            type: 'booleanClass',
            name: 'is-me',
            role: 'content'
        },
        'model.isDisabled': [{
            type: 'booleanAttribute',
            name: 'disabled',
            role: 'latitude'
        }, {
            type: 'booleanAttribute',
            name: 'disabled',
            role: 'longitude'
        }]
    }
});