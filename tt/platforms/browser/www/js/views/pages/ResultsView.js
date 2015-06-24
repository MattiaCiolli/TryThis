define(function(require) {

  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var Utils = require("utils");

  var ResultsView = Utils.Page.extend({

    constructorName: "ResultsView",

    model: MyModel,

    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.results;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.log(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

    id: "results",
	className: "i-g page", //fondamentale per funzionamento di ratchet
   

   events: {
      "tap #back": "search",
      "tap #home": "home"
    },

    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },

    search: function(e) {
      Backbone.history.navigate("search", {
        trigger: true
      });
    }
  });

  return ResultsView;

});