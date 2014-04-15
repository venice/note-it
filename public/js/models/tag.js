
var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

(function(){

	'use strict';

	App.Models.Tag = Backbone.Model.extend({

		defaults: {
			name: null,
		},

		label: function() {
			return this.get('name');
		}
		
	});

})();