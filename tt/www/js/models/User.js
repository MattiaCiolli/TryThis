define(function(require) {

	var Backbone = require("backbone");

	var User = Backbone.Model.extend({
		
		defaults: {
		username: 'none',
		pwd:'none',
		email:'none'
	},


	});

	return User;
});