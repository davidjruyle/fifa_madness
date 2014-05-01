angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'authController'
		})

		.when('/dash', {
			templateUrl: 'views/dashboard.html',
			controller: 'dashController'
		})

		.when('/leaderboard', {
			templateUrl: 'views/leaderboard.html',
			controller: 'leaderboardController'	
		});

	$locationProvider.html5Mode(true);

}]);