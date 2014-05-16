window.Trellino.Views.BoardShow = Backbone.View.extend({
	template: "show",
	render: function (id) {
		var content = this.template({ 
			board: this.model
		});
		this.$el.html(content);
		return this;
	},
})