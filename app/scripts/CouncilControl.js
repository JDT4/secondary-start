 	angular
 		.module('councilSpend')
 		.controller('CouncilControl', ['$scope', 'apiCouncil', function ($scope, apiCouncil) {
 			$scope.postcode = "RH80DX";
 			$scope.update = function (code) {
 				$scope.postcode = code;
 			};
 			apiCouncil.getTPDatabyPostCode($scope.postcode)
 				.success(function (response) {
 					$scope.councils = response;
 				})
 				.error(function (response) {
 					alert("Please try a different postcode");
 				});
 		}]);