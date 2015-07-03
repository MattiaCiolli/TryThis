define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var Slideout = require("slideout");
  var slick = require("slick");
	
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
	  "tap #click": "click",
	  "tap #account": "account"
    },
	
    render: function() {
		
      $(this.el).html(this.template());
		
		//  SLICK            /////////////////////////////////////////////////////////
		
		this.$el.find('.slider').slick({
      		dots: true,
  			infinite: true,
  			slidesToShow: 3,
  			slidesToScroll: 3
		});
		
		//  FINE SLICK       ////////////////////////////////////////////////////////
		
      var slideout = new Slideout({
        'panel': this.$el.find("#main")[0],//document.getElementById('panel'),
        'menu': this.$el.find("#menu")[0],//document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
      });
		
      return this;
    },
	
	
	 search: function(e) {
      Backbone.history.navigate("search", {
        trigger: true
      });
    },  
	 
	 account: function(e) {
      Backbone.history.navigate("user", {
        trigger: true
      });
    },
	 
	 logout: function(e) {
      Backbone.history.navigate("user", {
        trigger: true
      });
    },
	 
	 about: function(e) {
      Backbone.history.navigate("about", {
        trigger: true
      });
    }
	
});
	  return HomeView;
});