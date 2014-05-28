angular.module('authCtrl', []).controller('authController', function($scope, $rootScope, $http, $location) {

	$scope.tagline = 'You need to login';
	$scope.formData = {};
	
	$scope.user = {};

	//when loading the page get all the brackets
	// $http.get('/api/brackets')
	// 	.success(function(data){
	// 		$scope.brackets = data;
	// 	})	
	// 	.error(function(data){
	// 		console.log('Error:' + data);
	// 	});

	//get all users
	$http.get('/api/users')
		.success(function(data){
			$scope.users = data;
		})	
		.error(function(data){
			console.log('Error:' + data);
		});

	$http.post('/signin')
		.success(function(data){
			$scope.brackets = data;
		})	
		.error(function(data){
			console.log('Error:' + data);
		});


	$http.post('/signup',$scope.formData)
		.success(function(data){
			$scope.formData = {};
			$scope.users = data;
		})
		.error(function(data){
			console.log('Error: ' +data);
		});

	// $scope.createUser = function($http,$scope) {
	// 	$http.post('/signup',$scope.formData)
	// 	.success(function(data){
	// 		$scope.formData = {};
	// 		$scope.users = data;

	// 	})
	// 	.error(function(data){
	// 		console.log('Error: ' +data);
	// 	});

	// };



});
