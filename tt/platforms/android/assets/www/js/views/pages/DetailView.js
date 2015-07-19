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
		"tap #remove": "del",
      "tap #back": "back",
	  "tap #home": "home"
	    },
	
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
	
	 add: function(e) {
		 var db = window.openDatabase("Database", "1.0", "Database media", 200000);
		db.transaction(queryDB, errorCB, qSuccess);
		 function queryDB(tx) 
		{
	var detail=JSON.parse(sessionStorage.getItem("details"));
	var category=sessionStorage.getItem("searchcat");
	tx.executeSql('INSERT INTO PREFS (title , user, txt, genre, year, img, category) VALUES ("'+detail.title+'", "'+localStorage.getItem("user")+'", "'+detail.txt+'","'+detail.genre+'", "'+detail.year+'","'+detail.img+'","'+category+'")');
 }

		function qSuccess(tx, results) {
alert("Inserted in preferences");
			 Backbone.history.navigate("results", {
        trigger: true
      });
      }

function errorCB(err) {
    alert("Error processing SQL: "+err.message);
}
},
	 
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
			 Backbone.history.navigate("results", {
        trigger: true
      });
      }

function errorCB(err) {
    alert("Error processing SQL: "+err.message);
}
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