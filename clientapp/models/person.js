var Model = require('ampersand-model');

module.exports = Model.extend({
    props: {
        id: 'number',
        age: 'number',
        name: 'string',
        latitude: 'number',
        longitude: 'number'
    }
});