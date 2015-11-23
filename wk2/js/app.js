(function(){
	//define application name and setup as module
	var app = angular.module('app', [] );
	//define controller and name dependencies
	app.controller('Ctrlr', function($scope, DataService) {

		
		
		//method that gets data from the model using the DataService
		$scope.workers = DataService.getWorker();

		//object to store user's input-field values
		$scope.newWorker = {};

		//function that uses DataService to add wokers to Employee directory
		$scope.addWorker = function() {
			DataService.addNewWorker(
				$scope.newWorker.name,
				$scope.newWorker.position,
				$scope.newWorker.email,
				$scope.newWorker.mobile
			);
			//clear input fields after submitted responses

			$scope.newWorker = {};
			$scope.workerForm.$setPristine();
		};

		//function to remove workers from directory via DataService
		$scope.fireWorkers = function(idx){
			DataService.fireWorker(idx);
		};

		//function to clear all data in directory via DataService
		$scope.clear = function() {
			DataService.allClear();
		};
	}); 
})();