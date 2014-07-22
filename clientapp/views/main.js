var View = require('ampersand-view');
var PersonView = require('./person');
var MainTemplate = require('../templates/main.jade');

module.exports = View.extend({
    template: MainTemplate,
    autoRender: true,
    events: {
        'click [role=fetch]': 'fetchFriends'
    },
    render: function () {
        this.renderWithTemplate();
        new PersonView({
            model: this.model,
            el: this.getByRole('me')
        }).render();
        this.renderCollection(this.model.friends, PersonView, this.getByRole('friends'));
        return this;
    },
    fetchFriends: function () {
        this.model.friends.fetch();
    }
});