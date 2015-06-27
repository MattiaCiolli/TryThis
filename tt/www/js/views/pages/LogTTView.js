define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	
var LogTTView = Utils.Page.extend({

    constructorName: "LogTTView",

    id: "logTT",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.loginTT;
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
      "tap #back": "login",
	  "tap #login": "home",
      
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
	 
	 login: function(e) {
      Backbone.history.navigate("login", {
        trigger: true
      });
    }
	
});
	  return LogTTView;
});