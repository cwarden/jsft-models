var View = require('ampersand-view');
var FriendTemplate = require('../templates/friend.jade');

module.exports = View.extend({
	template: FriendTemplate,
	autoRender: true,
	events: {
		'blur input[role]': 'changePropByRole'
	},
	bindings: {
		'model.mapImg': {
			type: 'attribute',
			selector: '[role=map]',
			name: 'src'
		},
		'model.title': '[role=title]',
		'model.latitude': {
			type: 'attribute',
			selector: '[role=latitude]',
			name: 'value'
		},
		'model.longitude': {
			type: 'attribute',
			selector: '[role=longitude]',
			name: 'value'
		}
	},
	changePropByRole: function (event) {
		this.model[event.target.getAttribute('role')] = parseFloat(event.target.value, 10);
	}
});