window.Trellino.Views.ListsShow = Backbone.View.extend({
	template: JST["lists/show"],
	
	events: {
		"click #destroy-list": "destroy"
	},
	
	initialize: function(options) {
		this.listenTo(this.model, "change", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			list: this.model
		});
		
		this.$el.html(renderedContent);
		return this
	},
	
	destroy: function (event) {
		debugger
		this.model.destroy();
	},
	
});