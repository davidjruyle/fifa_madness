angular.module('dashCtrl', []).controller('dashController', function($scope, $rootScope, dashboard) {

	$scope.tagline = 'This is the dashboard!';
	
	function alertData(){
		var scope = $rootScope;
		scope.viewMyData = function(){
			dashboard.getData().then(function(data){
				console.log(data);
			});
		}
	}

	function AccordionDemoCtrl($scope) {
	  	$scope.oneAtATime = true;

	 	 $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	  	$scope.addItem = function() {
	    	var newItemNo = $scope.items.length + 1;
	    	$scope.items.push('Item ' + newItemNo);
	  	};

	}	

});
