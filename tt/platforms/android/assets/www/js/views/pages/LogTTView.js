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
      "tap #back": "back",
	  "tap #login": "login",
      
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 login: function(e) {
    var actualuser= this.$el.find("#username")[0].value;
    var pword = this.$el.find("#password")[0].value;
	var tempu=JSON.parse(localStorage.getItem(actualuser));
		 
		 if(tempu==null)
		 {
		 	alert("Wrong password or username");
			 //Necessario per ricaricare la pagina
			 Backbone.history.navigate("login", {
        	trigger: true
      		});
			 Backbone.history.navigate("loginTT", {
        	trigger: true
      		});
		 }
		 
		 else if(tempu!=null)
		 {
		 if(tempu["pwd"]==pword)
		 {
			 localStorage.setItem("user", actualuser);
			alert("Welcome "+actualuser+"!");
    		//Backbone.sync("read",models);
		 
			 Backbone.history.navigate("home", {
        	trigger: true
			 });
		 }
		 else if(tempu["pwd"]!=pword)
		 {
			 alert("Wrong password or username");
			 //Necessario per ricaricare la pagina
			 Backbone.history.navigate("login", {
        	trigger: true
      		});
			 Backbone.history.navigate("loginTT", {
        	trigger: true
      		});
		 }
		 }
  },

	 
	 back: function(e) {
      Backbone.history.navigate("login", {
        trigger: true
      });
    }
	
});
	  return LogTTView;
});