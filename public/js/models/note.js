
var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

(function(){

	'use strict';

	App.Models.Note = Backbone.Model.extend({

		defaults: {
			content: null,
			tag: null,
			createdDate: null
		},

		validate: function(attrs, options) {
			var errors = [];
			if(!attrs.content || attrs.content.trim() == "") {
				errors.push({field: 'content', value: 'invalid content'});
			}
			if(!attrs.createdDate) {
				errors.push({field: 'createdDate', value: 'invalid createdDate'});
			}
			if(errors.length > 0) {
				return errors;	
			}
		},

		trimTag: function(tags) {
			if(tags) {
				tags = tags.replace(/\s/g,'')
						.split(',')
						.filter(function(n) {
							return n.length > 0;
						})
						.toString();				
			}
			return tags;
		}
		
	});

})();