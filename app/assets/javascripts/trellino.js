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

$(document).ready(function() {
	Trellino.initialize();
})



