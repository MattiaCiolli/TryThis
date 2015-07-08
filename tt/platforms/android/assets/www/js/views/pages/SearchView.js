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
      "tap #search": "risultati"
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 risultati: function(e) {
      Backbone.history.navigate("results", {
        trigger: true
      });
    }
	
});
	  return SearchView;
});