define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");
  
  var StructureView = Backbone.View.extend({

    constructorName: "StructureView",

    id: "main",

    events: {
      "tap #nav1": "login",
      "tap #nav2": "home",
	  "tap #nav3": "search",
	  "tap #nav4": "results",
	  "tap #nav5": "signin",
	  "tap #nav6": "loginTT",
	  "tap #nav7": "about",
	  "tap #nav8": "detail"
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.structure;
      //this.on("inTheDOM", this.rendered);
      // bind the back event to the goBack function
      //document.getElementById("back").addEventListener("back", this.goBack(), false);
    },

    render: function() {
		
		
        // load the template
      this.el.innerHTML = this.template({});
      // cache a reference to the content element
      this.contentElement = this.$el.find('#content')[0];
      return this;
    },

    // rendered: function(e) {
    // },

    // generic go-back function
    goBack: function() {
      //window.history.back();
    },

    setActiveTabBarElement: function(elementId) {
      // here we assume that at any time at least one tab bar element is active
      document.getElementsByClassName("active")[0].classList.remove("active");
      document.getElementById(elementId).classList.add("active");
    },
	
	detail: function(event) {
      Backbone.history.navigate("detail", {
        trigger: true
      });
    }, 

	about: function(event) {
      Backbone.history.navigate("about", {
        trigger: true
      });
    }, 
	
	loginTT: function(event) {
      Backbone.history.navigate("loginTT", {
        trigger: true
      });
    }, 
	
	signin: function(event) {
      Backbone.history.navigate("signin", {
        trigger: true
      });
    }, 
	
	login: function(event) {
      Backbone.history.navigate("login", {
        trigger: true
      });
    }, 
	
	home: function(event) {
      Backbone.history.navigate("home", {
        trigger: true
      });
    }, 
	
    search: function(event) {
      Backbone.history.navigate("search", {
        trigger: true
      });
    },

    results: function(event) {
      Backbone.history.navigate("results", {
        trigger: true
      });
    }
  });

  return StructureView;

});