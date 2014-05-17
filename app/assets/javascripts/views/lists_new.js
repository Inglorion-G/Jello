window.Trellino.Views.NewList = Backbone.View.extend({
	template: JST['lists/new'],
	events: {
		"submit form":"submit",
	},
	
	render: function() {
		var content = this.template({ list: this.model })
		this.$el.html(content);
		return this;
	},
	
	submit: function(event) {
		event.preventDefault();
		var listData = $(event.currentTarget).serializeJSON();
		var newList = new Trellino.Models.List(listData);
		var view = this;
		newList.collection = this.model.lists();
		
		newList.save({}, {
			success: function () {
				view.model.lists().add(newList);
				view.render()
			}
		});
	},
});