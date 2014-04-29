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
	var count=0;
	$scope.toggleWinner1 = function(e){
		count++;
		$scope.picks = ["BRAZIL","CROATIA"];
		$scope.pickImg = "http://img.fifa.com/images/flags/4/bra.png"
		alert("clicked");
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
