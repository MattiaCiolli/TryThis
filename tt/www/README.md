Cordova Boilerplate
==================

An extremely simple [Cordova](http://cordova.apache.org/) app that can be used as boilerplate for apps developed with modularity and performance in mind.

The proposed boilerplate has been developed with **MODULARITY** and **PERFORMANCE** in mind, it should be totally memory leaks free and ready-to-be-used in production. 

As a reference, give a look at the following features:
* configuration map for keeping all the used libraries organized and easily interchangeable
* support for [SASS](http://sass-lang.com)
* integrated with the [Ratchet 2.0.2](https://github.com/twbs/ratchet) UI framework for mobile
* integrated with [Leaflet 0.7.3](http://leafletjs.com), the mobile-friendly JavaScript library for embedding maps in your web app
* integrated with the [Underscore 1.8.3](http://underscorejs.org) utility JavaScript library
* support for the following gestures: tap, double tap, long tap, swipe (in alle directions), pinch in, pinch out. Gestures are managed via the -touch- and -gesture- extensions of Zepto.js
* automatic precompilation of HTML5 templates, which are organized into a super simple map
* automatic preloading of static images, so that they do not flicker when being loaded the first time (via Dimitar Christoff's [pre-loader](https://github.com/DimitarChristoff/pre-loader)) 
* an emulate.sh script for automatically building the project in Sublime ([see here](http://www.ivanomalavolta.com/how-to-automatically-run-and-refresh-the-ripple-emulator-from-sublime-text/))
* all Require dependencies are organized using the comfortable [Require syntactic sugar](http://requirejs.org/docs/api.html#cjsmodule)
* minimal responsive grid system for quickly organizing contents in a 12-columns grid via [IceCream](http://html5-ninja.com/icecream/)
* overridden the Backbone extend so that its objects can now be easily spotted in the Chrome heap profiler
* included the concept of *Page*, it extends Backbone.View and represents a full screen of the mobile application, it can be used for customly manage in the future the navigation between pages of the app 
* a *close* method for closing each view and managing all its inner views and bound events
* a *changePage* method for the Backbone Router that manages to switch between mobile app pages in a generic and reusable manner
* generic function to show a web page within a Cordova application and checking if the user has an Internet connection
* other useful functions are spread within the boilerplate, such as mobile-friendly CSS3 stylesheet, organization of the project in semantic directories (like: templates, js, img), etc.
* other convenience JavaScript functions, such as the one for stripping XML-based strings, checking if a JS object is empty, String.startsWith, String.endsWith, and so on. 

Please, if you find some bugs or aspects to be enhanced, drop be a line!

Used frameworks
--------------

* [Cordova 5.0.0](http://cordova.apache.org/): the platform for building native mobile applications using HTML5, CSS3 and JavaScript
* [Backbone 1.2.0](http://backbonejs.org/): a JavaScript MVC framework for giving structure to (mobile) web apps
* [RequireJS 2.1.17](http://requirejs.org/): a JavaScript file and module loader for keeping your Javascript codebase modular and well organized
* [Handlebars 3.0.3](http://handlebarsjs.com/): a minimal templating engine based on Mustache
* [Zepto 1.1.3](http://zeptojs.com/): minimalist JavaScript library for DOM traversing, event handling, animations, gestures, etc.

App description
---------------

Basically, the web app is composed of two simple views (represented as different Handlebars templates), backed by a JavaScript module defined using Require JS. Zepto (or jQuery) is used as a convenience library.

The web app is purposefully super-simple, it shows:

* a structural view containing the two basic views (it is supposed to be used as navigation hub)
* the first view contains a string that can be filled dynamically by the Backbone model behind it
* the second view shows a Leaflet map centered on L'Aquila, the city I currently live in

![Screenshots](https://pbs.twimg.com/media/Bi2w3YsIIAAluqD.jpg:large)