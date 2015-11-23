	$(document).ready(function(){
		
		//view-model: defines the data and ui behavior
		function AppViewModel() {
			this.userName = ko.observable("World");
			this.userAge =  ko.observable("4.543 Billion");

			this.fullInfo = ko.computed(function() {
				return ("Hello, " + this.userName() + " | your age: " + this.userAge());    
			}, this);
		}

		// Activates knockout.js
		ko.applyBindings(new AppViewModel());
	});