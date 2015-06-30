define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	
var UserView = Utils.Page.extend({

    constructorName: "UserView",

    id: "user",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.user;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.User(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

	events: {
      "tap #home": "home",
	  "tap #category": "category"
      
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 home: function(e) {
      Backbone.history.navigate("home", {
        trigger: true
      });
    },
	 
	 category: function(e) {
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
	
});
	  return UserView;
});