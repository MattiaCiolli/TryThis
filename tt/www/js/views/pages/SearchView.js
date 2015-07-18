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
      "tap #searchM": "results",
		"tap #searchMus": "results",
		"tap #searchB": "results",
		"tap #searchG": "results",
		"tap #searchTvs": "results"
    },
	
    render: function() {
      $(this.el).html(this.template());
		if(sessionStorage.getItem("searchelement")== "searchmovies")
			{this.setActiveSearch("#Movies");
			this.setActiveSearch("#M");}
		else if(sessionStorage.getItem("searchelement")== "searchmusic")
			{this.setActiveSearch("#Music");
			this.setActiveSearch("#Mus");}
		else if(sessionStorage.getItem("searchelement")== "searchbooks")
			{this.setActiveSearch("#Books");
			this.setActiveSearch("#B");}
		else if(sessionStorage.getItem("searchelement")== "searchgames")
			{this.setActiveSearch("#Games");
			this.setActiveSearch("#G");}
		else if(sessionStorage.getItem("searchelement")== "searchseries")
			{this.setActiveSearch("#Series");
			this.setActiveSearch("#S");}
      return this;
    },
	
	 results: function(e) { 
		 if(e.currentTarget.id=="searchM")
		 { 
			 sessionStorage.setItem("searchitem",this.$el.find("#inputM")[0].value);
			 sessionStorage.setItem("searchcat","FILM");
		  }
		 		 else if(e.currentTarget.id=="searchG")
		 {
			  sessionStorage.setItem("searchitem",this.$el.find("#inputG")[0].value);
			 sessionStorage.setItem("searchcat","GAMES");
		 }
		 else if(e.currentTarget.id=="searchB")
		 {
			  sessionStorage.setItem("searchitem",this.$el.find("#inputB")[0].value);
			 sessionStorage.setItem("searchcat","BOOK");
		 }
		 else if(e.currentTarget.id=="searchMus")
		 {
			  sessionStorage.setItem("searchitem",this.$el.find("#inputMus")[0].value);
			 sessionStorage.setItem("searchcat","BAND");
		 }
		 else if(e.currentTarget.id=="searchTvs")
		 {
			  sessionStorage.setItem("searchitem",this.$el.find("#inputTvs")[0].value);
			 sessionStorage.setItem("searchcat","SERIES");
		 }
		 
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