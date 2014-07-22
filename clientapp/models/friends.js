var Collection = require('ampersand-rest-collection');
var Person = require('./person');

module.exports = Collection.extend({
    model: Person,
    initialize: function () {
        var self = this;
        this.page = 0;
        this.parent.on('change:sortFriendsBy', function () {
            self.sort();
        });
    },
    url: function () {
        return '/api/friends/' + this.page + '.json';
    },
    comparator: function (model) {
        return model[this.parent.sortFriendsBy];
    },
    fetch: function () {
        this.page++;
        return Collection.prototype.fetch.apply(this, arguments);
    }
});
