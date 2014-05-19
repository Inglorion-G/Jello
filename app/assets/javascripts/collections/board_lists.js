window.Trellino.Collections.BoardLists = Backbone.Collection.extend({
	model: Trellino.Models.List,
	
	url: function () {
		return this.board.url() + "/lists";
	},
	
	comparator: function(list) {
		return( list.get('rank') );
	},
	
	initialize: function (models, options) {
		this.board = options.board;
	}
	
});