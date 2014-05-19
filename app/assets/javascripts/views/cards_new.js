window.Trellino.Views.NewCard = Backbone.View.extend({
	template: JST['cards/new'],
	
	initialize: function(options) {
		this.list = options.list;
	},
	
	events: {
		"click #submit-form":"submit",
	},
	
	render: function() {
		var content = this.template({ list: this.list });
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