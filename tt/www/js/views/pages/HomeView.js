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
	  "tap #account": "account",
	  "tap #searchmovies": "search",
	  "tap #searchgames": "search",
	  "tap #searchbooks": "search",
	  "tap #searchmusic": "search",
	  "tap #searchseries": "search"
	   },
	
    render: function() {
		
      $(this.el).html(this.template());
		var slideout = new Slideout({
        'panel': this.$el.find("#main")[0],//document.getElementById('panel'),
        'menu': this.$el.find("#menu")[0],//document.getElementById('menu'),
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
	 
	 
	 /////////////////////////////////////////// USARE QUESTA FUNZIONE PER DISTINGUERE LE RICERCHE PER CATEGORIE 
	 search: function(e) {
		 if(e.currentTarget.id=="searchmovies")
		 {
		localStorage.setItem("searchelement", "searchmovies");
		Backbone.history.navigate("search", {
        trigger: true
	      });
		 }
		 else if(e.currentTarget.id=="searchgames")
		 {
	 localStorage.setItem("searchelement", "searchgames");
      Backbone.history.navigate("search", {
        trigger: true
	      });
	   }
		 else if(e.currentTarget.id=="searchbooks")
		 {
		localStorage.setItem("searchelement", "searchbooks");
      Backbone.history.navigate("search", {
        trigger: true
	      });
	   }
		 else if(e.currentTarget.id=="searchseries")
		 {
		localStorage.setItem("searchelement", "searchseries");
      Backbone.history.navigate("search", {
        trigger: true
	      });
	   }
		 else if(e.currentTarget.id=="searchmusic")
		 {
		localStorage.setItem("searchelement", "searchmusic");
      Backbone.history.navigate("search", {
        trigger: true
	      });
	   }
		
    },  
	 
	 
});
	  return HomeView;
});