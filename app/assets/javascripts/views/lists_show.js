Trellino.Views.ListsShow = Backbone.View.extend({
	template: JST["lists/show"],
	
	events: {
		"click #destroy-list": "destroy"
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