/*global Backbone */

var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var NoteRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			App.NoteFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			//App.Collections.Notes.trigger('filter');
		}
	});

	App.NoteRouter = new NoteRouter();
	Backbone.history.start();
})();
