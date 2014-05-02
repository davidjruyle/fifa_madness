angular.module('dashCtrl', []).controller('dashController', function($scope, dashboard) {
	var allData = {};
	var groupA_bracket = {Brazil: 0,Croatia: 0,Mexico: 0,Cameroon: 0,game1: false, game2: false, game3: false, game4: false, game5: false, game6:false,groupA_picked:false};

	$scope.allData = allData;
	$scope.tagline = 'This is the dashboard!';
	
	$scope.getData = function(){
		dashboard.getRounds().then(function(data){
			allData = data;
			console.log(allData);
		// console.log(allData);
	});
	};

	//--------GET ALL ROUND DATA AND PUT IT INTO allData Object --------------------------------
	dashboard.getRound1().success(function(data){
		allData["groupA_game1"] = data.games[0];
		// console.log(allData);
	});
	dashboard.getRound2().success(function(data){
		allData["groupA_game2"] = data.games[0];
		// console.log(data);
	});
	dashboard.getRound3().success(function(data){
		// allData["groupA_game2"] = data.games[0];
		// console.log(data);
	});
	dashboard.getRound4().success(function(data){
		// allData["groupA_game2"] = data.games[0];
		// console.log(data);
	});
	dashboard.getRound5().success(function(data){
		// allData["groupA_game2"] = data.games[0];
		// console.log(data);
	});
	dashboard.getRound6().success(function(data){
		allData["groupA_game3"] = data.games[2];
		// console.log(data);
	});
	dashboard.getRound7().success(function(data){
		allData["groupA_game4"] = data.games[0];
		// console.log(data);
	});
	dashboard.getRound8().success(function(data){
		// allData["groupA_game3"] = data.games[2];
		// console.log(data);
	});
	dashboard.getRound9().success(function(data){
		// allData["groupA_game3"] = data.games[2];
		// console.log(data);
	});
	dashboard.getRound10().success(function(data){
		// allData["groupA_game3"] = data.games[2];
		// console.log(data);
	});
	dashboard.getRound11().success(function(data){
		// allData["groupA_game3"] = data.games[2];
		// console.log(data);
	});
	dashboard.getRound12().success(function(data){
		allData["groupA_game5"] = data.games[0];
		allData["groupA_game6"] = data.games[1];
		// console.log(allData);
		// console.log(data);
	});
	dashboard.getRound13().success(function(data){
		// allData["groupA_game3"] = data.games[2];
		// console.log(data);
	});

// END OF GET ALL DATA ---------------------------------


// HANDLE MOUSE CLICKS WHEN USER CHOOSES BRACKET --------------------------------
	$scope.groupA_game1_winner = function(e){
		$('.groupA_winner1').addClass('winnerPick');
		groupA_bracket.game1 = true;
		if(e.target.attributes.data.value == allData.groupA_game1.team1_title){
			$scope.groupA_game1_winner_pick = allData.groupA_game1.team1_title;
			$scope.groupA_game1_winner_pick_img = "http://img.fifa.com/images/flags/4/bra.png"
		}else{
			$scope.groupA_game1_winner_pick = allData.groupA_game1.team2_title;
			$scope.groupA_game1_winner_pick_img = "http://img.fifa.com/images/flags/4/cro.png"
		}
	};

	$scope.groupA_game2_winner = function(e){
		$('.groupA_winner2').addClass('winnerPick');
		groupA_bracket.game2 = true;
		if(e.target.attributes.data.value == allData.groupA_game2.team1_title){
			$scope.groupA_game2_winner_pick = allData.groupA_game2.team1_title;
			$scope.groupA_game2_winner_pick_img = "http://img.fifa.com/images/flags/4/mex.png"
		}
		else{
			$scope.groupA_game2_winner_pick = allData.groupA_game2.team2_title;
			$scope.groupA_game2_winner_pick_img = "http://img.fifa.com/images/flags/4/cmr.png"
		}
	};
	$scope.groupA_game3_winner = function(e){
		groupA_bracket.game3 = true;
		$('.groupA_winner3').addClass('winnerPick');
		if(e.target.attributes.data.value == allData.groupA_game3.team1_title){
			$scope.groupA_game3_winner_pick = allData.groupA_game3.team1_title;
			$scope.groupA_game3_winner_pick_img = "http://img.fifa.com/images/flags/4/bra.png"
		}
		else{
			$scope.groupA_game3_winner_pick = allData.groupA_game3.team2_title;
			$scope.groupA_game3_winner_pick_img = "http://img.fifa.com/images/flags/4/mex.png"
		}
	};
	$scope.groupA_game4_winner = function(e){
		groupA_bracket.game4 = true;
		$('.groupA_winner4').addClass('winnerPick');
		if(e.target.attributes.data.value == allData.groupA_game4.team1_title){
			$scope.groupA_game4_winner_pick = allData.groupA_game4.team1_title;
			$scope.groupA_game4_winner_pick_img = "http://img.fifa.com/images/flags/4/cmr.png"
		}
		else{
			$scope.groupA_game4_winner_pick = allData.groupA_game4.team2_title;
			$scope.groupA_game4_winner_pick_img = "http://img.fifa.com/images/flags/4/cro.png"
		}
	};
	$scope.groupA_game5_winner = function(e){
		groupA_bracket.game5 = true;
		$('.groupA_winner5').addClass('winnerPick');
		if(e.target.attributes.data.value == allData.groupA_game5.team1_title){
			$scope.groupA_game5_winner_pick = allData.groupA_game5.team1_title;
			$scope.groupA_game5_winner_pick_img = "http://img.fifa.com/images/flags/4/cmr.png"
		}
		else{
			$scope.groupA_game5_winner_pick = allData.groupA_game5.team2_title;
			$scope.groupA_game5_winner_pick_img = "http://img.fifa.com/images/flags/4/bra.png"
		}
	};
	$scope.groupA_game6_winner = function(e){
		groupA_bracket.game6 = true;
		$('.groupA_winner6').addClass('winnerPick');
		if(e.target.attributes.data.value == allData.groupA_game6.team1_title){
			$scope.groupA_game6_winner_pick = allData.groupA_game6.team1_title;
			$scope.groupA_game6_winner_pick_img = "http://img.fifa.com/images/flags/4/cro.png"
		}
		else{
			$scope.groupA_game6_winner_pick = allData.groupA_game6.team2_title;
			$scope.groupA_game6_winner_pick_img = "http://img.fifa.com/images/flags/4/mex.png"
		}
	};
	function calculateGroupWinners(){
		alert("all picked");
		if(groupA_bracket.game1 = true){
			if (groupA_bracket.game1 = true && $scope.groupA_game1_winner_pick == allData.groupA_game1.team1_title ){
			groupA_bracket.Brazil +=3;
		}else if(groupA_bracket.game1 = true && $scope.groupA_game1_winner_pick == allData.groupA_game1.team2_title){
			groupA_bracket.Croatia +=3;
		}
		console.log(groupA_bracket.Brazil);
		console.log(groupA_bracket.Croatia);
		}
	}
	if (groupA_bracket.game1 == true && groupA_bracket.game2 == true && groupA_bracket.game3 == true && groupA_bracket.game4 == true && 
			groupA_bracket.game5 == true && groupA_bracket.game6 == true){
			groupA_bracket.groupA_picked = true;
		}
	if (groupA_bracket.groupA_picked == true){
		calculateGroupWinners();
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
