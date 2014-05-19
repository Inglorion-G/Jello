window.Trellino.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "add sync", this.render);
	},
	
	events: {
		"click #inactive-destroy":"activateDelete",
		"click #active-destroy":"removeBoard",
		"click #new-card-form":"renderNewCard",
		"click #cancel-card":"hideNewCard"
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
	
	renderNewCard: function (event) {
		event.preventDefault();
		$target = $(event.target);
		var listId = $target.data('id');
		console.log(this.model.lists().get(listId))
		var cardFormView = new Trellino.Views.NewCard({
			list: this.model.lists().get(listId)
		});
		
		$target.html(cardFormView.render().$el);
	},
	
	hideNewCard: function (event) {
		event.preventDefault();
		$target = $(event.target)
		$form = $target.parent()
		$form.remove()
		$("#new-card-form").html("Add a new card!")
	}
	
	//render new list
	
})