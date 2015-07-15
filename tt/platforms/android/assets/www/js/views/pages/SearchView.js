define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	
var SearchView = Utils.Page.extend({

    constructorName: "SearchView",

    id: "search",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.search;
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
      "tap #back": "home",
      "tap #search": "results"
    },
	
    render: function() {
      $(this.el).html(this.template());
		if(localStorage.getItem("searchelement")== "searchmovies")
			{this.setActiveSearch("#Movies");
			this.setActiveSearch("#M");}
		else if(localStorage.getItem("searchelement")== "searchmusic")
			{this.setActiveSearch("#Music");
			this.setActiveSearch("#Mus");}
		else if(localStorage.getItem("searchelement")== "searchbooks")
			{this.setActiveSearch("#Books");
			this.setActiveSearch("#B");}
		else if(localStorage.getItem("searchelement")== "searchgames")
			{this.setActiveSearch("#Games");
			this.setActiveSearch("#G");}
		else if(localStorage.getItem("searchelement")== "searchseries")
			{this.setActiveSearch("#Series");
			this.setActiveSearch("#S");}
      return this;
    },
	
	 results: function(e) {
      Backbone.history.navigate("results", {
        trigger: true
      });
    },
	 
	 home: function(e) {
      Backbone.history.navigate("home", {
        trigger: true
      });
    },
	 
	 setActiveSearch: function(elementId) {
       this.$el.find(elementId)[0].classList.add("active");
    },
	
});
	  return SearchView;
});