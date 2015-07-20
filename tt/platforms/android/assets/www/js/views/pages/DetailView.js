define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var Media = require("models/Media");
  var Spinner= require("spin");
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
		"tap #remove": "del",
      "tap #back": "back",
	  "tap #home": "home"
	    },
	
    render: function() {
		
	var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = this.$el.find(".media-object");
var spinner = new Spinner(opts).spin(target);
		
      $(this.el).html(this.template(this.model.toJSON()));
	//hides share or delete depending the provenience view
		var deleter = this.$el.find("#remove")[0];
		var adder=this.$el.find("#add")[0];
		 if(sessionStorage.getItem("prevpage")== "category")
		 {
			adder.style.visibility="hidden";
		 }
		 if(sessionStorage.getItem("prevpage")== "result")
		 {
			deleter.style.visibility="hidden"; 
		 }
      return this;
    },
	
	//add to prefs
	 add: function(e) {
		 var db = window.openDatabase("Database", "1.0", "Database media", 200000);
		db.transaction(queryDB, errorCB, qSuccess);
		 function queryDB(tx) 
		{
			var detail=JSON.parse(sessionStorage.getItem("details"));
			var category=sessionStorage.getItem("searchcat");
			tx.executeSql('INSERT INTO PREFS (idp, title, user, txt, genre, year, img, category) VALUES ("'+detail.title+localStorage.getItem("user")+'","'+detail.title+'", "'+localStorage.getItem("user")+'", "'+detail.txt+'","'+detail.genre+'", "'+detail.year+'","'+detail.img+'","'+category+'")');
 		}

		function qSuccess(tx, results) {
			alert("Inserted in preferences");
			 if(sessionStorage.getItem("prevpage")== "category")
		 {
     	 	Backbone.history.navigate("category", {
        	trigger: true
      		});
		 }
		 else if(sessionStorage.getItem("prevpage")== "result")
		 {
			 Backbone.history.navigate("results", {
        	trigger: true
      		});
		 }
      }	

	function errorCB(err) {
    console.log("Error processing SQL: "+err.message);
	}
	},
	 
	 
	//remove from prefs
	  del: function(e) {
     var db = window.openDatabase("Database", "1.0", "Database media", 200000);
		db.transaction(queryDB, errorCB, qSuccess);
		 function queryDB(tx) 
		{
	var detail=JSON.parse(sessionStorage.getItem("details"));
	tx.executeSql('DELETE FROM PREFS WHERE user="'+localStorage.getItem("user")+'" AND title="'+detail.title+'"');
 	}

		function qSuccess(tx, results) {
			alert("Deleted from preferences");
			 if(sessionStorage.getItem("prevpage")== "category")
		 {
     	 	Backbone.history.navigate("category", {
        	trigger: true
      		});
		 }
		 else if(sessionStorage.getItem("prevpage")== "result")
		 {
			 Backbone.history.navigate("results", {
        	trigger: true
      		});
		 }
      }

		function errorCB(err) {
    		console.log("Error processing SQL: "+err.message);
		}
		},
	
	 
	  back: function(e) { 
		 
		 if(sessionStorage.getItem("prevpage")== "category")
		 {
     	 	Backbone.history.navigate("category", {
        	trigger: true
      		});
		 }
		 else if(sessionStorage.getItem("prevpage")== "result")
		 {
			 Backbone.history.navigate("results", {
        	trigger: true
      		});
		 }
		 
    },
	 
	 home: function(e) {
      Backbone.history.navigate("home", {
        trigger: true
      });
    }
	
});
	  return DetailView;
});