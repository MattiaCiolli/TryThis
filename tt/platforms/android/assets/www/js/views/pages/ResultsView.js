define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var Media=require("models/Media");
  var ResultsView = Utils.Page.extend({

    constructorName: "ResultsView",
	id: "results",
      initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.results;
      
   },

    
	className: "i-g page", //fondamentale per funzionamento di ratchet
   

   events: {
      "tap #back": "search",
      "tap #home": "home",
	  "tap li a" : "detail"
    },

    render: function() {
		var search=sessionStorage.getItem("searchitem");
		var category=sessionStorage.getItem("searchcat");
		//query to database
function queryDB(tx) 
		{
  tx.executeSql('SELECT genre FROM "'+ category+ '" WHERE title="'+ search+ '"', [], q1Success, errorCB);
			var genre=sessionStorage.getItem("genre");
  tx.executeSql('SELECT * FROM "'+ category+ '" WHERE genre="'+ genre+ '" AND title<>"'+ search+ '"', [], q2Success, errorCB);
}

		function q1Success(tx, results) {
console.log("Returned rows = " + results.rows.length);
	 console.log(results.rows.item(0).genre);
            sessionStorage.setItem("genre",results.rows.item(0).genre);
      }

function q2Success(tx, results) {
console.log("Returned rows = " + results.rows.length);
	 for (var i=0; i<results.rows.length; i++){
		 console.log(results.rows.item(i).title);
       $("#a").append('<li class="table-view-cell media"><a style="top:0px" class="navigate-right" id='+results.rows.item(i).title+'><img class="media-object pull-left" src='+results.rows.item(i).img+' width=108 heigth=178 ><div class="media-body"><h4>'+results.rows.item(i).title+'</h4><p>'+results.rows.item(i).genre+'</p></div></a></li>');
      }
	 i=0;
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}
//opens database and queries it
var db = window.openDatabase("Database", "1.0", "Database media", 200000);
db.transaction(queryDB, errorCB);

$(this.el).html(this.template());
      return this;

    },

	
	home: function(e) {
      Backbone.history.navigate("home", {
        trigger: true
      });
    },
	
	detail: function(e) {
		var search=e.currentTarget.id;
		var category=sessionStorage.getItem("searchcat");
			console.log(search);
		//query to database
	function queryDB(tx) 
		{
	  tx.executeSql('SELECT * FROM "'+category+'" WHERE title="'+ search+ '"', [], querySuccess, errorCB);
	}

	//in questo caso fa il log dell'anno del film, si puo usare per popolare template tramite oggetto, basta mettere tutto in querysuccess per lo scope della var
	function querySuccess(tx, results) {
	console.log("Returned rows = " + results.rows.length);
	console.log(results.rows.item(0).title);
	var m=new Media({year:results.rows.item(0).year, title:results.rows.item(0).title, genre:results.rows.item(0).genre, img:results.rows.item(0).img, txt:results.rows.item(0).txt});
	sessionStorage.setItem("details",JSON.stringify(m));
		
	}
	
	function errorCB(err) {
    alert("Error processing SQL: "+err.code);
	}
	//opens database and queries it
	var db = window.openDatabase("Database", "1.0", "Database media", 2000000);
	db.transaction(queryDB, errorCB);
		
	var count=1;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
	  Backbone.history.navigate("detail", {
        trigger: true
      });
     return;
  }
}

	
		
     		},
    
	
    search: function(e) {
      Backbone.history.navigate("search", {
        trigger: true
      });
    }
  });

  return ResultsView;

});