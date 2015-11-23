(function(){
var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });
	
	
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'GoalController',
			templateUrl: 'goal.html'
		})
		.when('/action', {
			controller: 'ActionController',
			templateUrl: 'action.html'
		})
		.when('/motive', {
			controller: 'FitnessController',
			templateUrl: 'motive.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.controller('GoalController',['$scope','DataService1', function($scope, DataService1) {
	
		$scope.goalsA = DataService1.getGoal();
		$scope.goal;
	
		$scope.addGoal = function() {
			DataService1.addNewGoal($scope.goal);
			$scope.goal = '';
		};

		$scope.forgetGoal = function (forgottenGoal) {
			var idx = DataService1.getGoal.indexOf(forgottenGoal);
			DataService1.forgotGoal(idx);
		};
	

		$scope.clear = function () {
			DataService1.allClear();
		}
}]);


//define controller and name dependencies
app.controller('ActionController',['$scope','DataService2', function($scope, DataService2) {
		//object to store user's input-field values
	$scope.newAction = {};
	//method that gets data from the model using the DataService	
	$scope.actions = DataService2.getActions();



	//function that uses DataService add wokers to Employee directory
	$scope.addAction = function() {
		console.log()
		$scope.addAction = DataService2.addNewAction(
			$scope.newAction.action,
			$scope.newAction.format,
			$scope.newAction.num,
			$scope.newAction.done);
		//clear input fields after submitted responses

		$scope.newAction = {};
		$scope.aForm.$setPristine();
		
	}

	//function to remove workers from directory via DataService	
	$scope.forgetAction = function(idx) {
		DataService2.forgotAction(idx);
	}

	//function to clear all data in directory via DataService	
	$scope.clear = function() {
		DataService2.allClear();
	}
}]);

app.controller('FitnessController', ['$scope', 'DataService3', function($scope, DataService3) {

	$scope.motive;
	$scope.motives = DataService3.getMotive();

	$scope.addMotive = function() {
		DataService3.newMotive($scope.motive);
		$scope.motive = '';
		$scope.mForm.$setPristine();
	};

	$scope.lostMotive = function(fitMo) {
		var idx = DataService3.getMotive.indexOf(fitMo);
			DataService3.forgotMotive(fitMo);
	};
	
	$scope.clear = function() {
			DataService3.allClear();
		}
}]);
	
	
	
})();	
