window.Trellino.Routers.AppRouter = Backbone.Router.extend({
	
	routes: {
		"":"boardsIndex",
		"boards/new":"boardsNew",
		"boards/:id":"boardShow",
	},
	
	boardsIndex: function () {
		var indexView = new Trellino.Views.BoardsIndex({
			collection: Trellino.Collections.boards
		});
		Trellino.Collections.boards.fetch();
		
		this._swapView(indexView);
	},
	
	boardsNew: function () {
		var newView = new Trellino.Views.NewBoard();
		
		this._swapView(newView);
	},
	
	boardShow: function (id) {
		var board = Trellino.Collections.boards.getOrFetch(id);
		var showView = new Trellino.Views.BoardShow({
			model: board
		});
		
		this._swapView(showView);
	},
	
	_swapView: function (newView) {
		if (this.currentView) {
			this.currentView.remove();
		}
		
		$("#content").html(newView.render().$el);
		this.currentView = newView;
	}
	
});