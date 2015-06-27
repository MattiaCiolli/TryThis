define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	
var AboutView = Utils.Page.extend({

    constructorName: "AboutView",

    id: "about",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.about;
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
      "tap #back": "back",
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 back: function(e) {
      Backbone.history.navigate("home", {
        trigger: true
      });
    }
	
});
	  return AboutView;
});