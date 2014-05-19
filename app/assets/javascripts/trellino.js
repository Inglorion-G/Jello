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
		  this.subviews()[selector] || (this.subviews()[selector] = []);
		selectorSubviews.push(view);
	},
	
	renderSubviews: function () {
		var view = this;
		
		_(this.subviews()).each(function (selectorSubviews, selector) {
			var $selectorEl = view.$(selector)
			$selectorEl.empty();
			
			_(selectorSubviews).each(function (subview) {
				$selectorEl.append(subview.render().$el);
				subview.delegateEvents();
			});
		});
	},
	
	subviews: function () {
		if (!this._subviews) {
			this._subviews = {};
		}
		
		return this._subviews;
	},
});

$(document).ready(function() {
	Trellino.initialize();
})



