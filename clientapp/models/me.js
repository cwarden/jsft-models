var Wolf = require('./wolf');
var Friends = require('./friends');

module.exports = Wolf.extend({
    url: '/api/me.json',
    props: {
        sortFriendsBy: ['string', true, 'name']
    },
    session: {
        isMe: ['boolean', true, true],
    },
    collections: {
        friends: Friends
    }
});
