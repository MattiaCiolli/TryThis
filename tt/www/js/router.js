define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var StructureView = require("views/StructureView");
  var ResultsView = require("views/pages/ResultsView");
  var SearchView = require("views/pages/SearchView");
  var HomeView = require("views/pages/HomeView");
  var LogView = require("views/pages/LogView");
  var SignView = require("views/pages/SignView");
  var AppRouter = Backbone.Router.extend({

    constructorName: "AppRouter",

    routes: {
      // the default is the structure view
      "": "showStructure",
      "search": "search",
      "results": "results",
		"home":"home",
		"login":"login",
		"signin":"signin"
		
    },

    firstView: "login",

    initialize: function(options) {
      this.currentView = undefined;
    },

    
	signin: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav5");
		// create the view and show it
      var page = new SignView();
      this.changePage(page);
    },
	
	results: function() {
      // highlight the nav1 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav4");
      // create a model with an arbitrary attribute for testing the template engine
      var model = new MyModel({
        key: "testValue"
      });
      // create the view
      var page = new ResultsView({
        model: model
      });
      // show the view
      this.changePage(page);
    },	

    search: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav3");
		// create the view and show it
      var page = new SearchView();
      this.changePage(page);
    },
	
	home: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav2");
		// create the view and show it
      var page = new HomeView();
      this.changePage(page);
    },
	
	login: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav1");
		// create the view and show it
      var page = new LogView();
      this.changePage(page);
    },

    // load the structure view
    showStructure: function() {
      if (!this.structureView) {
        this.structureView = new StructureView();
        // put the el element of the structure view into the DOM
        document.body.appendChild(this.structureView.render().el);
        this.structureView.trigger("inTheDOM");
      }
      // go to first view
      this.navigate(this.firstView, {trigger: true});
    },

  });

  return AppRouter;

});