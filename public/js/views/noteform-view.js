
var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

(function($) {
	'use strict';

	App.Views.NoteForm = Backbone.View.extend({

		el: '#sidemenu',
		isAutoComplete: true,

		template: _.template($('#noteform-tmpl').html()),

		events: {
			'submit form': 'submit',
		},

		initialize: function() {
			this.listenTo(this.model, 'destroy', this.remove); 
			this.listenTo(this.model, 'invalid', this.errorOnSubmit);
			
			//this.tags = new App.Collections.Tags();
			//this.tags.fetch();
			//this.tags.setDummy();
			/*
			this.tags.add([
				{name: 'aaaa'},
				{name: 'bbbb'},
				{name: 'cccc'},
			]);
			console.log(this.tags);
			*/
		},

		render: function(e) {
			/*
			if (this.model.changed.id !== undefined) {
				return;
			}*/

			this.$el.html(this.template(this.model.toJSON()));
			this.$el.find('#txtTag').tagsinput();

			/*
			var tags = this.tags;
			console.log(this.tags);
			new App.Views.AutoComplete({
				input: $('#txtTag'),
				model: tags,
				onSelect: function(model) {}
			}).render();
			*/
			return this;
		},

		submit: function(e) {
			var content = this.$el.find('#txtContent').val().trim();
			var tags = this.$el.find('#txtTag').val();
			tags = this.model.trimTag(tags);
			
			this.model.set({
				content: content,
				tag: tags,
				createdDate: new Date()
			});

			if(this.model.save()) {
				App.Collections.Notes.add(this.model);	
			};
			return false;
		},

		errorOnSubmit: function(model, error) {
			var self = this;
			if(Array.isArray(error)) {
				error.forEach(function(el, index, array) {
					if(el.field == 'content') {
						self.$el.find('#txtContent').parent().toggleClass('has-error');
					}
				});
			}
		}
	});

})(jQuery);