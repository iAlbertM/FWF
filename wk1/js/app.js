var app = angular.module('myApp', []);
app.controller('controller1', function($scope) {
		
	$scope.item;
	
	$scope.groceries = ['Starburst', 'Baskin Robins Cookie Dough - Pint', 'Lactaid Milk', 'Simply Apple Juice'];

	$scope.addItem = function(){
			$scope.groceries.push($scope.item);
			$scope.item = ' ';	
	}
	
	$scope.delItem = function(deletedItem){
		var idx = $scope.groceries.indexOf(deletedItem);
		$scope.groceries.splice(idx, 1);
	}
});
