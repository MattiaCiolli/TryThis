// here we put the paths to all the libraries and framework we will use
require.config({
  paths: {
    jquery: '../lib/zepto/zepto',
    underscore: '../lib/underscore/underscore',
    backbone: "../lib/backbone/backbone",
    text: '../lib/require/text',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
    templates: '../templates',
    spin: '../lib/spin/spin.min',
    preloader: '../lib/preloader/pre-loader',
    utils: '../lib/utils/utils',
	slideout:'../lib/slideout/dist/slideout'
	},
  
  shim: {
    'jquery': {
      exports: '$'
    },
	
    },
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
   

});

// We launch the App
require(['backbone', 'utils'], function(Backbone, Utils) {
  require(['preloader', 'router'], function(PreLoader, AppRouter) {

    document.addEventListener("deviceready", run, false);

    function run() {

      // Here we precompile ALL the templates so that the app will be quickier when switching views
      // see utils.js
      Utils.loadTemplates().once("templatesLoaded", function() {

      var images = []; // here the developer can add the paths to the images that he would like to be preloaded

      if (images.length) {
          new PreLoader(images, {
            onComplete: startRouter
          });
        } else {
          // start the router directly if there are no images to be preloaded
          startRouter();
        }

        function startRouter() {
         //create database
        var db = window.openDatabase("Database", "1.0", "Database media", 200000);
        db.transaction(populateDB, errorCB, successCB);
    
		// Populate the database 
    function populateDB(tx) {
         tx.executeSql('DROP TABLE IF EXISTS FILM');
         tx.executeSql('CREATE TABLE IF NOT EXISTS FILM (title unique, txt, genre, year, img)');
         tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Fast and furious 7", "trama varia", "action", "2014", "http://ia.media-imdb.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX640_SY720_.jpg")');
         tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Wanted", "trama varia", "action", "2008", "http://ia.media-imdb.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SX214_AL_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Dumb and dumber", "trama varia", "comedy", "1994", "http://ia.media-imdb.com/images/M/MV5BMTIzNDI5MTc0M15BMl5BanBnXkFtZTYwMjM5NDU5._V1_SX640_SY720_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("I robot", "trama varia", "sci-fi", "2004", "http://ia.media-imdb.com/images/M/MV5BMTQwNzI5NTQ0OF5BMl5BanBnXkFtZTYwMTI3Mjk2._V1_SX214_AL_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("I am legend", "trama varia", "sci-fi", "2007", "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX640_SY720_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Titanic", "trama varia", "romantic", "1997", "http://ia.media-imdb.com/images/M/MV5BMjExNzM0NDM0N15BMl5BanBnXkFtZTcwMzkxOTUwNw@@._V1_SY317_CR0,0,214,317_AL_.jpg"');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Lord of the Rings: The Fellowship of the Ring", "trama varia", fantasy", "2001", "http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SY317_CR1,0,214,317_AL_.jpg"');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }
	// Transaction success callback
    //
    function successCB() {
        alert("success!");
    }

			 // launch the router
          var router = new AppRouter();
          Backbone.history.start();
        }
      });
    }
  });
});