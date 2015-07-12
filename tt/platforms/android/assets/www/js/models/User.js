define(function(require) {

	var Backbone = require("backbone");

	var User = Backbone.Model.extend({
		urlRoot:'http://localhost/ttjson',
		

		defaults: {
		username: 'none',
		pwd:'none',
		email:'none'
	},

	});

	return User;
});