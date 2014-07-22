var Collection = require('ampersand-rest-collection');
var Person = require('./person');

module.exports = Collection.extend({
    model: Person,
    initialize: function () {
        this.page = 0;
    },
    url: function () {
        this.page++;
        var page = Math.min(this.page, 2);
        return '/api/friends/' + page + '.json';
    }
});
