var View = require('ampersand-view');
var FriendView = require('./friend');
var MainTemplate = require('../templates/main.jade');

module.exports = View.extend({
    template: MainTemplate,
    autoRender: true,
    events: {
        'click [role=fetch]': 'fetchFriends',
        'change [role=zoom]': 'setZoom'
    },
    render: function () {
        this.renderWithTemplate();
        new FriendView({
            model: this.model,
            el: this.getByRole('me')
        }).render();
        this.renderCollection(this.model.friends, FriendView, this.getByRole('friends'));
        return this;
    },
    fetchFriends: function () {
        this.model.friends.fetch();
    },
    setZoom: function (event) {
        this.model.mapZoom = parseInt(event.target.value, 10);
    }
});