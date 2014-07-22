var View = require('ampersand-view');
var MainTemplate = require('../templates/main.jade');

module.exports = View.extend({
    template: MainTemplate,
    autoRender: true,
    events: {
        'click [role=find-friends]': 'findFriends'
    },
    render: function () {
        this.renderWithTemplate();
        return this;
    },
    findFriends: function () {
        this.model.friends.fetch();
    }
});