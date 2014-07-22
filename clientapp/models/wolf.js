var Model = require('ampersand-model');
var qs = require('querystring');

module.exports = Model.extend({
    props: {
        id: 'number',
        age: 'number',
        name: 'string',
        latitude: 'number',
        longitude: 'number'
    },
    session: {
        size: ['string', true, '200x200'],
        zoom: ['number', true, 7]
    },
    derived: {
        title: {
            deps: ['name', 'age'],
            fn: function () {
                return this.name + ' ' + this.age;
            }
        },
        hasGeo: {
            deps: ['latitude', 'longitude'],
            fn: function () {
                return typeof this.latitude === 'number' &&
                    isNaN(this.latitude) === false &&
                    typeof this.longitude === 'number' &&
                    isNaN(this.longitude) === false;
            }
        },
        map: {
            deps: ['hasGeo', 'latitude', 'longitude', 'size', 'zoom'],
            fn: function () {
                if (this.hasGeo) {
                    return 'http://maps.googleapis.com/maps/api/staticmap?' + qs.stringify({
                        center: [this.latitude, this.longitude].join(),
                        size: this.size,
                        zoom: this.zoom
                    });
                } else {
                    return 'http://placehold.it/' + this.size;
                }
            }
        },
        isDisabled: {
            deps: ['isMe'],
            fn: function () {
                return !this.isMe;
            }
        }
    }
});