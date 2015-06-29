define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	
var CategoryView = Utils.Page.extend({

    constructorName: "CategoryView",

    id: "category",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.category;
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
	  "tap #searchpref":"searchpref"
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 back: function(e) {
      Backbone.history.navigate("user", {
        trigger: true
      });
    }
	
});
	  return CategoryView;
});