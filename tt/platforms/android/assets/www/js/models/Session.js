define(function(require) {
	
	var Backbone = require("backbone");
    
	var Session = Backbone.Model.extend({
		defaults: {
		actualuser: null
				}
			});
	return Session;
});

