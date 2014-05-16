window.Trellino.Collections.Boards = Backbone.Collection.extend({
	model: Trellino.Models.Board,
	url: "api/boards",
	
	getOrFetch: function (id) {
		var model;
		var boards = this;
		
		if (model = this.get(id)) {
			model.fetch();
			return model;
		} else {
			model = new Trellino.Models.Board( {id: id} );
			model.fetch({
				success: function () { boards.add(model) }
			});
			return model;
		}
	},
	
})