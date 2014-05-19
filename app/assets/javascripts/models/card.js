window.Trellino.Models.Card = Backbone.Model.extend({
	url: function(){ 
		if (this.isNew()) {
			return "/api/lists/" + this.get('list_id') + "/cards" 
		} else {
			return "/api/cards/" + this.get('id')
		};
	},
	
	initialize: function (options) {
		this.list = options.list;
	},
	
	// url: function () {
// 		if (this.id) {
// 			return "/api/lists/" + this.id + "/cards"
// 		} else {
// 			return "/api/lists" + this.list.id + "/cards"
// 		}
// 	}
});