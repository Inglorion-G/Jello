window.Trellino.Models.Card = Backbone.Model.extend({
	initialize: function (options) {
		this.list = options.list;
	},
	
	url: function () {
		if (this.id) {
			return "/api/lists/" + this.id + "/cards"
		} else {
			return "/api/lists" + this.list.id + "/cards"
		}
	}
});