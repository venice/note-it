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