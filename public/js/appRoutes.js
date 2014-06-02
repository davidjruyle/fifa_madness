angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	 // Enable pushState in routes.
    $locationProvider.html5Mode(true).hashPrefix('!');
	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/signin.html',
			controller: 'authController'
		})
		.when('/signin', {
			templateUrl: 'views/signin.html',
			controller: 'authController'
		})
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'authController'
		})

		.when('/dash', {
			templateUrl: 'views/dashboard.html',
			controller: 'dashController'
		})
		.when('/test', {
			templateUrl: 'views/test.html',
			controller: IndexCtrl
		})
		.when('/profile', {
			templateUrl: 'views/profile.ejs',
			controller: IndexCtrl
		})
		.when('/leaderboard', {
			templateUrl: 'views/leaderboard.html',
			controller: 'leaderboardController'	// we might want to make this a partial
		})
		.otherwise({
			redirectTo: '/'
		});

	//$locationProvider.html5Mode(true);

}]);