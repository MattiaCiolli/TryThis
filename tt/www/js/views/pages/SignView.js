define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	var User = require("models/User");
	
var SignView = Utils.Page.extend({

    constructorName: "SignView",

    id: "sign",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.signin;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.Sign(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

	events: {
      "tap #back": "login",
		"tap #signin": "signin"
      
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 login: function(e) {
      Backbone.history.navigate("login", {
        trigger: true
      });
    },
	 
	 signin: function(e) {
	  var u = new User({username: this.$el.find("#username")[0].value, pwd:this.$el.find("#password")[0].value, email:this.$el.find("#email")[0].value});
		localStorage.setItem(u.get("username"), JSON.stringify(u));
		 localStorage.setItem("user", u.get("username"));
	    alert("Created " + u.get("username") + " and a password of " + u.get("pwd")+" "+ u.get("email"));
		 Backbone.history.navigate("home", {
        trigger: true
      });
	},
    
});
	  return SignView;
});