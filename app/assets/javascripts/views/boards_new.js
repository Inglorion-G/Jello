Trellino.Views.NewBoard = Backbone.View.extend({
	template: JST['boards/new'],
	
	events: { "submit form":"submit" },
	
	render: function() {
		var content = this.template( {board: this.model} );
		this.$el.html(content);
		return this;
	},
	
	submit: function (event) {
		event.preventDefault();
		
		var boardParams = $(event.currentTarget).serializeJSON();
		var newBoard = new Trellino.Models.Board(boardParams["board"]);
		
		newBoard.save({}, {
			success: function() {
				Trellino.Collections.boards.add(newBoard);
				Backbone.history.navigate("#/boards/" + newBoard.get('id'), { trigger: true });
			}
	  });
	},
});