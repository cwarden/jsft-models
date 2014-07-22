var Collection = require('ampersand-rest-collection');
var Wolf = require('./wolf');

module.exports = Collection.extend({
    model: Wolf,
    initialize: function () {
        this.page = 0;
    },
    url: function () {
        this.page++;
        return '/api/friends/' + Math.min(this.page, 2) + '.json';
    }
});
