define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	
var HomeView = Utils.Page.extend({

    constructorName: "HomeView",

    id: "Home",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
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
      "tap #tt": "tt",
      "tap #card": "search",
	  "tap #settings": "settings"
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 search: function(e) {
      Backbone.history.navigate("search", {
        trigger: true
      });
    }
	
});
	  return HomeView;
});