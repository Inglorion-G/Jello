window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
  	//initialize global collection here
		//fetch all boards
		Backbone.history.start();
  }
};

$(document).ready(function() {
	Trellino.initialize();
})



