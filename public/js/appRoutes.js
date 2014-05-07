angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})

		.when('/dash', {
			templateUrl: 'views/dashboard.html',
			controller: 'dashController'
		})

		.when('/leaderboard', {
			templateUrl: 'views/leaderboard.html',
			controller: 'leaderboardController'	
		})
		.when('/signup', {
			templateUrl: 'views/signup.html'
		});

	$locationProvider.html5Mode(true);

}]);