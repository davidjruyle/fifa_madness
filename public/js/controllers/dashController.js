angular.module('dashCtrl', []).controller('dashController', function($scope, dashboard) {

	$scope.tagline = 'This is the dashboard!';

	// dashboard.getRound1().success(function(data){
	// 	$scope.teamList1 = data;
	// 	console.log(data);
	// });
	
	// dashboard.getRound1().success(function(data){
	// 	$scope.teamList1 = data;
	// 	console.log(data);
	// });
	
	$scope.groupAWinner1 = function(obj){
		console.log(obj);
		if(obj.target.attributes.data.value == "Brazil"){
			$scope.picks = "BRAZIL";
			$scope.pickImg = "http://img.fifa.com/images/flags/4/bra.png"
		}
		else{
			$scope.picks = "CROATIA";
			$scope.pickImg = "http://img.fifa.com/images/flags/4/cro.png"
		}
	};


	function AccordionDemoCtrl($scope) {
	  	$scope.oneAtATime = true;

	 	 $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	  	$scope.addItem = function() {
	    	var newItemNo = $scope.items.length + 1;
	    	$scope.items.push('Item ' + newItemNo);
	  	};

	}	

});
