define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var StructureView = require("views/StructureView");
  var ResultsView = require("views/pages/ResultsView");
  var SearchView = require("views/pages/SearchView");
  var HomeView = require("views/pages/HomeView");
  var LogView = require("views/pages/LogView");
  var SignView = require("views/pages/SignView");
  var LogTTView = require("views/pages/LogTTView");
  var AboutView = require("views/pages/AboutView");
  var DetailView = require("views/pages/DetailView");
  var UserView = require("views/pages/UserView");
  var CategoryView = require("views/pages/CategoryView");
  var User = require("models/User");
  var Testo = require("models/Testo");
  var Media=require("models/Media");
  var AppRouter = Backbone.Router.extend({

	  
    constructorName: "AppRouter",

    routes: {
      // the default is the structure view
      "": "showStructure",
      "search": "search",
      "results": "results",
	  "home":"home",
	  "login":"login",
	  "signin":"signin",
	  "loginTT":"loginTT",
	  "about":"about",
	  "detail":"detail",
	  "user":"user",
	  "category":"category"
		
    },
	
	initialize: function(options) {
      this.currentView = undefined;
    },

	category: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav10");
		
		if(sessionStorage.getItem("catID")=="FILM")
		{var t=new Testo({txt:"My Movies"});}
		else if(sessionStorage.getItem("catID")=="BOOK")
		{var t=new Testo({txt:"My Books"});}
		else if(sessionStorage.getItem("catID")=="GAME")
		{var t=new Testo({txt:"My Games"});}
		else if(sessionStorage.getItem("catID")=="SERIES")
		{var t=new Testo({txt:"My Tv series"});}
		else if(sessionStorage.getItem("catID")=="BAND")
		{var t=new Testo({txt:"My Music"});}
		// create the view and show it
      var page = new CategoryView({
			model:t
	  });
      this.changePage(page);
    },
	
user: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav9");
		 //var user=sessionStorage.getItem("user");
var actualuser=new User({username:localStorage.getItem("user")});
      var page = new UserView({ 
         model: actualuser 
       }); 

      this.changePage(page);
    },
	

detail: function() {
	
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav8");
	var detail=JSON.parse(sessionStorage.getItem("details"));
var media=new Media({year:detail.year, title:detail.title.replace(/_/g," "), genre:detail.genre, img:detail.img, txt:detail.txt});
var page = new DetailView({model:media});
      this.changePage(page);
    },
	
	about: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav7");
		// create the view and show it
      var page = new AboutView();
      this.changePage(page);
    },
	
    loginTT: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav6");
		// create the view and show it
      var page = new LogTTView();
      this.changePage(page);
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
		
      page = new ResultsView();
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
	  var user=sessionStorage.getItem("user");
	  console.log(user);
	  if(user==null)
	  {
		  var firstView= "login";
	  }
	  else
	  {var firstView="home";}
      this.navigate(firstView, {trigger: true});
    },

  });

  return AppRouter;

});