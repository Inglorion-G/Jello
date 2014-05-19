window.Trellino.Views.ListsShow = Backbone.CompositeView.extend({
	template: JST["lists/show"],
	
	events: {
		"click #destroy-list": "destroy",
		"click #show-new-card-form": "showNewCardForm",
	},
	
	initialize: function(options) {
		this.listenTo(this.model, "change", this.render);
		this.listenTo(this.model.cards(), "add", this.addCard);
		this.listenTo(this.model.cards(), "remove", this.removeCard);
		
		this.model.cards().each(this.addCard.bind(this));
		
		var cardForm = new Trellino.Views.NewCard({
			list: this.model
		});
		
		this.addSubview("#new-card-form", cardForm)
	},
	
	render: function () {
		var view = this;
		var content = this.template({
			list: this.model
		});
		
		this.$el.html(content);
		this.renderSubviews();
		
		return this;
	},
	
	addCard: function (card) { 
		var cardShowView = new Trellino.Views.CardsShow({
		  model: card
		});
		
		this.addSubview(".panel-content", cardShowView);
		cardShowView.render()
	},
	
	removeCard: function (list) {
		var cardShowView = 
		_(this.subviews()[".panel-content"]).find(function (subview) {
			return subview.model === card;
		});
		
		this.removeSubview(".panel-content", cardShowView);
	},
	
	destroy: function (event) {
		this.model.destroy();
	},
	
	showNewCardForm: function (event) {
		event.preventDefault();
		$target = $(event.target);
		console.log($target)
		$target.show();
	}
	
	// renderNewCard: function (event) {
// 		event.preventDefault();
// 		$target = $(event.target);
// 		var cardFormView = new Trellino.Views.NewCard({
// 			list: this.model.lists().get(listId)
// 		});
// 		
// 		$target.html(cardFormView.render().$el);
// 	},
// 	
// 	hideNewCard: function (event) {
// 		event.preventDefault();
// 		$target = $(event.target)
// 		$form = $target.parent()
// 		$form.remove()
// 		$("#new-card-form").html("Add a new card!")
// 	}
	
});