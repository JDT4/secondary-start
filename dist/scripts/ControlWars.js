 	angular
 		.module('starWars')
 		.controller('ControlWars', ['$scope', 'apiWars', function ($scope, apiWars) {
 			apiWars.getTPDatabyPostCode("RH80DX")
 				.success(function (response) {
 					console.log(response);
 					$scope.councils = response;
 				})
 				.error(function (response) {
 					console.log("Please try a different postcode");
 				});
 		}]);