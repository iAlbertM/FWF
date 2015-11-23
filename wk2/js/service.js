//create a service for myApp
angular.module('app').service('DataService', function() {
	var theWorkers = [];
	
//Get theWorkers data from local storage
	this.getWorker = function() {
		//convert JSON data from localStorage into JS object 
		var wArray = JSON.parse(localStorage.getItem('wrkLS')) || theWorkers;
		//sync changes to all copies
		theWorkers = wArray;
		//return theWorkers data as JS Object
		return theWorkers;
	}
	
//Add a new worker-w/ position + contact info
	this.addWorker = function(wName, wPosition, wEmail, wMobile) {
		//store user input into object w/ designated key:value pairs
		var workerInfo = {			
			  name: wName,
		  position: wPosition,
			 email: wEmail,
			mobile: wMobile
		};
		
		//add new worker and update array
		theWorkers.push(workerInfo);
		//convert theWorkers array into JSON data and use to update the localstorage copy
		localStorage.setItem("wrkLS", JSON.stringify(theWorkers));
	}
		
//Remove worker
	this.fireWorker = function (pIndex) {
		//find the worker at pIndex
		theWorkers.splice(pIndex, 1);
		localStorage.setItem("wrkLS", JSON.stringify(theWorkers));
	}

//Clear all	
	this.allClear = function () {
		theWorkers.splice(0);
		localStorage.clear();
	}
	
	
});

