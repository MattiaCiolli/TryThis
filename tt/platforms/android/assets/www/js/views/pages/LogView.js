define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
 
 	
var LogView = Utils.Page.extend({

    constructorName: "LogView",

    id: "log",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.login;
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
      "tap #skip": "home",
	  "tap #signin": "signin",
	  "tap #loginTT": "loginTT"
      
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
	 
	  loginTT: function(e) {
      Backbone.history.navigate("loginTT", {
        trigger: true
      });
    },
	  
	 signin: function(e) {
		Backbone.history.navigate("signin", {
        trigger: true
      });
    }
	
});
	  return LogView;
});