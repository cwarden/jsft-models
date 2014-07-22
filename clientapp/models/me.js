var Model = require('./person');

module.exports = Model.extend({
    url: '/api/me.json'
});
