define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	
var MapView = Utils.Page.extend({

    constructorName: "MapView",

    id: "map",
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.home;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.log(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

	events: {
      "tap #goTomyview": "goToMv"
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 goToMv: function(e) {
      Backbone.history.navigate("myview", {
        trigger: true
      });
    }
	
});
	  return MapView;
});