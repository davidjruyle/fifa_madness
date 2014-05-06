angular.module('loginCtrl', []).controller('loginController', function($scope, $http) {

	$scope.tagline = 'Works!';

	$http.get('/user/profile')
		.success(function(data,status,headers,config){
			$scope.user = data;
			$scope.error = "";
	}).
		error(function(data,status,headers,config){
			$scope.user = {};
			$scope.errror = data;
		});

});
