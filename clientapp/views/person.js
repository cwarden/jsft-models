var View = require('ampersand-view');
var FriendTemplate = require('../templates/person.jade');

module.exports = View.extend({
	template: FriendTemplate,
	autoRender: true,
	events: {
		'blur input[role]': 'changePropByRole',
		'change input[role=mapZoom]': 'changePropByRole'
	},
	bindings: {
		'model.title': '[role=title]',
		'model.mapImg': {
			type: 'attribute',
			selector: '[role=map]',
			name: 'src'
		},
		'model.latitude': {
			type: 'attribute',
			selector: '[role=latitude]',
			name: 'value'
		},
		'model.longitude': {
			type: 'attribute',
			selector: '[role=longitude]',
			name: 'value'
		},
		'model.zoom': {
			type: 'attribute',
			selector: '[role=zoom]',
			name: 'value'
		},
		'model.isMe': {
		    type: 'booleanClass',
		    selector: '[role=person]',
		    name: 'is-me'
		},
		'model.isDisabled': [{
			type: 'booleanAttribute',
			selector: '[role=latitude]',
			name: 'disabled'
		}, {
			type: 'booleanAttribute',
			selector: '[role=longitude]',
			name: 'disabled'
		}, {
			type: 'booleanClass',
			selector: '[role=latitude]',
			name: 'disabled'
		}, {
			type: 'booleanClass',
			selector: '[role=longitude]',
			name: 'disabled'
		}]
	},
	changePropByRole: function (event) {
		this.model[event.target.getAttribute('role')] = parseFloat(event.target.value, 10);
	}
});