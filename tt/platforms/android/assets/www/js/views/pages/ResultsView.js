define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
  var Media=require("models/Media");
  var Spinner= require("spin");
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
		
		var search=sessionStorage.getItem("searchitem");
		var category=sessionStorage.getItem("searchcat");
		//query to database
function queryDB(tx) 
		{
   tx.executeSql('SELECT * FROM "'+ category+ '" WHERE title<>"'+ search+ '" AND genre IN (SELECT genre FROM "'+ category+ '" WHERE title="'+ search+ '")', [], qSuccess, errorCB);
}

function qSuccess(tx, results) {
if(results.rows.length==0)
{
	alert("No results");
	 Backbone.history.navigate("search", {
        trigger: true
      });
}
	 for (var i=0; i<results.rows.length; i++){
		 console.log(results.rows.item(i).title);
       $("#a").append('<li class="table-view-cell media"><a style="top:0px" class="navigate-right" id='+results.rows.item(i).title+'><img class="media-object pull-left" src='+results.rows.item(i).img+' width=108 heigth=178 ><div class="media-body"><h4>'+results.rows.item(i).title.replace(/_/g," ")+'</h4><p>'+results.rows.item(i).genre+'</p></div></a></li>');
      }
	 i=0;
}

function errorCB(err) {
   console.log("Error processing SQL: "+err.code);
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

	//stores the result to load it in............
	function querySuccess(tx, results) {
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

var counter=setInterval(timer, 500); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
	  sessionStorage.setItem("prevpage", "result");
	  Backbone.history.navigate("detail", {
        trigger: true
      });
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