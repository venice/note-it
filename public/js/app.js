
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


