window.Trellino.Views.ListsShow = Backbone.CompositeView.extend({
	template: JST["lists/show"],
	attributes: function(){
		return {"data-list-id": this.model.id};
	},
	
	className: "col-xs-3 list-panel board-list",
	
	events: {
		"click #destroy-list": "destroy",
		"click #show-new-card-form": "showNewCardForm",
		"mouseover": "showDeleteButton",
		"mouseleave": "hideDeleteButton",
		"sortstop .cards": "saveCards",
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
		this.attachSubviews();
		
		$('.cards').sortable({
			connectWith: '.cards'
		});
		
		
		return this;
	},
	
	saveCards: function () {
		var that = this;
		this.$('.cards > div').each(function(index, el) {
			var id = parseInt($(el).data('card-id'));
			var card = that.model.cards().get(id);
			card.save( { rank: index } );
		});
		// iterate through list panels with jquery
		// get the list model that matches id of panel
		// have a counter to set the rank
		// save request
	},
	
	addCard: function (card) { 
		var cardShowView = new Trellino.Views.CardsShow({
		  model: card
		});
		
		this.addSubview(".cards", cardShowView);
		cardShowView.render()
		this.render()
	},
	
	removeCard: function (card) {
		var cardShowView = 
		_(this.subviews()[".cards"]).find(function (subview) {
			return subview.model === card;
		});
		
		this.removeSubview("#cards", cardShowView);
	},
	
	showDeleteButton: function (event) {
		$(event.target).parent().find("#destroy-list").show();
	},
	
	hideDeleteButton: function (event) {
		$(event.target).parent().find("#destroy-list").hide();
	},
	
	destroy: function (event) {
		this.model.destroy();
	},
	
	showNewCardForm: function (event) {
		event.preventDefault();
		$target = $(event.target);
		$
		$target.show();
	}
	
});