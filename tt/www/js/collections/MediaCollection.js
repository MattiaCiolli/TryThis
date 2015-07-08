define(function(require) {

	var Backbone = require("backbone");
	var Media = require("models/Media");

	var MediaCollection = Backbone.Collection.extend({
		constructorName: "MCollection",
		model: Media
	});

	return MediaCollection;
});