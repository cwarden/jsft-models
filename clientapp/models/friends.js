var Collection = require('ampersand-rest-collection');
var Friend = require('./friend');

module.exports = Collection.extend({
    model: Friend,
    url: function () {
        return this.length === 0 ? '/api/me/friends.json' : '/api/me/friends-update.json';
    },
    comparator: function (model1, model2) {
        return model1.age - model2.age;
    }
});
