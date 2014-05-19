window.Trellino.Views.NewCard = Backbone.View.extend({
	template: function () {
		return this.open ? JST['cards/new'] : JST['cards/new_button'];
	},
	
	initialize: function(options) {
		this.open = false;
		this.list = options.list;
	},
	
	events: {
		"submit form":"submit",
		"click #add-card": "openForm",
		"click #cancel-card": "openForm"
	},
	
	render: function() {
		var content = this.template()({ list: this.list });
		this.$el.html(content);
		
		return this;
	},
	
	openForm: function (event) {
		event.preventDefault()
		this.open ^= true;
		this.render();
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