var Model = require('./person');
var Friends = require('./friends');

module.exports = Model.extend({
	url: '/api/me.json',
	collections: {
		friends: Friends
	},
    props: {
        sortFriendsBy: ['string', true, 'name']
    },
    session: {
        isMe: ['boolean', true, true]
    }
});
