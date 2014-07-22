var View = require('ampersand-view');
var MainTemplate = require('../templates/main.jade');
var WolfView = require('./wolf');

module.exports = View.extend({
    template: MainTemplate,
    autoRender: true,
    events: {
        'click [role=find-friends]': 'findFriends',
        'change [role=sort-friends]': 'sortFriends'
    },
    render: function () {
        this.renderWithTemplate();

        new WolfView({
            model: this.model,
            el: this.getByRole('me')
        });

        return this;
    },
    findFriends: function () {
        this.model.friends.fetch();
    },
    sortFriends: function (event) {
        this.model.sortFriendsBy = event.target.value;
    }
});