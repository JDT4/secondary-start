 (function () {
 	function ControlWars($scope, $http) {}

 	angular
 		.module('starWars')
 		.controller('ControlWars', ['$scope', '$http', function ($scope, $http) {
 			$http({
 				method: 'GET',
 				url: 'http://taxpayersdata.com/api/v1/rh80dx/true'
 			}).then(function successCallback(response) {
 				//There's probably a better way to do this
 				$scope.swapi1 = response.data[0];
 				$scope.swapi2 = response.data[1];
 				//Why is this logging twice?
 				console.log(response.data[0]);
 			}, function errorCallback(response) {
 				console.log("Please try a different postcode");
 			});
 		}]);
 })();