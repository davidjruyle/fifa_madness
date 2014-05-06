angular.module('dashCtrl', []).controller('dashController', function($scope, dashboard) {
	var allData = {};
	// console.log(allData);

	$scope.allData = allData;
	$scope.scoreNotTiedErrorMsg = "Score Not Tied!";
	$scope.enterWinErrorMsg = "Enter a win";
	//INITIALIZE ALL VARIABLES
	//groupA
	$scope.allData.groupA_game1_score = "";
	$scope.allData.groupA_game2_score = "";
	$scope.allData.groupA_game3_score = "";
	$scope.allData.groupA_game4_score = "";
	$scope.allData.groupA_game5_score = "";
	$scope.allData.groupA_game6_score = "";
	$scope.allData.groupA_game1_tie = false;
	$scope.allData.groupA_game2_tie = false;
	$scope.allData.groupA_game3_tie = false;
	$scope.allData.groupA_game4_tie = false;
	$scope.allData.groupA_game5_tie = false;
	$scope.allData.groupA_game6_tie = false;
	//groupB
	$scope.allData.groupB_game1_score = "";
	$scope.allData.groupB_game2_score = "";
	$scope.allData.groupB_game3_score = "";
	$scope.allData.groupB_game4_score = "";
	$scope.allData.groupB_game5_score = "";
	$scope.allData.groupB_game6_score = "";
	//groupC
	$scope.allData.groupC_game1_score = "";
	$scope.allData.groupC_game2_score = "";
	$scope.allData.groupC_game3_score = "";
	$scope.allData.groupC_game4_score = "";
	$scope.allData.groupC_game5_score = "";
	$scope.allData.groupC_game6_score = "";
	//groupD
	$scope.allData.groupD_game1_score = "";
	$scope.allData.groupD_game2_score = "";
	$scope.allData.groupD_game3_score = "";
	$scope.allData.groupD_game4_score = "";
	$scope.allData.groupD_game5_score = "";
	$scope.allData.groupD_game6_score = "";
	//groupE
	$scope.allData.groupE_game1_score = "";
	$scope.allData.groupE_game2_score = "";
	$scope.allData.groupE_game3_score = "";
	$scope.allData.groupE_game4_score = "";
	$scope.allData.groupE_game5_score = "";
	$scope.allData.groupE_game6_score = "";
	//groupF
	$scope.allData.groupF_game1_score = "";
	$scope.allData.groupF_game2_score = "";
	$scope.allData.groupF_game3_score = "";
	$scope.allData.groupF_game4_score = "";
	$scope.allData.groupF_game5_score = "";
	$scope.allData.groupF_game6_score = "";
	//groupG
	$scope.allData.groupG_game1_score = "";
	$scope.allData.groupG_game2_score = "";
	$scope.allData.groupG_game3_score = "";
	$scope.allData.groupG_game4_score = "";
	$scope.allData.groupG_game5_score = "";
	$scope.allData.groupG_game6_score = "";
	//groupH
	$scope.allData.groupH_game1_score = "";
	$scope.allData.groupH_game2_score = "";
	$scope.allData.groupH_game3_score = "";
	$scope.allData.groupH_game4_score = "";
	$scope.allData.groupH_game5_score = "";
	$scope.allData.groupH_game6_score = "";

	//Constructor for bracket object
	function Bracket(){
		this.game1 = false;
		this.game2 = false;
		this.game3 = false;
		this.game4 = false;
		this.game5 = false;
		this.game6 = false;
		this.pickedAllGroup = false;
	}
	var groupA_bracket = new Bracket();
	groupA_bracket.Brazil_pts = 0;
	groupA_bracket.Brazil_goals = 0;
	groupA_bracket.Croatia_pts = 0;
	groupA_bracket.Croatia_goals = 0;
	groupA_bracket.Cameroon_pts = 0;
	groupA_bracket.Cameroon_goals = 0;
	groupA_bracket.Mexico_pts = 0;
	groupA_bracket.Mexico_goals = 0;
	groupA_bracket.calculateGroupWinners = function(){
		if (groupA_bracket.game1 == true && groupA_bracket.game2 == true && groupA_bracket.game3 == true && groupA_bracket.game4 == true && 
			groupA_bracket.game5 == true && groupA_bracket.game6 == true){
			groupA_bracket.pickedAllGroup = true;
		alert("PICKED ALL!");
		}
		if(groupA_bracket.pickedAllGroup){
			//reset points for each team
			groupA_bracket.Brazil_pts = 0;
			groupA_bracket.Brazil_goals = 0;
			groupA_bracket.Croatia_pts = 0;
			groupA_bracket.Croatia_goals = 0;
			groupA_bracket.Cameroon_pts = 0;
			groupA_bracket.Cameroon_goals = 0;
			groupA_bracket.Mexico_pts = 0;
			groupA_bracket.Mexico_goals = 0;
			//calculate points FOR ALL TEAMS IN BRACKET A
			//game 1
			if ($scope.groupA_game1_winner_pick == allData.groupA_game1.team1_title ){
			groupA_bracket.Brazil_pts +=3;
			var winner_goals = $scope.allData.groupA_game1_score.slice(0,1);
			groupA_bracket.Brazil_goals = parseInt(winner_goals);
			console.log("score: " + $scope.allData.groupA_game1_score)
			var loser_goals = $scope.allData.groupA_game1_score.charAt(2);
			console.log(loser_goals);
			groupA_bracket.Croatia_goals = parseInt(loser_goals);

			console.log("Brazil has " + groupA_bracket.Brazil_pts + "pts and this many goals: " + groupA_bracket.Brazil_goals + " Crotia has " + groupA_bracket.Croatia_pts + "pts and " + groupA_bracket.Croatia_goals + " goals");
			}	
			else if($scope.groupA_game1_winner_pick == allData.groupA_game1.team2_title){
			groupA_bracket.Croatia_pts +=3;
			groupA_bracket.Croatia_goals = $scope.allData.groupA_game1_score.slice(0,1);
			groupA_bracket.Brazil_goals = $scope.allData.groupA_game1_score.slice(2,1);
			}
			if ($scope.groupA_game2_winner_pick == allData.groupA_game2.team1_title ){
			groupA_bracket.Mexico +=3;

			}	
			else if($scope.groupA_game1_winner_pick == allData.groupA_game2.team2_title){
			groupA_bracket.Cameroon +=3;

			}
		}
	}
	
	$scope.getData = function(){
		dashboard.getRounds().then(function(data){
			allData = data;
			console.log(allData);
	});
	};

	//--------GET ALL ROUND DATA AND PUT IT INTO allData Object --------------------------------
	$scope.getData = function(){
		dashboard.getRounds().then(function(data){
			allData = data;
			console.log(allData);
	});
	};

	//ABOVE IS THE WAY WE NEED TO FIGURE OUT -------- BELOW IS BAD BUT I NEED IT NOW TO SOLVE OTHER FUNCTIONALITY


	dashboard.getRound1().success(function(data){
		allData["groupA_game1"] = data.games[0];
		// console.log(allData);
	});
	dashboard.getRound2().success(function(data){
		allData["groupA_game2"] = data.games[0];
		// console.log(data);
	});
	// dashboard.getRound3().success(function(data){
	// 	// allData["groupA_game2"] = data.games[0];
	// 	// console.log(data);
	// });
	// dashboard.getRound4().success(function(data){
	// 	// allData["groupA_game2"] = data.games[0];
	// 	// console.log(data);
	// });
	// dashboard.getRound5().success(function(data){
	// 	// allData["groupA_game2"] = data.games[0];
	// 	// console.log(data);
	// });
	dashboard.getRound6().success(function(data){
		allData["groupA_game3"] = data.games[2];
		// console.log(data);
	});
	dashboard.getRound7().success(function(data){
		allData["groupA_game4"] = data.games[0];
		// console.log(data);
	});
	// dashboard.getRound8().success(function(data){
	// 	// allData["groupA_game3"] = data.games[2];
	// 	// console.log(data);
	// });
	// dashboard.getRound9().success(function(data){
	// 	// allData["groupA_game3"] = data.games[2];
	// 	// console.log(data);
	// });
	// dashboard.getRound10().success(function(data){
	// 	// allData["groupA_game3"] = data.games[2];
	// 	// console.log(data);
	// });
	// dashboard.getRound11().success(function(data){
	// 	// allData["groupA_game3"] = data.games[2];
	// 	// console.log(data);
	// });
	dashboard.getRound12().success(function(data){
		allData["groupA_game5"] = data.games[0];
		allData["groupA_game6"] = data.games[1];
		// console.log(allData);
		// console.log(data);
	});
	// dashboard.getRound13().success(function(data){
	// 	// allData["groupA_game3"] = data.games[2];
	// 	// console.log(data);
	// });

// END OF GET ALL DATA ---------------------------------

//CHECK SCORE ON BLUR OF USER INPUT AND VALIDATE IT FOR LOGIC
$scope.scorePattern = /^\d-\d$/;
//HANDLE SCORE INPUT VALIDATION
$scope.groupA_game1_checkScore = function(){
	if ($scope.allData.groupA_game1_tie){
		$scope.groupA_game1_enterWinError = false;
		if($scope.allData.groupA_game1_score.slice(0,1) != $scope.allData.groupA_game1_score.charAt(2)){
			$scope.groupA_game1_scoreNotTied = true;
			//enterWinError is for when a winner is picked but user enters Tie Score
			$scope.groupA_game1_enterWinError = false;
		}else{
			$scope.allData.groupA_game1_tie = true;
			$scope.groupA_game1_winner_pick = "  TIE";
			$scope.groupA_game1_winner_pick_img = "images/flags/tie.png";
			$scope.groupA_game1_scoreNotTied = false;

		}
	}
	else if($scope.groupA_game1_winner_pick == allData.groupA_game1.team1_title || $scope.groupA_game1_winner_pick == allData.groupA_game1.team2_title){
			if($scope.allData.groupA_game1_score.slice(0,1) == $scope.allData.groupA_game1_score.charAt(2) || $scope.allData.groupA_game1_score.slice(0,1) < $scope.allData.groupA_game1_score.charAt(2)){
				$scope.groupA_game1_enterWinError = true;
				$scope.allData.groupA_game1_score = "";
			}else{
				$scope.groupA_game1_enterWinError = false;
			}
			

		}
groupA_bracket.calculateGroupWinners();
}
$scope.groupA_game2_checkScore = function(){
	if ($scope.allData.groupA_game2_tie){
		$scope.groupA_game2_enterWinError = false;
		if($scope.allData.groupA_game2_score.slice(0,1) != $scope.allData.groupA_game2_score.charAt(2)){
			$scope.groupA_game2_scoreNotTied = true;
			//enterWinError is for when a winner is picked but user enters Tie Score
			$scope.groupA_game2_enterWinError = false;
		}else{
			$scope.allData.groupA_game2_tie = true;
			$scope.groupA_game2_winner_pick = "  TIE";
			$scope.groupA_game2_winner_pick_img = "images/flags/tie.png";
			$scope.groupA_game2_scoreNotTied = false;

		}
	}
	else if($scope.groupA_game2_winner_pick == allData.groupA_game2.team1_title || $scope.groupA_game2_winner_pick == allData.groupA_game2.team2_title){
			if($scope.allData.groupA_game2_score.slice(0,1) == $scope.allData.groupA_game2_score.charAt(2) || $scope.allData.groupA_game2_score.slice(0,1) < $scope.allData.groupA_game2_score.charAt(2)){
				$scope.groupA_game2_enterWinError = true;
				$scope.allData.groupA_game2_score = "";
			}else{
				$scope.groupA_game2_enterWinError = false;
			}
			

		}
groupA_bracket.calculateGroupWinners();
}
// HANDLE MOUSE CLICKS WHEN USER CHOOSES BRACKET --------------------------------
	$scope.groupA_game1_winner = function(e){
		$('.groupA_winner1').addClass('winnerPick');
		$scope.pickedWinner = true;
		groupA_bracket.game1 = true;
		//IF TIE
		if($scope.allData.groupA_game1_tie == true || e.target.attributes.data.value == "TIE"){
			$scope.allData.groupA_game1_score = "";
			$scope.allData.groupA_game1_tie = true;
			$scope.groupA_game1_winner_pick = "  TIE";
			$scope.groupA_game1_winner_pick_img = "images/flags/tie.png"
			
		}//IF FIRST TEAM WINS
		else if(e.target.attributes.data.value == allData.groupA_game1.team1_title){
			$scope.allData.groupA_game1_score = "";
			$scope.groupA_game1_enterWinError = false;
			$scope.allData.groupA_game1_tie = false;
			$scope.groupA_game1_winner_pick = allData.groupA_game1.team1_title;
			$scope.groupA_game1_winner_pick_key = allData.groupA_game1.team1_code;
			$scope.groupA_game1_loser_pick_key = allData.groupA_game1.team2_code;
			$scope.groupA_game1_winner_pick_img = "images/flags/brazil.png"
			
		}//IF SECOND TEAM WINS
		else{
			$scope.allData.groupA_game1_score = "";
			$scope.enterWinError = false;
			$scope.allData.groupA_game1_tie = false;
			$scope.groupA_game1_winner_pick = allData.groupA_game1.team2_title;
			$scope.groupA_game1_winner_pick_key = allData.groupA_game1.team2_code;
			$scope.groupA_game1_loser_pick_key = allData.groupA_game1.team1_code
			$scope.groupA_game1_winner_pick_img = "images/flags/croatia.png"
			
		}
		groupA_bracket.calculateGroupWinners();
	};

	$scope.groupA_game2_winner = function(e){
		$('.groupA_winner2').addClass('winnerPick');
		$scope.pickedWinner2 = true;
		groupA_bracket.game2 = true;
		if($scope.allData.groupA_game2_tie == true || e.target.attributes.data.value == "TIE"){
			$scope.allData.groupA_game2_tie = true;
			$scope.groupA_game2_winner_pick = "  TIE";
			$scope.groupA_game2_winner_pick_img = "images/flags/tie.png"
			
		}
		else if(e.target.attributes.data.value == allData.groupA_game2.team1_title){
			$scope.allData.groupA_game2_score = "";
			$scope.groupA_game2_scoreNotTied = false;
			$scope.allData.groupA_game2_tie = false;
			$scope.groupA_game2_winner_pick = allData.groupA_game2.team1_title;
			$scope.groupA_game2_winner_pick_key = allData.groupA_game1.team1_code;
			$scope.groupA_game2_loser_pick_key = allData.groupA_game2.team2_code;
			$scope.groupA_game2_winner_pick_img = "images/flags/mexico.png"
		}
		else{
			$scope.allData.groupA_game2_score = "";
			$scope.scoreNotTied = false;
			$scope.allData.groupA_game2_tie = false;
			$scope.groupA_game2_winner_pick = allData.groupA_game2.team2_title;
			$scope.groupA_game2_winner_pick_key = allData.groupA_game2.team2_code;
			$scope.groupA_game2_loser_pick_key = allData.groupA_game2.team1_code
			$scope.groupA_game2_winner_pick_img = "images/flags/cameroon.png"
		}
	};
	$scope.groupA_game3_winner = function(e){
		groupA_bracket.game3 = true;
		$('.groupA_winner3').addClass('winnerPick');
		if(e.target.attributes.data.value == allData.groupA_game3.team1_title){
			$scope.groupA_game3_winner_pick = allData.groupA_game3.team1_title;
			$scope.groupA_game3_winner_pick_img = "images/flags/brazil.png"
		}
		else{
			$scope.groupA_game3_winner_pick = allData.groupA_game3.team2_title;
			$scope.groupA_game3_winner_pick_img = "images/flags/mexico.png";
		}
		groupA_bracket.calculateGroupWinners();
	};
	$scope.groupA_game4_winner = function(e){
		groupA_bracket.game4 = true;
		$('.groupA_winner4').addClass('winnerPick');
		
		if(e.target.attributes.data.value == allData.groupA_game4.team1_title){
			$scope.groupA_game4_winner_pick = allData.groupA_game4.team1_title;
			$scope.groupA_game4_winner_pick_img = "images/flags/cameroon.png"
		}
		else{
			$scope.groupA_game4_winner_pick = allData.groupA_game4.team2_title;
			$scope.groupA_game4_winner_pick_img = "images/flags/croatia.png"
		}
		groupA_bracket.calculateGroupWinners();
	};
	$scope.groupA_game5_winner = function(e){
		groupA_bracket.game5 = true;
		$('.groupA_winner5').addClass('winnerPick');
		if(e.target.attributes.data.value == allData.groupA_game5.team1_title){
			$scope.groupA_game5_winner_pick = allData.groupA_game5.team1_title;
			$scope.groupA_game5_winner_pick_img = "images/flags/cameroon.png"
		}
		else{
			$scope.groupA_game5_winner_pick = allData.groupA_game5.team2_title;
			$scope.groupA_game5_winner_pick_img = "images/flags/brazil.png"
		}
		groupA_bracket.calculateGroupWinners();
	};
	$scope.groupA_game6_winner = function(e){
		groupA_bracket.game6 = true;
		$('.groupA_winner6').addClass('winnerPick');
		if(e.target.attributes.data.value == allData.groupA_game6.team1_title){
			$scope.groupA_game6_winner_pick = allData.groupA_game6.team1_title;
			$scope.groupA_game6_winner_pick_img = "images/flags/croatia.png"
		}
		else{
			$scope.groupA_game6_winner_pick = allData.groupA_game6.team2_title;
			$scope.groupA_game6_winner_pick_img = "images/flags/mexico.png"
		}
		groupA_bracket.calculateGroupWinners();
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
