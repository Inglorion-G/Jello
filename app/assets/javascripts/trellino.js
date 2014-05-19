window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
  	//initialize global collection here
		//fetch all boards
		Trellino.Collections.boards = new Trellino.Collections.Boards();
		
		new Trellino.Routers.AppRouter();
		Backbone.history.start();
  }
};

Backbone.CompositeView = Backbone.View.extend({
	addSubview: function (selector, view) {
		var selectorSubviews = 
		  subviews[selector] || (subviews[selector] = []);
			
		selectorSubviews.push(view);
	},
	
	renderSubviews: function () {
		_(this.subviews).each(function (selectorSubviews, selector) {
			_(selectorSubviews.each(function (subview) {
				subview.render();
			});
		});
	},
	
	subviews: {}
});

$(document).ready(function() {
	Trellino.initialize();
})



