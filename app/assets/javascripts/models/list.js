Trellino.Models.List = Backbone.Model.extend({
	url: function(){ return "/api/boards/" + this.get('board_id') + "/lists" },
	
	cards: function () {
		this._cards = this._cards ||
		new Trellino.Collections.ListCards([], { list: this });
		return this._cards;
	},
	
	parse: function(payload) {
		if (payload.cards) {
			this.cards().set(payload.cards, { parse: true });
			delete payload.cards;
		}
		
		return payload;
	}
});