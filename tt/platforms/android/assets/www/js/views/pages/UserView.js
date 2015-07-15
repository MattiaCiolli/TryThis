define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var Session = require("models/Session");
var UserView = Utils.Page.extend({

    constructorName: "UserView",
	model:Session,
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
			 localStorage.setItem("catID", "movies");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
		 if(e.currentTarget.id=="music")
		 {
			 localStorage.setItem("catID", "music");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
		 if(e.currentTarget.id=="games")
		 {
			 localStorage.setItem("catID", "games");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
		 if(e.currentTarget.id=="books")
		 {
			 localStorage.setItem("catID", "books");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
		 if(e.currentTarget.id=="series")
		 {
			 localStorage.setItem("catID", "series");
      Backbone.history.navigate("category", {
        trigger: true
      });
    }
	 }
	
});
	  return UserView;
});