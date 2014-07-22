var Model = require('ampersand-model');
var qs = require('querystring');

module.exports = Model.extend({
    props: {
        'id': 'number',
        'age': 'number',
        'name': 'string',
        'latitude': 'number',
        'longitude': 'number'
    },
    session: {
        mapZoom: ['number', true, 7]
    },
    derived: {
        mapImg: {
            deps: ['latitude', 'longitude', 'mapZoom'],
            fn: function () {
                if (!this.latitude || !this.longitude) return 'http://placehold.it/200x200';

                var params = {
                    center: this.latitude + ',' + this.longitude,
                    zoom: this.mapZoom,
                    size: '200x200',
                    key: app.key
                };

                if (!params.key) delete params.key;

                return 'http://maps.googleapis.com/maps/api/staticmap?' + qs.stringify(params); 
            }
        },
        title: {
            deps: ['name', 'age'],
            fn: function () {
                return this.name + ' is ' + this.age + ' years old';
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