var MainView = require('./views/main');
var domready = require('domready');
var Me = require('./models/me');

window.app = {
    init: function () {
        var app = this;

        domready(function () {
            app.me = new Me();
            app.me.fetch();
            app.view = new MainView({ model: app.me });
            document.body.appendChild(app.view.el);
        });
    }
};

window.app.init();
