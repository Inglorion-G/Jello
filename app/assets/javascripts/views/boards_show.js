window.Trellino.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "add", this.render);
	},
	
	events: {
		"click #inactive-destroy":"activateDelete",
		"click #active-destroy":"removeBoard"
	},
	
	render: function () {
		var view = this;
		var content = this.template({
			board: this.model
		});
		
		this.$el.html(content);
		
		var formView = new Trellino.Views.NewList({ 
			model: this.model
		});
		this.$("#new-list-form").html(formView.render().$el);
		
		return this;
	},
	
	activateDelete: function (event) {
		event.preventDefault();
		$("#inactive-destroy").addClass('btn btn-danger')
												  .removeClass('btn btn-warning')
													.attr('id','active-destroy')
	},
	
	removeBoard: function (event) {
		event.preventDefault();
		this.model.destroy();
		Backbone.history.navigate("#", {trigger: true});
	},
	
	//render new list
	
})