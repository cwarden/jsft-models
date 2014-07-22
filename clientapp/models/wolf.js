var Model = require('ampersand-model');

module.exports = Model.extend({
    props: {
        id: 'number',
        age: 'number',
        name: 'string',
        latitude: 'number',
        longitude: 'number'
    },
    session: {
        map: ['string', true, 'http://placehold.it/200x200']
    }
});