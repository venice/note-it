
var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

(function ($) {
	'use strict';
	
	//module.exports = Backbone.View.extend({
	App.Views.Main = Backbone.View.extend({
		
		el: '#noteapp',

		events: {
			'click #btn-addnote': 'createNote'			
		},

		initialize: function(){
			this.$sidemenu = $('#sidemenu');
			this.$notes = $('#notes');
			this.collection = new App.Collections.Notes();

			this.listenTo(this.collection, 'add', this.addOne);
			this.listenTo(this.collection, 'filter', this.filterAll);
			this.listenTo(this.collection, 'reset', this.addAll);
			this.listenTo(this.collection, 'all', this.logEvent);
			
			this.collection.fetch({ reset: true, silent: true });			
		},

		logEvent: function(e) {
			console.log('event name: ' + e);
		},

		render: function(e) {
			var msnry = new Masonry( this.$notes[0], {
			 	itemSelector: '.note'
			});
		},

		addOne: function(note) {
			var view = new App.Views.Note({ model: note });
			this.$notes.prepend(view.render().el);
		},

		addAll: function() {
			this.$notes.html('');
			this.collection.models.each(this.addOne, this);
			this.render();
		},

		toggleMenu: function() {
			this.$sidemenu.toggleClass('show');
		},

		createNote: function() {
			var note = new App.Models.Note(); 
			new App.Views.NoteForm({ model: note }).render();
			this.toggleMenu();			
		}

	});
})(jQuery);