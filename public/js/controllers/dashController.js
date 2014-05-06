angular.module('dashCtrl', []).controller('dashController', function($scope, dashboard) {
	$scope.scoreNotTiedErrorMsg = "Score Not Tied!";
	$scope.enterWinErrorMsg = "Invalid Score";
	var allData = {};
	$scope.allData = allData;
	$scope.allGames = [
		{id: 0, team1: "Brazil", team1_key: "BRA", team2: "Croatia", team2_key: "CRO", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 1, team1: "Mexico", team1_key: "MEX", team2: "Cameroon", team2_key: "CMR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 2, team1: "Spain", team1_key: "ESP", team2: "Netherlands", team2_key: "NED", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 3, team1: "Chile", team1_key: "CHI", team2: "Australia", team2_key: "AUS", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 4, team1: "Colombia", team1_key: "COL", team2: "Greece", team2_key: "GRE", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 5, team1: "Ivory Coast", team1_key: "CIV", team2: "Japan", team2_key: "JPN", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 6, team1: "Uruguay", team1_key: "URU", team2: "Costa Rica", team2_key: "CRC", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 7, team1: "England", team1_key: "ENG", team2: "Italy", team2_key: "ITA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 8, team1: "Switzerland", team1_key: "SUI", team2: "Ecuador", team2_key: "ECU", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 9, team1: "France", team1_key: "FRA", team2: "Honduras", team2_key: "HON", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 10, team1: "Argentina", team1_key: "ARG", team2: "Bosnia", team2_key: "BIH", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 11, team1: "Iran", team1_key: "IRN", team2: "Nigeria", team2_key: "NGA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 12, team1: "Germany", team1_key: "GER", team2: "Portugal", team2_key: "POR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 13, team1: "Ghana", team1_key: "GHA", team2: "United States", team2_key: "USA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 14, team1: "Belgium", team1_key: "BEL", team2: "Algeria", team2_key: "ALG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 15, team1: "Russia", team1_key: "RUS", team2: "South Korea", team2_key: "KOR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 16, team1: "Brazil", team1_key: "BRA", team2: "Mexico", team2_key: "MEX", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 17, team1: "Cameroon", team1_key: "CMR", team2: "Croatia", team2_key: "CRO", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 18, team1: "Spain", team1_key: "ESP", team2: "Chile", team2_key: "CHI", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 19, team1: "Australia", team1_key: "AUS", team2: "Netherlands", team2_key: "NED", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 20, team1: "Colombia", team1_key: "COL", team2: "Ivory Coast", team2_key: "CIV", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 21, team1: "Japan", team1_key: "JPN", team2: "Greece", team2_key: "GRE", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 22, team1: "Uruguay", team1_key: "URU", team2: "England", team2_key: "ENGLAND", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 23, team1: "Italy", team1_key: "ITA", team2: "Costa Rica", team2_key: "CRC", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 24, team1: "Switzerland", team1_key: "SUI", team2: "France", team2_key: "FRA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 25, team1: "Honduras", team1_key: "HON", team2: "Ecuador", team2_key: "ECU", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 26, team1: "Argentina", team1_key: "ARG", team2: "Iran", team2_key: "IRN", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 27, team1: "Nigeria", team1_key: "NGA", team2: "Bosnia", team2_key: "BIH", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 28, team1: "Germany", team1_key: "GER", team2: "GHANA", team2_key: "GHA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 29, team1: "United States", team1_key: "USA", team2: "Portugal", team2_key: "POR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 30, team1: "Belgium", team1_key: "BEL", team2: "Russia", team2_key: "RUS", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 31, team1: "South Korea", team1_key: "KOR", team2: "Algeria", team2_key: "ALG",  score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 32, team1: "Cameroon", team1_key: "CMR", team2: "Brazil", team2_key: "BRA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 33, team1: "Croatia", team1_key: "CRO", team2: "Mexico", team2_key: "MEX", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 34, team1: "Australia", team1_key: "AUS", team2: "Spain", team2_key: "ESP", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 35, team1: "Netherlands", team1_key: "NED", team2: "Chile", team2_key: "CHI", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 36, team1: "Japan", team1_key: "JPN", team2: "Colombia", team2_key: "COL", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 37, team1: "Ivory Coast", team1_key: "CIV", team2: "Greece", team2_key: "GRE", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 38, team1: "Italy", team1_key: "ITA", team2: "Uruguay", team2_key: "URU", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 39, team1: "Costa Rica", team1_key: "CRC", team2: "England", team2_key: "ENG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 40, team1: "Honduras", team1_key: "HON", team2: "Switzerland", team2_key: "SUI", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 41, team1: "Ecuador", team1_key: "ECU", team2: "France", team2_key: "FRA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 42, team1: "Nigeria", team1_key: "NGA", team2: "Argentina", team2_key: "ARG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 43, team1: "Bosnia", team1_key: "BIH", team2: "Iran", team2_key: "IRN", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 44, team1: "United States", team1_key: "USA", team2: "Germany", team2_key: "GER", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 45, team1: "Portugal", team1_key: "POR", team2: "Ghana", team2_key: "GHA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 46, team1: "South Korea", team1_key: "KOR", team2: "Belgium", team2_key: "BEL", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false},
		{id: 47, team1: "Algeria", team1_key: "ALG", eam2: "Russia", team2_key: "RUS", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false}
	];
	//INITIALIZE ALL VARIABLES
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
	
	


	//--------GET ALL ROUND DATA AND PUT IT INTO allData Object --------------------------------
	$scope.getData = function(){
		dashboard.getRounds().then(function(data){
			allData = data;
			console.log(allData);
	});
	};
	//ABOVE IS THE WAY WE NEED TO FIGURE OUT -------- BELOW IS BAD BUT I NEED IT NOW TO SOLVE OTHER FUNCTIONALITY

	// dashboard.getRound1().success(function(data){
	// 	allData["groupA_game1"] = data.games[0];
	// 	// console.log(allData);
	// });

// END OF GET ALL DATA ---------------------------------


//CHECK SCORE ON BLUR OF USER INPUT AND VALIDATE IT FOR LOGIC
$scope.scorePattern = /^\d-\d$/;
// HANDLE SCORE INPUT VALIDATION
$scope.validateScore = function(id){
	//if tied, make sure user enters equal score
	if ($scope.allGames[id].tie){
		$scope.groupA_game1_enterWinError = false;
		if($scope.allGames[id].score.charAt(0) != $scope.allGames[id].score.charAt(2)){
			$scope.allGames[id].scoreNotTied = true;
			$('#allGames'+ id).addClass("ng-invalid");
			//enterWinError is for when a winner is picked but user enters Tie Score
			$scope.allGames[id].enterWinError = false;
		}else{
			$scope.allGames[id].tie = true;
			$scope.allGames[id].winnerPick = "  TIE";
			$scope.allGames[id].winnerPickImg = "images/flags/Tie.png";
			$scope.allGames[id].scoreNotTied = false;

		}
	} //if a winner is selected, make sure the score is not equal and make sure first number is great
	else if($scope.allGames[id].winnerPick == $scope.allGames[id].team1 || $scope.allGames[id].winnerPick == $scope.allGames[id].team2){
			$scope.allGames[id].scoreNotTied = false;
			var validScore = /^\d-\d$/.test($scope.allGames[id].score);
			console.log(validScore);
			if(validScore){
				if($scope.allGames[id].score.charAt(0) == $scope.allGames[id].score.charAt(2) || $scope.allGames[id].score.charAt(0) < $scope.allGames[id].score.charAt(2)){
					$scope.allGames[id].enterWinError = true;
					$('#allGames'+ id).addClass("ng-invalid");

				}else{
					$scope.allGames[id].enterWinError = false;
					$('#allGames'+ id).addClass("ng-valid");
				}
			}else{
				$('#allGames'+ id).addClass("ng-invalid");
				$scope.allGames[id].score = "";
			}

		}
// groupA_bracket.calculateGroupWinners();
}
// HANDLE MOUSE CLICKS WHEN USER CHOOSES BRACKET --------------------------------
	$scope.calculate_game_winner = function(event,id,team1,team2){
		
		$('#allGames'+ id).removeClass("ng-invalid");
		$('.' + id + "_winner").addClass('winnerPick'); //adds white square for Picked Winner Column
		// $scope.pickedWinner = true; //reveals score input box
		$scope.allGames[id].gamePicked = true; //current game has been picked

		//IF TIE
		if(event.target.attributes.data.value == "TIE"){
			$scope.allGames[id].tie = true;
			$scope.allGames[id].score = "";
			$scope.allGames[id].winnerPick = "  TIE";
			$scope.allGames[id].winnerPickImg = "images/flags/Tie.png";
			$scope.allGames[id].winnerPickKey = "";
			$scope.allGames[id].loserPickKey = "";
			
		}//IF FIRST TEAM WINS
		else {
			if(event.target.attributes.data.value == $scope.allGames[id].team1){
				// $scope.allGames[id].score = "";
				$scope.allGames[id].enterWinError = false;
				$scope.allGames[id].scoreNotTied = false;
				$scope.allGames[id].tie = false;
				$scope.allGames[id].winnerPick = $scope.allGames[id].team1;
				$scope.allGames[id].winnerPickKey = $scope.allGames[id].team1_key;
				$scope.allGames[id].loserPickKey = $scope.allGames[id].team2_key;
				$scope.allGames[id].winnerPickImg = "images/flags/" + $scope.allGames[id].team1 + ".png";
			
			}	//IF SECOND TEAM WINS
			else{
				// $scope.allGames[id].score = "";
				$scope.allGames[id].enterWinError = false;
				$scope.allGames[id].scoreNotTied = false;
				$scope.allGames[id].tie = false;
				$scope.allGames[id].winnerPick = $scope.allGames[id].team2;
				$scope.allGames[id].winnerPickKey = $scope.allGames[id].team2_key;
				$scope.allGames[id].loserPickKey = $scope.allGames[id].team1_key;
				$scope.allGames[id].winnerPickImg = "images/flags/" + $scope.allGames[id].team2 + ".png";
				
			}
		}
		// groupA_bracket.calculateGroupWinners();
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
