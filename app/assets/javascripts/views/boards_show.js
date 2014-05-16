window.Trellino.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render)
	},
	
	events: {
		"click #destroy":"removeBoard"
	},
	
	render: function () {
		var view = this;
		var content = this.template({
			board: this.model
		});
		
		this.$el.html(content);
		var formView = new Trellino.Views.NewList();
		this.$("#new-list-form").html(formView.render().$el);
		
		return this;
	},
	
	removeBoard: function (event) {
		event.preventDefault()
		this.model.destroy();
		Backbone.history.navigate("#", {trigger: true});
	},
	
	//render new list
	
})