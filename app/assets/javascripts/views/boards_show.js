window.Trellino.Views.BoardShow = Backbone.CompositeView.extend({
	template: JST['boards/show'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "add", this.addList);
		this.listenTo(this.model.lists(), "remove", this.removeList);		
		
		this.model.lists().sort().each(this.addList.bind(this));

		var listForm = new Trellino.Views.NewList({
			board: this.model
		});
		this.addSubview("#new-list-form", listForm)
		// this.$("#new-list-form").html(listForm.render().$el);
	},
	
	addList: function (list) { 
		var listShowView = new Trellino.Views.ListsShow({
		  model: list
		});
		
		this.addSubview("#board-list", listShowView);
		listShowView.render()
	},
	
	removeList: function (list) {
		var listShowView = 
		_(this.subviews()["#board-list"]).find(function (subview) {
			return subview.model === list;
		});
		
		this.removeSubview("#board-list", listShowView);
	},
	
	events: {
		"click #inactive-destroy":"activateDelete",
		"click #active-destroy":"removeBoard",
		//start
		//stop
	},
	
	render: function () {
		var view = this;
		var content = this.template({
			board: this.model
		});
		
		this.$el.html(content);
		this.renderSubviews();
		
		return this;
	},
	
	activateDelete: function (event) {
		event.preventDefault();
		$("#inactive-destroy").addClass('btn btn-danger')
												  .removeClass('btn btn-warning')
													.attr('id','active-destroy')
	},
	
	removeBoard: function (event) {
		event.preventDefault();
		this.model.destroy();
		Backbone.history.navigate("#", {trigger: true});
	},
	
})