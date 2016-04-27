var app =
	angular
	.module('starWars', ['ui.router', 'apiServices'])
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
					controller: 'ControlWars as landing',
					templateUrl: "../templates/home.html"
				});
		});