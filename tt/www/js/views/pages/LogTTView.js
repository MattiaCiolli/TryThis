define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
 
var LogTTView = Utils.Page.extend({

    constructorName: "LogTTView",

    id: "logTT",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.loginTT;
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
      "tap #back": "back",
	  "tap #login": "login",
      
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 login: function(e) {
	//gets form's values
    var user= this.$el.find("#username")[0].value;
    var pword = this.$el.find("#password")[0].value;
	 var db = window.openDatabase("Database", "1.0", "Database media", 200000);
		 
		 //verify if user exists
		db.transaction(queryDB, errorCB, qSuccess);
		 function queryDB(tx) 
		{
		 tx.executeSql('SELECT * FROM USER WHERE username="'+user+'"', [], qSuccess, errorCB);
 }

		function qSuccess(tx, results) {
			if(results.rows.item(0).pwd==pword)
			{
				localStorage.setItem("user", user);
				alert("Welcome "+user+"!");
			 	Backbone.history.navigate("home", {
        		trigger: true
      			});
			}
		
		else if(results.rows.item(0).pwd!=pword)
			{
				alert("Wrong username or password");
			 //reload page
			 Backbone.history.navigate("login", {
        	trigger: true
      		});
			 Backbone.history.navigate("loginTT", {
        	trigger: true
      		});
		 }
      }

		function errorCB(err) {
    	console.log("Error processing SQL: "+err.message);
		alert("Unexisting user: "+user);
			//reload page
			 Backbone.history.navigate("login", {
        	trigger: true
      		});
			 Backbone.history.navigate("loginTT", {
        	trigger: true
      		});
}
		 
		 
  },

	 
	 back: function(e) {
      Backbone.history.navigate("login", {
        trigger: true
      });
    }
	
});
	  return LogTTView;
});