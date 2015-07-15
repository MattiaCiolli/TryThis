define(function(require) {

	var Backbone = require("backbone");

	var Media = Backbone.Model.extend({
		constructorName: "Media",
		
		defaults: {
		type: 'none',
		title:'none',
		txt:'none',
		image:'none'
	},
	});

	return Media;
});