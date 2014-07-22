var Model = require('./person');
var Friends = require('./friends');

module.exports = Model.extend({
	url: '/api/me.json',
	collections: {
		friends: Friends
	},
    initialize: function () {
        this.on('change:mapZoom', function (model, value) {
            model.friends.each(function (friend) {
                friend.mapZoom = value;
            });
        });
    }
});
