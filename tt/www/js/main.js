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
        /*---------- FILM TABLE ---------- */
         tx.executeSql('DROP TABLE IF EXISTS FILM');
         tx.executeSql('CREATE TABLE IF NOT EXISTS FILM (title unique, txt, genre, year, img)');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Fast and furious 7", "trama varia", "action", "2014", "http://ia.media-imdb.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX640_SY720_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Wanted", "trama varia", "action", "2008", "http://ia.media-imdb.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SX214_AL_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Dumb and dumber", "trama varia", "comedy", "1994", "http://ia.media-imdb.com/images/M/MV5BMTIzNDI5MTc0M15BMl5BanBnXkFtZTYwMjM5NDU5._V1_SX640_SY720_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("I robot", "trama varia", "sci-fi", "2004", "http://ia.media-imdb.com/images/M/MV5BMTQwNzI5NTQ0OF5BMl5BanBnXkFtZTYwMTI3Mjk2._V1_SX214_AL_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("I am legend", "trama varia", "sci-fi", "2007", "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX640_SY720_.jpg")'); //5
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Titanic", "trama varia", "romantic", "1997", "http://ia.media-imdb.com/images/M/MV5BMjExNzM0NDM0N15BMl5BanBnXkFtZTcwMzkxOTUwNw@@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Lord of the Rings: The Fellowship of the Ring", "trama varia", fantasy", "2001", "http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SY317_CR1,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Exorcist", "trama varia", "horror", "1973", "http://ia.media-imdb.com/images/M/MV5BNzYwMDA0NTA3M15BMl5BanBnXkFtZTcwMDcwNDY3Mg@@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Ghost", "trama varia", "romantic", "1990", "http://ia.media-imdb.com/images/M/MV5BMTU0NzQzODUzNl5BMl5BanBnXkFtZTgwMjc5NTYxMTE@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Hangover", "trama varia", "comedy", "2009", "http://ia.media-imdb.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX214_AL_.jpg")'); //10
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("2001: A Space Odyssey", "trama varia", "sci-fi", "1968", "http://ia.media-imdb.com/images/M/MV5BNDYyMDgxNDQ5Nl5BMl5BanBnXkFtZTcwMjc1ODg3OA@@._V1_SY317_CR12,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Saw", "trama varia", "horror", "2004", "http://ia.media-imdb.com/images/M/MV5BMjAyNTcxNzYwMV5BMl5BanBnXkFtZTgwMzQzNzM5MjE@._V1_SX214_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Harry Potter and the Prisoner of Azkaban", "trama varia", "fantasy", "2004", "http://ia.media-imdb.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Devil Wears Prada", "trama varia", "comedy", "2006", "http://ia.media-imdb.com/images/M/MV5BMTMyNjk4Njc3NV5BMl5BanBnXkFtZTcwNDkyMTEzMw@@._V1_SX214_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Pulp Fiction", "trama varia", "drama", "1994", "http://ia.media-imdb.com/images/M/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1_SY317_CR4,0,214,317_AL_.jpg")'); //15
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Green Mile", "trama varia", "drama", "1999", "http://ia.media-imdb.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Le fabuleux destin d\'Amélie Poulain", "trama varia", "romantic", "2001", "http://ia.media-imdb.com/images/M/MV5BMTYzNjkxMTczOF5BMl5BanBnXkFtZTgwODg5NDc2MjE@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Forrest Gump", "trama varia", "drama", "1994", "http://ia.media-imdb.com/images/M/MV5BMTQwMTA5MzI1MF5BMl5BanBnXkFtZTcwMzY5Mzg3OA@@._V1_SX214_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Bourne Identity", "trama varia", "action", "2002, "http://ia.media-imdb.com/images/M/MV5BMTQ3MDA4MDIyN15BMl5BanBnXkFtZTYwOTg0Njk4._V1_SX214_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Chronicles of Narnia: The Voyage of the Dawn Treader", "trama varia", "fantasy", "2010", "http://ia.media-imdb.com/images/M/MV5BNjQ2MDQzMzExNl5BMl5BanBnXkFtZTcwMTYzOTc5Mw@@._V1_SX214_AL_.jpg")'); //20
         /*---------- BAND TABLE ---------- */        
         tx.executeSql('DROP TABLE IF EXISTS BAND');
         tx.executeSql('CREATE TABLE IF NOT EXISTS BAND (title unique, txt, genre, year, img)');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Coldplay", "descrizione", "alternative rock", "1997", "hhttp://cps-static.rovicorp.com/3/JPG_400/MI0003/273/MI0003273645.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Muse", "descrizione", "alternative pop", "1997", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/776/MI0003776372.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Metallica", "descrizione", "metal", "1981", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/776/MI0003776258.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("System of a Down", "descrizione", "alternative metal", "1995", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/534/MI0003534134.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Daft Punk", "descrizione", "electronic", "1992", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/776/MI0003776245.jpg")'); //5
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Frédéric Chopin", "descrizione", "classical", "1810", "http://cps-static.rovicorp.com/3/JPG_400/MI0002/864/MI0002864430.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Johnny Cash", "descrizione", "country", "1950", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/413/MI0001413370.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Louis Armstrong", "descrizione", "jazz", "1920", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/348/MI0001348918.jpg")');
                 
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