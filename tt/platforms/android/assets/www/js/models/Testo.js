define(function(require) {

	var Backbone = require("backbone");

	var Testo = Backbone.Model.extend({
		
		defaults: {
		txt: 'none',
		},
	});

	return Testo;
});