Trellino.Views.NewCard = Backbone.View.extend({
	template: JST['cards/new'],
	events: {
		"click #submit-form":"submit",
	},
	
	render: function() {
		alert(this.card)
		var content = this.template({ card: this.card })
		this.$el.html(content);
		return this;
	},
	
	submit: function(event) {
		event.preventDefault();
		var cardData = $(event.currentTarget).serializeJSON();
		var newCard = new Trellino.Models.Card(cardData);
		
		newCard.save({}, {
			success: function () {
				view.model.card().add(newCard);
				view.render()
			}
		});
	},
});