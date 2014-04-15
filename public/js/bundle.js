(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// use this if they are node packages 
/*
var $ = require('./lib/jquery/jquery.min.js');
var _ = require('./lib/underscore/underscore.js');
var backbone = require('./lib/backbone/backbone.js');
backbone.$ = $;
*/

/*
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
*/

var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

App.Collections.Notes = require('./collections/notes.js');

$(function () {
	'use strict';

	// kick things off by creating the `App`
	//var AppView = require('./views/app-view');
	//app.AppView = new AppView();

	new App.Collections.Notes();
	//new App.Views.Main();
});



},{"./collections/notes.js":2}],2:[function(require,module,exports){
/*
var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

(function(){
	'use strict';

	App.Collections.Notes = Backbone.Collection.extend({

		url: '/notes',
		
		model: App.Models.Note,
		
		localStorage: new Backbone.LocalStorage('notes'),

		comparator: function(note) {
			return note.get('createdDate');
		},

	});

})();
*/

module.exports = Backbone.Collection.extend({
	url: '/notes',
		
	model: App.Models.Note,
	
	localStorage: new Backbone.LocalStorage('notes'),

	comparator: function(note) {
		return note.get('createdDate');
	}
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJEOlxcV29ya3NwYWNlc1xcbm90ZS1pdFxccHVibGljXFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L1dvcmtzcGFjZXMvbm90ZS1pdC9wdWJsaWMvanMvYXBwLmpzIiwiRDovV29ya3NwYWNlcy9ub3RlLWl0L3B1YmxpYy9qcy9jb2xsZWN0aW9ucy9ub3Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuLy8gdXNlIHRoaXMgaWYgdGhleSBhcmUgbm9kZSBwYWNrYWdlcyBcclxuLypcclxudmFyICQgPSByZXF1aXJlKCcuL2xpYi9qcXVlcnkvanF1ZXJ5Lm1pbi5qcycpO1xyXG52YXIgXyA9IHJlcXVpcmUoJy4vbGliL3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qcycpO1xyXG52YXIgYmFja2JvbmUgPSByZXF1aXJlKCcuL2xpYi9iYWNrYm9uZS9iYWNrYm9uZS5qcycpO1xyXG5iYWNrYm9uZS4kID0gJDtcclxuKi9cclxuXHJcbi8qXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xyXG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xyXG4qL1xyXG5cclxudmFyIGFwcCA9IGFwcCB8fCB7fTtcclxudmFyIEVOVEVSX0tFWSA9IDEzO1xyXG52YXIgRVNDX0tFWSA9IDI3O1xyXG5cclxudmFyIEFwcCA9IEFwcCB8fCB7XHJcblx0Q29sbGVjdGlvbnM6IHt9LFxyXG5cdE1vZGVsczoge30sXHJcblx0Vmlld3M6IHt9XHJcbn07XHJcblxyXG5BcHAuQ29sbGVjdGlvbnMuTm90ZXMgPSByZXF1aXJlKCcuL2NvbGxlY3Rpb25zL25vdGVzLmpzJyk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vIGtpY2sgdGhpbmdzIG9mZiBieSBjcmVhdGluZyB0aGUgYEFwcGBcclxuXHQvL3ZhciBBcHBWaWV3ID0gcmVxdWlyZSgnLi92aWV3cy9hcHAtdmlldycpO1xyXG5cdC8vYXBwLkFwcFZpZXcgPSBuZXcgQXBwVmlldygpO1xyXG5cclxuXHRuZXcgQXBwLkNvbGxlY3Rpb25zLk5vdGVzKCk7XHJcblx0Ly9uZXcgQXBwLlZpZXdzLk1haW4oKTtcclxufSk7XHJcblxyXG5cclxuIiwiLypcclxudmFyIEFwcCA9IEFwcCB8fCB7XHJcblx0Q29sbGVjdGlvbnM6IHt9LFxyXG5cdE1vZGVsczoge30sXHJcblx0Vmlld3M6IHt9XHJcbn07XHJcblxyXG4oZnVuY3Rpb24oKXtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdEFwcC5Db2xsZWN0aW9ucy5Ob3RlcyA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcclxuXHJcblx0XHR1cmw6ICcvbm90ZXMnLFxyXG5cdFx0XHJcblx0XHRtb2RlbDogQXBwLk1vZGVscy5Ob3RlLFxyXG5cdFx0XHJcblx0XHRsb2NhbFN0b3JhZ2U6IG5ldyBCYWNrYm9uZS5Mb2NhbFN0b3JhZ2UoJ25vdGVzJyksXHJcblxyXG5cdFx0Y29tcGFyYXRvcjogZnVuY3Rpb24obm90ZSkge1xyXG5cdFx0XHRyZXR1cm4gbm90ZS5nZXQoJ2NyZWF0ZWREYXRlJyk7XHJcblx0XHR9LFxyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcclxuXHR1cmw6ICcvbm90ZXMnLFxyXG5cdFx0XHJcblx0bW9kZWw6IEFwcC5Nb2RlbHMuTm90ZSxcclxuXHRcclxuXHRsb2NhbFN0b3JhZ2U6IG5ldyBCYWNrYm9uZS5Mb2NhbFN0b3JhZ2UoJ25vdGVzJyksXHJcblxyXG5cdGNvbXBhcmF0b3I6IGZ1bmN0aW9uKG5vdGUpIHtcclxuXHRcdHJldHVybiBub3RlLmdldCgnY3JlYXRlZERhdGUnKTtcclxuXHR9XHJcbn0pOyJdfQ==
