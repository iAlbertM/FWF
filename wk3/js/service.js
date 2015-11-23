//create a service for app
angular.module('app').service('DataService1', function() {
	var myGoals = [];
	
	//Get myGoals data from local storage
	this.getGoal = function() {
		//convert JSON data from localStorage into JS object 
		var gArray = JSON.parse(localStorage.getItem('goalsLS')) || myGoals;
		//sync changes to all copies
		myGoals = gArray;
		//return myGoals data as JS Object
		return myGoals;
	}
	
	//Add a new goal
	this.addNewGoal = function(ggoal) {
		//add myGoal to array
		myGoals.push(ggoal);
		//convert myGoals array into JSON data and use to update the localstorage copy
		localStorage.setItem("goalsLS", JSON.stringify(myGoals));
	}
		
	//Remove a goal
	this.forgotGoal = function (pIndex) {
		//find the goal at pIndex
		myGoals.splice(pIndex, 1);
		localStorage.setItem("goalsLS", JSON.stringify(myGoals));
	}
	
	//clear all goals
	this.allClear = function () {
		myGoals.splice(0);
		localStorage.clear();
	}
	
	
});


//create a service for app
angular.module('app').service('DataService2', function() {
	var theActions = [];
	
	//Get theActions data from local storage
	this.getActions = function() {
		//convert JSON data from localStorage into JS object 
		var aArray = JSON.parse(localStorage.getItem('actLS')) || theActions;
		//sync changes to all copies
		theActions = aArray;
		//return theActions data as JS Object
		return theActions;
	};
	
	//Add a new action
	this.addNewAction = function(aaction, aformat, anum, adone) {
		//store user input into object w/ designated key:value pairs
		var actDetails = {			
			action: aaction,
		    format: aformat,
			   num: anum,
			  done: adone
		};
		
		//update array w/ new action
		theActions.push(actDetails);
		//convert theActions array into JSON data and use to update the localstorage copy
		localStorage.setItem("actLS", JSON.stringify(theActions));
	};
		
	//forget an action 
	this.forgotAction = function(pIndex) {
		//delete an action from the array
		theActions.splice(pIndex, 1);
		localStorage.setItem("actLS", JSON.stringify(theActions));
	};
	
	//clear all actions
	this.allClear = function () {
		theActions.splice(0);
		localStorage.clear();
	};
	
	
});


//create a service for app
angular.module('app').service('DataService3', function() {
	var theMotives = [];
	
	//Get theMotives data from local storage
	this.getMotive = function() {
		//convert JSON data from localStorage into JS object 
		var mArray = JSON.parse(localStorage.getItem('fitLS')) || theMotives;
		//sync changes to all copies
		theMotives = mArray;
		//return theMotives data as JS Object
		return theMotives;
	};	
	
	//Add a fitness motivation
	this.newMotive = function(mmotive) {
		//push nMotive to theMotives array
		theMotives.push(mmotive);
		
		//convert array into JSON data and update localstorage
		localStorage.setItem("fitLS", JSON.stringify(theMotives));
	};
		
	//Remove motive
	this.forgotMotive = function(pIndex) {
		//find and remove item from array using pIndex
		theMotives.splice(pIndex, 1);
		localStorage.setItem("fitLS", JSON.stringify(theMotives));
	};
	
	this.allClear = function () {
		theMotives.splice(0);
		localStorage.clear();
	};
	
	
});
