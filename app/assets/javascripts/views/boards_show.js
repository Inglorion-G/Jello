window.Trellino.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	initialize: function () {
		this.listenTo(this.model, "sync", this.render)
	},
	render: function () {
		var view = this;
		var content = this.template({
			board: this.model
		});
		
		this.$el.html(content);
		
		return this;
	},
})