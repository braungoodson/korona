angular
	.module('myModule')
		.controller('MyController',['$scope',MyController]);

function MyController ($scope) {
	$scope.message = "Test me.";
}