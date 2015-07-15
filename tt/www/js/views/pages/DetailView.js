define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var Media = require("models/Media");
	
var DetailView = Utils.Page.extend({

    constructorName: "DetailView",

    id: "detail",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  model:Media,
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.detail;
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
      "tap #add": "add",
      "tap #back": "back",
	  "tap #home": "home"
	    },
	
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
	
	 back: function(e) {
      Backbone.history.navigate("results", {
        trigger: true
      });
    },
	 
	 home: function(e) {
      Backbone.history.navigate("home", {
        trigger: true
      });
    }
	
});
	  return DetailView;
});