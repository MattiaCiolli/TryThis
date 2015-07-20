define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");
	var User = require("models/User");
	
var SignView = Utils.Page.extend({

    constructorName: "SignView",

    id: "sign",
	className: "i-g page", //fondamentale per funzionamento di ratchet
	  
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.signin;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.Sign(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

	events: {
      "tap #back": "login",
		"tap #signin": "signin"
      
    },
	
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
	
	 login: function(e) {
      Backbone.history.navigate("login", {
        trigger: true
      });
    },
	 
	 signin: function(e) {
		 
		 var username= this.$el.find("#username")[0].value;
		 var pwd=this.$el.find("#password")[0].value;
		 var email=this.$el.find("#email")[0].value;
		  var db = window.openDatabase("Database", "1.0", "Database media", 200000);
		db.transaction(queryDB1);
		 function queryDB1(tx) 
		{
			tx.executeSql('SELECT * FROM USER WHERE username="'+username+'"', [], q1Success, errorCB);
		}
		
		function q1Success(tx, results) {
			if(results.rows.length==0)
		{
			alert("Created: "+username);
		}

			if(results.rows.length!=0)
		{
					
			Backbone.history.navigate("logTT", {
        trigger: true
      });
			Backbone.history.navigate("signin", {
        trigger: true
      });
			
			alert(username+" already exists");
		}
			
      }
		
		
		 db.transaction(queryDB);
		 function queryDB(tx) 
		{
			
			tx.executeSql('INSERT INTO USER (username, pwd, email) VALUES ("'+username+'", "'+pwd+'", "'+email+'")');
		}

		
function errorCB(err) {
    console.log("Error processing SQL: "+err.message);
}
	 
	    
		localStorage.setItem("user", username);
		 Backbone.history.navigate("home", {
        trigger: true
      });
	},
    
});
	  return SignView;
});