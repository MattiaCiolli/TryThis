define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var Testo =require("models/Testo");
var CategoryView = Utils.Page.extend({

    constructorName: "CategoryView",

    id: "category",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	 model:Testo, 
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.category;
		    	
    },

	events: {
      "tap #back": "back",
	  "tap #search":"searchpref",
	  "tap #detail":"detail",
	},
	
    render: function() {
		
		var category=sessionStorage.getItem("catID");
		//query to database
function queryDB(tx) 
		{
  tx.executeSql('SELECT * FROM PREFS WHERE user="'+localStorage.getItem("user")+'" AND category="'+category+'"', [], qSuccess, errorCB);
			
}

function qSuccess(tx, results) {
console.log("Returned rows = " + results.rows.length);
	 for (var i=0; i<results.rows.length; i++){
		 console.log(results.rows.item(i).title);
       $("#a").append('<li class="table-view-cell media"><a style="top:0px" class="navigate-right" id='+results.rows.item(i).title+'><img class="media-object pull-left" src='+results.rows.item(i).img+' width=108 heigth=178 ><div class="media-body"><h4>'+results.rows.item(i).title+'</h4><p>'+results.rows.item(i).genre+'</p></div></a></li>');
      }
	 i=0;
}

function errorCB(err) {
    alert("Error processing SQL: "+err.message);
}
//opens database and queries it
var db = window.openDatabase("Database", "1.0", "Database media", 200000);
db.transaction(queryDB, errorCB);

	$(this.el).html(this.template(this.model.toJSON()));
	return this;
    },
	
	 back: function(e) {
      Backbone.history.navigate("user", {
        trigger: true
      });
    },
	 
	detail: function(e) {
      Backbone.history.navigate("detail", {
        trigger: true
      });
    },
	 
	 searchpref: function(e) {
      Backbone.history.navigate("search", {
        trigger: true
      });
    }
	
});
	  return CategoryView;
});