var app =
	angular
	.module('councilSpend', ['ui.router', 'apiServices'])
	.config(
		function ($locationProvider, $stateProvider) {
			$locationProvider
				.html5Mode({
					enabled: true,
					requireBase: false
				});
			$stateProvider
				.state('landing', {
					url: '/',
					controller: 'CouncilControl as landing',
					templateUrl: "../templates/home.html"
				})
		});