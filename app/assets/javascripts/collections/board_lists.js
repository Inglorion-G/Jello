window.Trellino.Collections.BoardLists = Backbone.Collection.extend({
	model: Trellino.Models.List,
	
	url: function () {
		return this.board.url() + "/lists";
	},
	
	comparator: function() {
		return( this.get('rank') );
	},
	
	initialize: function (models, options) {
		this.board = options.board;
	}
	
});