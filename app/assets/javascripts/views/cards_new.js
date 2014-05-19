window.Trellino.Views.NewCard = Backbone.View.extend({
	template: JST['cards/new'],
	
	initialize: function(options) {
		this.list = options.list;
	},
	
	events: {
		"submit form":"submit",
	},
	
	render: function() {
		var content = this.template({ list: this.list });
		this.$el.html(content);
		
		return this;
	},
	
	submit: function(event) {
		event.preventDefault();
		var cardData = $(event.currentTarget).serializeJSON().card;
		var newCard = new Trellino.Models.Card(cardData);
		var view = this;
		
		newCard.save({}, {
			success: function () {
				view.list.cards().add(newCard);
				//view.render()
			}
		});
	},
});