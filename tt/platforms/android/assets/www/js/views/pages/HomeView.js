define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var Slideout = require("slideout");
	
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
	  "tap #about": "about",
	  "tap #logout": "logout",
	  "tap #help": "help",
	  "tap #account": "account",
	  "tap #searchmovies": "search",
	  "tap #searchgames": "search",
	  "tap #searchbooks": "search",
	  "tap #searchmusic": "search",
	  "tap #searchseries": "search"
	   },
	
    render: function() {
		
      $(this.el).html(this.template());
		
		//creates the slideout menu enabling its components
		var slideout = new Slideout({
        'panel': this.$el.find("#main")[0],
        'menu': this.$el.find("#menu")[0],
        'padding': 248,
        'tolerance': 70,
		'touch': false
      });
		this.$el.find("#account")[0].addEventListener('tap', function() {
			if(slideout.isOpen())
			{
          slideout.close();
			}
        });
		this.$el.find("#about")[0].addEventListener('tap', function() {
          if(slideout.isOpen())
			{
          slideout.close();
			}
        });
		this.$el.find("#logout")[0].addEventListener('tap', function() {
          if(slideout.isOpen())
			{
          slideout.close();
			}
        });
		this.$el.find("#help")[0].addEventListener('tap', function() {
          if(slideout.isOpen())
			{
          slideout.close();
			}
        });
				
		this.$el.find("#hamb")[0].addEventListener('click', function() {
          	
			if(!slideout.isOpen())
			{  
			slideout.open();
			}
			else if(slideout.isOpen())
			{
          	slideout.close();
			}
		});
												
	 return this;
    },
	
	account: function(e) {
		Backbone.history.navigate("user", {
        trigger: true
      });
    },
	 
	 logout: function(e) {
		localStorage.removeItem("user");
      Backbone.history.navigate("login", {
        trigger: true
      });
    },
	 
	 about: function(e) {
      Backbone.history.navigate("about", {
        trigger: true
      });
    },
	 
	 help: function(e) {
      Backbone.history.navigate("help", {
        trigger: true
      });
    },
	 
	 
	 //search depending on the category selected
	 search: function(e) {
		 if(e.currentTarget.id=="searchmovies")
		 {
		sessionStorage.setItem("searchelement", "searchmovies");
		Backbone.history.navigate("search", {
        trigger: true
	      });
		 }
		 else if(e.currentTarget.id=="searchgames")
		 {
	 	sessionStorage.setItem("searchelement", "searchgames");
      	Backbone.history.navigate("search", {
        trigger: true
	      });
	   }
		 else if(e.currentTarget.id=="searchbooks")
		 {
		sessionStorage.setItem("searchelement", "searchbooks");
      	Backbone.history.navigate("search", {
        trigger: true
	      });
	   }
		 else if(e.currentTarget.id=="searchseries")
		 {
		sessionStorage.setItem("searchelement", "searchseries");
      	Backbone.history.navigate("search", {
        trigger: true
	      });
	   }
		 else if(e.currentTarget.id=="searchmusic")
		 {
		sessionStorage.setItem("searchelement", "searchmusic");
      	Backbone.history.navigate("search", {
        trigger: true
	      });
	   }
		
    },  
	 
	 
});
	  return HomeView;
});