var Collection = require('ampersand-rest-collection');
var Wolf = require('./wolf');

module.exports = Collection.extend({
    model: Wolf,
    initialize: function () {
        var self = this;

        this.page = 0;

        this.parent.on('change:sortFriendsBy', function () {
            self.sort();
        });
    },
    comparator: function (model) {
        return model[this.parent.sortFriendsBy];
    },
    url: function () {
        this.page++;
        return '/api/friends/' + Math.min(this.page, 2) + '.json';
    }
});
