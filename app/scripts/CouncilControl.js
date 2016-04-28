 	angular
 		.module('councilSpend')
 		.controller('CouncilControl', ['$scope', 'apiCouncil', function ($scope, apiCouncil) {
 			var postcode = "RH80DX";
 			$scope.update = function (postcode) {
 				postcode = angular.copy(postcode);
 			};
 			apiCouncil.getTPDatabyPostCode(postcode)
 				.success(function (response) {
 					//console.log(response);
 					$scope.councils = response;
 				})
 				.error(function (response) {
 					alert("Please try a different postcode");
 				});
 		}]);