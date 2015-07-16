define(function(require) {

	var Backbone = require("backbone");

	var Media = Backbone.Model.extend({
		constructorName: "Media",
		
		defaults: {
		genre: 'none',
		title:'none',
		txt:'none',
		img:'none',
		year:'none'
	},
	});

	return Media;
});