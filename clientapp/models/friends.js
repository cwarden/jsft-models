var Collection = require('ampersand-rest-collection');
var Person = require('./person');

module.exports = Collection.extend({
    model: Person,
    initialize: function () {
        this.page = 0;
    },
    url: function () {
        this.page++;
        return '/api/friends/' + Math.min(this.page, 2) + '.json';
    }
});
