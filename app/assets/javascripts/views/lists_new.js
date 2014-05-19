window.Trellino.Views.NewList = Backbone.View.extend({
	template: JST['lists/new'],
	
	initialize: function(options) {
		this.board = options.board;
	},
	
	events: {
		"submit form":"submit",
	},
	
	render: function() {
		var content = this.template({ board: this.board })
			
		this.$el.html(content);
		
		return this;
	},
	
	submit: function(event) {
		var view = this;
		event.preventDefault();
		
		var listParams = $(event.currentTarget).serializeJSON();
		var list = new Trellino.Models.List(listParams["list"]);
		debugger
		//newList.collection = this.model.lists();
	  list.save({}, {
			success: function () {
				view.board.lists().add(list);
				view.$('text[name=list\\[title\\]]').val("");
			}
		});
	},
});