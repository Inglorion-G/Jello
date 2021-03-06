window.Trellino.Collections.ListCards = Backbone.Collection.extend({
	
	model: Trellino.Models.Card,
	
	url: function () {
		return this.list.url() + "/cards"
	},
	
	comparator: function(card) {
		return( card.get('rank') );
	},
	
	initialize: function (models, options) {
		this.list = options.list;
	}
	
});