var HomeView = function(store) {
 	
 	self = this;
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };
 
    this.initialize();
	this.render = function() 
	 {
		this.el.html(HomeView.template());
		return this;
	};
	
	this.findByName = function() {
			console.log("111 unitl now ok.");
			alert();
			store.findByName($('.search-key').val(), function(employees) {
				$('.employee-list').html(HomeView.liTemplate(employees));
			});
		};
}
 
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());