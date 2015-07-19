define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var User = require("models/User");
var UserView = Utils.Page.extend({

    constructorName: "UserView",
	model:User,
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
	  "tap #movies": "category",
      "tap #books": "category",
	  "tap #series": "category",
	  "tap #games": "category",
	  "tap #music": "category",
    },
	
    render: function() {
     
	  $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
	
	 home: function(e) {
      Backbone.history.navigate("home", {
        trigger: true
      });
    },
	 
	 category: function(e) {
		 if(e.currentTarget.id=="movies")
		 {
			 sessionStorage.setItem("catID", "FILM");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
		 if(e.currentTarget.id=="music")
		 {
			 sessionStorage.setItem("catID", "BAND");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
		 if(e.currentTarget.id=="games")
		 {
			 sessionStorage.setItem("catID", "GAMES");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
		 if(e.currentTarget.id=="books")
		 {
			 sessionStorage.setItem("catID", "BOOK");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
		 if(e.currentTarget.id=="series")
		 {
			 sessionStorage.setItem("catID", "SERIES");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
	 }
	
});
	  return UserView;
});