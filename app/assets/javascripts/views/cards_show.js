window.Trellino.Views.CardsShow = Backbone.View.extend({
	template: JST["cards/show"],
	
	attributes: function(){
		return {
			"data-card-id": this.model.id,
			"class": "card-element",
		};
	},
	
	events: {
		"click #destroy-card": "destroyCard",
		"submit form": "createCard",
		"mouseover": "showDeleteButton",
		"mouseleave": "hideDeleteButton"
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
	
	showDeleteButton: function (event) {
		$(event.target).parent().find("#destroy-card").show();
	},
	
	hideDeleteButton: function (event) {
		$(event.target).parent().find("#destroy-card").hide();
	},
	
	destroyCard: function (event) {
		event.preventDefault();
		this.model.destroy();
	},
});