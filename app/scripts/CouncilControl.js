 		angular
 			.module('councilSpend')
 			.controller('CouncilControl', ['$scope', 'apiCouncil', function ($scope, apiCouncil) {
 				$scope.$watch('postcode', function () {
 					$scope.postcode = $scope.postcode.toUpperCase().replace(/\s+/g, '');
 				});
 				$scope.postcode = "SW1P3QL";
 				$scope.findData = function (code) {
 					$scope.loading = true;
 					apiCouncil.getTPDatabyPostCode(code)
 						.success(function (response) {
 							$scope.councils = response;
 							$scope.loading = false;
 						})
 						.error(function (response) {
 							alert("Please try a different postcode");
 							$scope.loading = false;
 						});

 				};
 		}]);