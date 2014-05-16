window.Trellino.Views.NewBoard = Backbone.View.extend({
	template: JST['new'],
	events: { "submit form":"submit" },
	render: function() {
		var content = this.template( {board: this.model} );
		this.$el.html(content);
		return this;
	},
	submit: function (event) {
		event.preventDefault();
		//alert("button pushed")
		var boardData = $(event.currentTarget).serializeJSON();
		var newBoard = new Trellino.Models.Board(boardData);
		
		newBoard.save({}, {
			success: function() {
				Trellino.Collections.boards.add(newBoard);
				Backbone.history.navigate("#", { trigger: true });
			}
	  })
	},
	
});