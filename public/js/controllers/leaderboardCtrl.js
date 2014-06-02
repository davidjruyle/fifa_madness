angular.module('leaderboardCtrl', []).controller('leaderboardController', function($scope, leaderboard, $htttp, $location) {

	$scope.tagline = 'This is the leaderboard';


    $http.get('/api/users')
		.success(function(data) {
			$scope.users = data;
			cosole.log($scope.users);
			//console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});
