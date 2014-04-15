
var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

(function($) {
	'use strict';

	App.Views.Note = Backbone.View.extend({

		template: _.template($('#note-tmpl').html()),

		events: {},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove); //view's built-in remove function: remove from dom and stoplistening
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

})(jQuery);