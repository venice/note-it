
var App = App || {
	Collections: {},
	Models: {},
	Views: {}
};

(function(){
	'use strict';

	App.Collections.Tags = Backbone.Collection.extend({

		model: App.Models.Tag,
		
		localStorage: new Backbone.LocalStorage('tags'),

		comparator: function(tag){
			return tag.get('name'); //return string, or sort function with either 1 or 2 arguments
		},

		setDummy: function() {
			this.add([
				{name: 'aaaa'},
				{name: 'bbbb'},
				{name: 'cccc'},
			]);
		}
	});

})();