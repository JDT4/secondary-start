 	angular
 		.module('councilSpend')
 		.controller('CouncilControl', ['$scope', 'apiCouncil', function ($scope, apiCouncil) {
 			var postcode = "RH80DX";
 			$scope.update = function (code) {
 				postcode = (code);
 			};
 			apiCouncil.getTPDatabyPostCode(postcode)
 				.success(function (response) {
 					$scope.councils = response;
 				})
 				.error(function (response) {
 					alert("Please try a different postcode");
 				});
 		}]);