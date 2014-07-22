var MainView = require('./views/main');
var domready = require('domready');
var Me = require('./models/me');

window.app = {
    init: function () {
        var app = this;

        app.me = new Me();
        app.me.fetch();

        domready(function () {
            app.view = new MainView({ model: app.me });
            document.body.appendChild(app.view.el);
        });
    }
};

window.app.init();
