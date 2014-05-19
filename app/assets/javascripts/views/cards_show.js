window.Trellino.Views.CardsShow = Backbone.View.extend({
	template: JST["cards/show"],
	
	events: {
		"click #destroy-card": "destroyCard",
		"submit form": "createCard"
	},
	
	initialize: function(options) {
		this.listenTo(this.model, "change", this.render);
	},
	
	render: function () {
		var content = this.template({ card: this.model });
		this.$el.html(content);
		
		return this;
	},
	
	createCard: function () {
		event.preventDefault();
		var cardParams = $(event.currentTarget).serializeJSON();
		this.model.set(params["card"]);
		this.model.save();
		
		this.render();
	},
	
	destroyCard: function (event) {
		event.preventDefault();
		this.model.destroy();
	},
});