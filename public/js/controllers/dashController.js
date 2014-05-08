angular.module('dashCtrl', []).controller('dashController', function($scope, dashboard) {
	$scope.scoreNotTiedErrorMsg = "Score Not Tied!";
	$scope.enterWinErrorMsg = "Invalid Score";
	var allData = {};
	$scope.allData = allData;
	// var groupWinners = [];
	// $scope.groupWinners = groupWinners;

	$scope.allGames = [
		{id: 0, team1: "Brazil", team1_key: "BRA", team2: "Croatia", team2_key: "CRO", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 1, team1: "Mexico", team1_key: "MEX", team2: "Cameroon", team2_key: "CMR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 2, team1: "Spain", team1_key: "ESP", team2: "Netherlands", team2_key: "NED", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 3, team1: "Chile", team1_key: "CHI", team2: "Australia", team2_key: "AUS", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 4, team1: "Colombia", team1_key: "COL", team2: "Greece", team2_key: "GRE", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 5, team1: "Ivory Coast", team1_key: "CIV", team2: "Japan", team2_key: "JPN", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 6, team1: "Uruguay", team1_key: "URU", team2: "Costa Rica", team2_key: "CRC", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 7, team1: "England", team1_key: "ENG", team2: "Italy", team2_key: "ITA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 8, team1: "Switzerland", team1_key: "SUI", team2: "Ecuador", team2_key: "ECU", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false, displayInputScore: false},
		{id: 9, team1: "France", team1_key: "FRA", team2: "Honduras", team2_key: "HON", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 10, team1: "Argentina", team1_key: "ARG", team2: "Bosnia", team2_key: "BIH", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 11, team1: "Iran", team1_key: "IRN", team2: "Nigeria", team2_key: "NGA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 12, team1: "Germany", team1_key: "GER", team2: "Portugal", team2_key: "POR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 13, team1: "Ghana", team1_key: "GHA", team2: "United States", team2_key: "USA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 14, team1: "Belgium", team1_key: "BEL", team2: "Algeria", team2_key: "ALG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 15, team1: "Russia", team1_key: "RUS", team2: "South Korea", team2_key: "KOR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 16, team1: "Brazil", team1_key: "BRA", team2: "Mexico", team2_key: "MEX", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 17, team1: "Cameroon", team1_key: "CMR", team2: "Croatia", team2_key: "CRO", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 18, team1: "Spain", team1_key: "ESP", team2: "Chile", team2_key: "CHI", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 19, team1: "Australia", team1_key: "AUS", team2: "Netherlands", team2_key: "NED", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 20, team1: "Colombia", team1_key: "COL", team2: "Ivory Coast", team2_key: "CIV", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 21, team1: "Japan", team1_key: "JPN", team2: "Greece", team2_key: "GRE", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 22, team1: "Uruguay", team1_key: "URU", team2: "England", team2_key: "ENGLAND", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false, displayInputScore: false},
		{id: 23, team1: "Italy", team1_key: "ITA", team2: "Costa Rica", team2_key: "CRC", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 24, team1: "Switzerland", team1_key: "SUI", team2: "France", team2_key: "FRA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 25, team1: "Honduras", team1_key: "HON", team2: "Ecuador", team2_key: "ECU", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 26, team1: "Argentina", team1_key: "ARG", team2: "Iran", team2_key: "IRN", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 27, team1: "Nigeria", team1_key: "NGA", team2: "Bosnia", team2_key: "BIH", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 28, team1: "Germany", team1_key: "GER", team2: "GHANA", team2_key: "GHA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 29, team1: "United States", team1_key: "USA", team2: "Portugal", team2_key: "POR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 30, team1: "Belgium", team1_key: "BEL", team2: "Russia", team2_key: "RUS", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 31, team1: "South Korea", team1_key: "KOR", team2: "Algeria", team2_key: "ALG",  score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 32, team1: "Cameroon", team1_key: "CMR", team2: "Brazil", team2_key: "BRA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 33, team1: "Croatia", team1_key: "CRO", team2: "Mexico", team2_key: "MEX", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 34, team1: "Australia", team1_key: "AUS", team2: "Spain", team2_key: "ESP", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 35, team1: "Netherlands", team1_key: "NED", team2: "Chile", team2_key: "CHI", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 36, team1: "Japan", team1_key: "JPN", team2: "Colombia", team2_key: "COL", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 37, team1: "Ivory Coast", team1_key: "CIV", team2: "Greece", team2_key: "GRE", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 38, team1: "Italy", team1_key: "ITA", team2: "Uruguay", team2_key: "URU", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 39, team1: "Costa Rica", team1_key: "CRC", team2: "England", team2_key: "ENG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 40, team1: "Honduras", team1_key: "HON", team2: "Switzerland", team2_key: "SUI", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 41, team1: "Ecuador", team1_key: "ECU", team2: "France", team2_key: "FRA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 42, team1: "Nigeria", team1_key: "NGA", team2: "Argentina", team2_key: "ARG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 43, team1: "Bosnia", team1_key: "BIH", team2: "Iran", team2_key: "IRN", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 44, team1: "United States", team1_key: "USA", team2: "Germany", team2_key: "GER", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 45, team1: "Portugal", team1_key: "POR", team2: "Ghana", team2_key: "GHA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 46, team1: "South Korea", team1_key: "KOR", team2: "Belgium", team2_key: "BEL", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
		{id: 47, team1: "Algeria", team1_key: "ALG", eam2: "Russia", team2_key: "RUS", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
	];
	//INITIALIZE ALL VARIABLES
	//Constructor for bracket object
	function Bracket(){
		this.pickedAllGroup = false;
	}
	var groupA_bracket = new Bracket();
	$scope.groupA_bracket = groupA_bracket;
	

	calculateGroupWinners = function(id1,id2,id3,id4,id5,id6,team1_pts,team1_goals,team2_pts,team2_goals, team3_pts,team3_goals, team4_pts, team4_goals,groupBracket){
			// console.log(id1 + "," + id2 + "," + id3 + "," + id4 + "," + id5 + "," + id6 + "," + team1_pts + "," + team1_goals + "," + team2_pts + "," + team2_goals + "," + team3_pts + "," + team3_goals + "," + team4_pts + "," + team4_goals + ","+ groupBracket);
			var game1 = $scope.allGames[id1].team1 + "," + $scope.allGames[id1].team2;
			var game2 = $scope.allGames[id2].team1 + "," + $scope.allGames[id2].team2;
			var game3 = $scope.allGames[id3].team1 + "," + $scope.allGames[id3].team2;
			var game4 = $scope.allGames[id4].team1 + "," + $scope.allGames[id4].team2;
			var game5 = $scope.allGames[id5].team1 + "," + $scope.allGames[id5].team2;
			var game6 = $scope.allGames[id6].team1 + "," + $scope.allGames[id6].team2;

			//game 1    team1 vs team2
			if ($scope.allGames[id1].winnerPick == $scope.allGames[id1].team1 ){
			$scope[groupBracket][team1_pts] += 3;
			var winner_goals1 = $scope.allGames[id1].score.charAt(0);
			$scope[groupBracket][team1_goals] += parseInt(winner_goals1);
			var loser_goals1 = $scope.allGames[id1].score.charAt(2);
			$scope[groupBracket][team2_goals] += parseInt(loser_goals1);
			}	
			else if($scope.allGames[id1].winnerPick == $scope.allGames[id1].team2){
			$scope[groupBracket][team2_pts] += 3;
			var winner_goals1 = $scope.allGames[id1].score.charAt(0);
			$scope[groupBracket][team2_goals] += parseInt(winner_goals1);
			var loser_goals1 = $scope.allGames[id1].score.charAt(2);
			$scope[groupBracket][team1_goals] += parseInt(loser_goals1);
			}else{
			$scope[groupBracket][team1_pts] += 1;
			$scope[groupBracket][team2_pts] += 1;
			var goals1 = $scope.allGames[id1].score.charAt(0);
			$scope[groupBracket][team1_goals] += parseInt(goals1);
			$scope[groupBracket][team2_goals] += parseInt(goals1);
			}

			//game 2  team3 vs team4
			if ($scope.allGames[id2].winnerPick == $scope.allGames[id2].team1 ){
			$scope[groupBracket][team3_pts] += 3;
			var winner_goals2 = $scope.allGames[id2].score.charAt(0);
			$scope[groupBracket][team3_goals] += parseInt(winner_goals2);
			var loser_goals2 = $scope.allGames[id2].score.charAt(2);
			$scope[groupBracket][team4_goals] += parseInt(loser_goals2);
			}	
			else if($scope.allGames[id2].winnerPick == $scope.allGames[id2].team2){
			$scope[groupBracket][team4_pts] += 3;
			var winner_goals2 = $scope.allGames[id2].score.charAt(0);
			$scope[groupBracket][team4_goals] += parseInt(winner_goals2);
			var loser_goals2 = $scope.allGames[id2].score.charAt(2);
			$scope[groupBracket][team3_goals] += parseInt(loser_goals2);
			}else{
			$scope[groupBracket][team3_pts] += 1;
			$scope[groupBracket][team4_pts] += 1;
			var goals2 = $scope.allGames[id2].score.charAt(0);
			$scope[groupBracket][team3_goals] += parseInt(goals2);
			$scope[groupBracket][team4_goals] += parseInt(goals2);
			}

			//game3     team1 vs team3
			if ($scope.allGames[id3].winnerPick == $scope.allGames[id3].team1 ){
			$scope[groupBracket][team1_pts] += 3;
			var winner_goals3 = $scope.allGames[id3].score.charAt(0);
			$scope[groupBracket][team1_goals] += parseInt(winner_goals3);
			var loser_goals3 = $scope.allGames[id3].score.charAt(2);
			$scope[groupBracket][team3_goals] += parseInt(loser_goals3);
			}	
			else if($scope.allGames[id3].winnerPick == $scope.allGames[id3].team2){
			$scope[groupBracket][team3_pts] += 3;
			var winner_goals3 = $scope.allGames[id3].score.charAt(0);
			$scope[groupBracket][team3_goals] += parseInt(winner_goals3);
			var loser_goals3 = $scope.allGames[id3].score.charAt(2);
			$scope[groupBracket][team1_goals] += parseInt(loser_goals3);		
			}else{
			$scope[groupBracket][team1_pts] += 1;
			$scope[groupBracket][team3_pts] += 1;
			var goals3 = $scope.allGames[id3].score.charAt(0);
			$scope[groupBracket][team1_goals] += parseInt(goals3);
			$scope[groupBracket][team3_goals] += parseInt(goals3);		
			}

			//game4  team4 vs team2
			if ($scope.allGames[id4].winnerPick == $scope.allGames[id4].team1 ){
			$scope[groupBracket][team4_pts] += 3;
			var winner_goals4 = $scope.allGames[id4].score.charAt(0);
			$scope[groupBracket][team4_goals] += parseInt(winner_goals4);
			var loser_goals4 = $scope.allGames[id4].score.charAt(2);
			$scope[groupBracket][team2_goals] += parseInt(loser_goals4);
			}	
			else if($scope.allGames[id4].winnerPick == $scope.allGames[id4].team2){
			$scope[groupBracket][team2_pts] += 3;
			var winner_goals4 = $scope.allGames[id4].score.charAt(0);
			$scope[groupBracket][team2_goals] += parseInt(winner_goals4);
			var loser_goals4 = $scope.allGames[id4].score.charAt(2);
			$scope[groupBracket][team4_goals] += parseInt(loser_goals4);			
			}else{
			$scope[groupBracket][team2_pts] += 1;
			$scope[groupBracket][team4_pts] += 1;
			var goals4 = $scope.allGames[id4].score.charAt(0);
			$scope[groupBracket][team2_goals] += parseInt(goals4);
			$scope[groupBracket][team4_goals] += parseInt(goals4);			
			}

			//game5 team4 vs team1
			if ($scope.allGames[id5].winnerPick == $scope.allGames[id5].team1 ){
			$scope[groupBracket][team4_pts] += 3;
			var winner_goals5 = $scope.allGames[id5].score.charAt(0);
			$scope[groupBracket][team4_goals] += parseInt(winner_goals5);
			var loser_goals5 = $scope.allGames[id5].score.charAt(2);
			$scope[groupBracket][team1_goals] += parseInt(loser_goals5);
			}	
			else if($scope.allGames[id5].winnerPick == $scope.allGames[id5].team2){
			$scope[groupBracket][team1_pts] += 3;
			var winner_goals5 = $scope.allGames[id5].score.charAt(0);
			$scope[groupBracket][team1_goals] += parseInt(winner_goals5);
			var loser_goals5 = $scope.allGames[id5].score.charAt(2);
			$scope[groupBracket][team4_goals] += parseInt(loser_goals5);			
			}else{
			$scope[groupBracket][team1_pts] += 1;
			$scope[groupBracket][team4_pts] += 1;
			var goals5 = $scope.allGames[id5].score.charAt(0);
			$scope[groupBracket][team1_goals] += parseInt(goals5);
			$scope[groupBracket][team4_goals] += parseInt(goals5);		
			}

			//game6 team2 vs team3
			if ($scope.allGames[id6].winnerPick == $scope.allGames[id6].team1 ){
			$scope[groupBracket][team2_pts] += 3;
			var winner_goals6 = $scope.allGames[id6].score.charAt(0);
			$scope[groupBracket][team2_goals] += parseInt(winner_goals6);
			var loser_goals6 = $scope.allGames[id6].score.charAt(2);
			$scope[groupBracket][team3_goals] += parseInt(loser_goals6);
			}	
			else if($scope.allGames[id6].winnerPick == $scope.allGames[id6].team2){
			$scope[groupBracket][team3_pts] += 3;
			var winner_goals6 = $scope.allGames[id6].score.charAt(0);
			$scope[groupBracket][team3_goals] += parseInt(winner_goals6);
			var loser_goals6 = $scope.allGames[id6].score.charAt(2);
			$scope[groupBracket][team2_goals] += parseInt(loser_goals6);
			}else{
			$scope[groupBracket][team2_pts] += 1;
			$scope[groupBracket][team3_pts] += 1;
			var goals6 = $scope.allGames[id6].score.charAt(0);
			$scope[groupBracket][team2_goals] += parseInt(goals6);
			$scope[groupBracket][team3_goals] += parseInt(goals6);
			}

//END LOGIC OF COLLECTING POINTS AND GOALS FOR GROUP STAGES -----------------------------

			//CALCULATE 1ST AND 2ND PLACE FOR EACH GROUP
			$scope[groupBracket].group1st = null;
			$scope[groupBracket].group1stImg = null;
			$scope[groupBracket].group2nd = null;
			$scope[groupBracket].group2ndImg = null;

			$scope.groupOutcome = [
											[$scope.allGames[id1].team1, $scope[groupBracket][team1_pts], $scope[groupBracket][team1_goals]],
											[$scope.allGames[id1].team2, $scope[groupBracket][team2_pts], $scope[groupBracket][team2_goals]],
											[$scope.allGames[id2].team1, $scope[groupBracket][team3_pts], $scope[groupBracket][team3_goals]],
											[$scope.allGames[id2].team2, $scope[groupBracket][team4_pts], $scope[groupBracket][team4_goals]]
										];
			//sort teams according to PTS
			$scope.groupOutcome.sort(function(a,b){return a[1] < b[1]});
			console.log($scope.groupOutcome);

			$scope.groupOutcomeGoals = $scope.groupOutcome.slice(0);
			$scope.groupOutcomeGoals.sort(function(a,b){return a[2] < b[2]});

			console.log($scope.groupOutcomeGoals);



//----------------LOGIC FOR DETERMINING GROUP WINNERS ----------------------------------------------------------------------
			//if first team wins on points
		if ($scope.groupOutcome[0][1] > $scope.groupOutcome[1][1]){
				$scope[groupBracket].group1st = $scope.groupOutcome[0][0];
				$scope[groupBracket].group1stImg = "images/flags/" + $scope.groupOutcome[0][0] + ".png";
				console.log("Group Winner is" + $scope[groupBracket].group1st);
				if ($scope.groupOutcome[1][1] > $scope.groupOutcome[2][1]){
					$scope[groupBracket].group2nd = $scope.groupOutcome[1][0];
					$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[1][0] + ".png";
					console.log("Group 2nd is" + $scope[groupBracket].group2nd);
				}
				else{

					if ($scope.groupOutcome[1][2] > $scope.groupOutcome[2][2]){
						$scope[groupBracket].group2nd = $scope.groupOutcome[1][0];
						$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[1][0] + ".png";
						console.log("Group 2nd is" + $scope[groupBracket].group2nd);
					}
					else if($scope.groupOutcome[2][2] > $scope.groupOutcome[3][2]){
						$scope[groupBracket].group2nd = $scope.groupOutcome[2][0];
						$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[2][0] + ".png";
						console.log("Group 2nd is" + $scope[groupBracket].group2nd);
					}
					else if($scope.groupOutcome[3][2] > $scope.groupOutcome[1][2]){
						$scope[groupBracket].group2nd = $scope.groupOutcome[3][0];
						$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[3][0] + ".png";
						console.log("Group 2nd is" + $scope[groupBracket].group2nd);
					}
					//if points are equal, and goal differential is equal, find what game teams played against each other and determine that winner
					else if($scope.groupOutcome[1][2] == $scope.groupOutcome[2][2]){
					var whatGame = $scope.groupOutcome[1][0] + "," + $scope.groupOutcome[2][0];
					var whatGameReverse = $scope.groupOutcome[2][0] + "," + $scope.groupOutcome[1][0];
					
					// 	for (var k=1; k<7; k++){
					// 		console.log('game' + k);
					// 		if (whatGame == [game + k] || whatGameReverse == [game + k]){
								
					// 			if($scope.allGames['id' + k].winnerPick == $scope.allGames['id' + k].team1){
					// 			$scope[groupBracket].group1st = $scope.allGames['id' + k].team1;
					// 			$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames['id' + k].team1 + ".png";
					// 			$scope[groupBracket].group2nd = $scope.allGames['id' + k].team2;
					// 			$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames['id' + k].team2 + ".png";
					// 			console.log("1st: " + $scope[groupBracket].group1st + ". Second: " + $scope[groupBracket].group2nd);
					// 			}
					// 			else if($scope.allGames['id' + k].winnerPick == $scope.allGames['id' + k].team2){
								
					// 			$scope[groupBracket].group1st = $scope.allGames['id' + k].team2;
					// 			$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames['id' + k].team2 + ".png";
					// 			$scope[groupBracket].group2nd = $scope.allGames['id' + k].team1;
					// 			$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames['id' + k].team1 + ".png";
					// 			console.log("1st: " + $scope[groupBracket].group1st + ". Second: " + $scope[groupBracket].group2nd);
					// 			}
					// 			else{
					// 			console.log("cannot calculate");
								
					// 			}
							
					// 	}
					// }
					// }
					//check each game to see if strings are the same as game#, which is a string
					if (whatGame == game1 || whatGameReverse == game1){
						if($scope.allGames[id1].winnerPick == $scope.allGames[id1].team1){
							$scope[groupBracket].group2nd = $scope.allGames[id1].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id1].team1 + ".png";
						}
						else if($scope.allGames[id1].winnerPick == $scope.allGames[id1].team2){
							$scope[groupBracket].group2nd = $scope.allGames[id1].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id1].team2 + ".png";
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game2 || whatGameReverse == game2){
						if($scope.allGames[id2].winnerPick == $scope.allGames[id2].team1){
							$scope[groupBracket].group2nd = $scope.allGames[id2].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id2].team1 + ".png";
						}
						else if($scope.allGames[id2].winnerPick == $scope.allGames[id2].team2){
							$scope[groupBracket].group2nd = $scope.allGames[id2].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id2].team2 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game3 || whatGameReverse == game3){
						if($scope.allGames[id3].winnerPick == $scope.allGames[id3].team1){
							$scope[groupBracket].group2nd = $scope.allGames[id3].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id3].team1 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else if($scope.allGames[id3].winnerPick == $scope.allGames[id3].team2){
							$scope[groupBracket].group2nd = $scope.allGames[id3].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id3].team2 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game4 || whatGameReverse == game4){
						if($scope.allGames[id4].winnerPick == $scope.allGames[id4].team1){
							$scope[groupBracket].group2nd = $scope.allGames[id4].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id4].team1 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else if($scope.allGames[id4].winnerPick == $scope.allGames[id4].team2){
							$scope[groupBracket].group2nd = $scope.allGames[id4].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id4].team2 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game5 || whatGameReverse == game5){
						if($scope.allGames[id5].winnerPick == $scope.allGames[id5].team1){
							$scope[groupBracket].group2nd = $scope.allGames[id5].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id5].team1 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else if($scope.allGames[id5].winnerPick == $scope.allGames[id5].team2){
							$scope[groupBracket].group2nd = $scope.allGames[id5].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id5].team2 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game6 || whatGameReverse == game6){
						if($scope.allGames[id6].winnerPick == $scope.allGames[id6].team1){
							$scope[groupBracket].group2nd = $scope.allGames[id6].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id6].team1 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else if($scope.allGames[id6].winnerPick == $scope.allGames[id6].team2){
							$scope[groupBracket].group2nd = $scope.allGames[id6].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id6].team2 + ".png";
							console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
						else{
							console.log("cannot calculate");
						}
					}
				}
				else{
						$scope[groupBracket].group2nd = $scope.groupOutcome[2][0];
						$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[2][0] + ".png";
						console.log("Group 2nd is" + $scope[groupBracket].group2nd);
					}
				}
			}
			//first team and second team are tied for points, determine based on goals
		else {
				if ($scope.groupOutcome[0][2] > $scope.groupOutcome[1][2]){
					$scope[groupBracket].group1st = $scope.groupOutcome[0][0];
					$scope[groupBracket].group1stImg = "images/flags/" + $scope.groupOutcome[0][0] + ".png";
					console.log("Group Winner is" + $scope[groupBracket].group1st);
				
					if ($scope.groupOutcome[1][1] > $scope.groupOutcome[2][1]){
					$scope[groupBracket].group2nd = $scope.groupOutcome[1][0];
					$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[1][0] + ".png";
					console.log("Group 2nd is" + $scope[groupBracket].group2nd);
					}
					else{
					if ($scope.groupOutcome[1][2] > $scope.groupOutcome[2][2]){
						$scope[groupBracket].group2nd = $scope.groupOutcome[1][0];
						$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[1][0] + ".png";
						console.log("Group 2nd is" + $scope[groupBracket].group2nd);
					}
					else{
						$scope[groupBracket].group2nd = $scope.groupOutcome[2][0];
						$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[2][0] + ".png";
						console.log("Group 2nd is" + $scope[groupBracket].group2nd);
						}
					}
				}

				//if points are equal, and goal differential is equal, find what game teams played against each other and determine that winner
				else if($scope.groupOutcome[0][2] == $scope.groupOutcome[1][2]){
					var whatGame = $scope.groupOutcome[0][0] + "," + $scope.groupOutcome[1][0];
					var whatGameReverse = $scope.groupOutcome[1][0] + "," + $scope.groupOutcome[0][0];
					
				// 	for (var k=1; k<7; k++){
				// 		console.log('game' + k);
				// 		if (whatGame == [game + k] || whatGameReverse == [game + k]){
							
				// 			if($scope.allGames['id' + k].winnerPick == $scope.allGames['id' + k].team1){
				// 			$scope[groupBracket].group1st = $scope.allGames['id' + k].team1;
				// 			$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames['id' + k].team1 + ".png";
				// 			$scope[groupBracket].group2nd = $scope.allGames['id' + k].team2;
				// 			$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames['id' + k].team2 + ".png";
				// 			console.log("1st: " + $scope[groupBracket].group1st + ". Second: " + $scope[groupBracket].group2nd);
				// 			}
				// 			else if($scope.allGames['id' + k].winnerPick == $scope.allGames['id' + k].team2){
							
				// 			$scope[groupBracket].group1st = $scope.allGames['id' + k].team2;
				// 			$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames['id' + k].team2 + ".png";
				// 			$scope[groupBracket].group2nd = $scope.allGames['id' + k].team1;
				// 			$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames['id' + k].team1 + ".png";
				// 			console.log("1st: " + $scope[groupBracket].group1st + ". Second: " + $scope[groupBracket].group2nd);
				// 			}
				// 			else{
				// 			console.log("cannot calculate");
							
				// 			}
						
				// 	}
				// }
				// }
					//check each game to see if strings are the same as game#, which is a string
					if (whatGame == game1 || whatGameReverse == game1){
						if($scope.allGames[id1].winnerPick == $scope.allGames[id1].team1){
							$scope[groupBracket].group1st = $scope.allGames[id1].team1;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id1].team1 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id1].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id1].team2 + ".png";
						}
						else if($scope.allGames[id1].winnerPick == $scope.allGames[id1].team2){
							$scope[groupBracket].group1st = $scope.allGames[id1].team2;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id1].team2 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id1].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id1].team1 + ".png";
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game2 || whatGameReverse == game2){
						if($scope.allGames[id2].winnerPick == $scope.allGames[id2].team1){
							$scope[groupBracket].group1st = $scope.allGames[id2].team1;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id2].team1 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id2].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id2].team2 + ".png";
						}
						else if($scope.allGames[id2].winnerPick == $scope.allGames[id2].team2){
							$scope[groupBracket].group1st = $scope.allGames[id2].team2;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id2].team2 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id2].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id2].team1 + ".png";
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game3 || whatGameReverse == game3){
						if($scope.allGames[id3].winnerPick == $scope.allGames[id3].team1){
							$scope[groupBracket].group1st = $scope.allGames[id3].team1;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id3].team1 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id3].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id3].team2 + ".png";
						}
						else if($scope.allGames[id3].winnerPick == $scope.allGames[id3].team2){
							$scope[groupBracket].group1st = $scope.allGames[id3].team2;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id3].team2 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id3].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id3].team1 + ".png";
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game4 || whatGameReverse == game4){
						if($scope.allGames[id4].winnerPick == $scope.allGames[id4].team1){
							$scope[groupBracket].group1st = $scope.allGames[id4].team1;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id4].team1 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id4].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id4].team2 + ".png";
						}
						else if($scope.allGames[id4].winnerPick == $scope.allGames[id4].team2){
							$scope[groupBracket].group1st = $scope.allGames[id4].team2;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id4].team2 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id4].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id4].team1 + ".png";
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game5 || whatGameReverse == game5){
						if($scope.allGames[id5].winnerPick == $scope.allGames[id5].team1){
							$scope[groupBracket].group1st = $scope.allGames[id5].team1;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id5].team1 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id5].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id5].team2 + ".png";
							console.log("1st: " + $scope[groupBracket].group1st + ". Second: " + $scope[groupBracket].group2nd);
						}
						else if($scope.allGames[id5].winnerPick == $scope.allGames[id5].team2){
							$scope[groupBracket].group1st = $scope.allGames[id5].team2;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id5].team2 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id5].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id5].team1 + ".png";
							console.log("1st: " + $scope[groupBracket].group1st + ". Second: " + $scope[groupBracket].group2nd);
						}
						else{
							console.log("cannot calculate");
						}
					}
					else if (whatGame == game6 || whatGameReverse == game6){
						if($scope.allGames[id6].winnerPick == $scope.allGames[id6].team1){
							$scope[groupBracket].group1st = $scope.allGames[id6].team1;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id6].team1 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id6].team2;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id6].team2 + ".png";
						}
						else if($scope.allGames[id6].winnerPick == $scope.allGames[id6].team2){
							$scope[groupBracket].group1st = $scope.allGames[id6].team2;
							$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id6].team2 + ".png";
							$scope[groupBracket].group2nd = $scope.allGames[id6].team1;
							$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id6].team1 + ".png";
						}
						else{
							console.log("cannot calculate");
						}
					}
				}
				else{
					$scope[groupBracket].group1st = $scope.groupOutcome[1][0];
					$scope[groupBracket].group1stImg = "images/flags/" + $scope.groupOutcome[1][0] + ".png";
					$scope[groupBracket].group2nd = $scope.groupOutcome[0][0];
					$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[0][0] + ".png";
					console.log("Group Winner is" + $scope[groupBracket].group1st +". And 2nd: " + $scope[groupBracket].group2nd);
				}

		}
			
console.log($scope.groupA_bracket.group1st + "is the first place and " + $scope.groupA_bracket.group2nd + "is the second place");
// ---------END LOGIC FOR GROUP WINNERS ----------------------------------------------------------------------


	};


//INIATES CALCULATEGROUPWINNER()
	isAllGroupPicked = function(){
		
		//groupA
		if ($scope.allGames[0].gamePicked = true && $scope.allGames[1].gamePicked == true && $scope.allGames[16].gamePicked == true && $scope.allGames[17].gamePicked == true && 
			$scope.allGames[32].gamePicked == true && $scope.allGames[33].gamePicked == true){
			groupA_bracket.pickedAllGroup = true;
		//reset points for each team
			groupA_bracket.Brazil_pts = 0;
			groupA_bracket.Brazil_goals = 0;
			groupA_bracket.Croatia_pts = 0;
			groupA_bracket.Croatia_goals = 0;
			groupA_bracket.Cameroon_pts = 0;
			groupA_bracket.Cameroon_goals = 0;
			groupA_bracket.Mexico_pts = 0;
			groupA_bracket.Mexico_goals = 0;
		console.log("PICKED ALL GROUP A");
			calculateGroupWinners(0,1,16,17,32,33,"Brazil_pts", "Brazil_goals", "Croatia_pts", "Croatia_goals", "Mexico_pts","Mexico_goals","Cameroon_pts", "Cameroon_goals","groupA_bracket");
		}
	};
	


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
$scope.validateScore = function(id,bracket){
	var validScore = /^\d-\d$/.test($scope.allGames[id].score);
	//if tied, make sure user enters equal score
	if ($scope.allGames[id].tie == true && validScore == true){
		$scope.allGames[id].enterWinError = false;
		if($scope.allGames[id].score.charAt(0) != $scope.allGames[id].score.charAt(2)){
			$scope.allGames[id].scoreNotTied = true;
			$('#allGames'+ id).addClass("ng-invalid");
			$scope.allGames[id].gamePicked = false;
			//enterWinError is for when a winner is picked but user enters Tie Score
			$scope.allGames[id].enterWinError = false;
			[bracket].pickedAllGroup = false;

		}else if($scope.allGames[id].score.charAt(0) == $scope.allGames[id].score.charAt(2) && $scope.allGames[id].score != ""){
			$scope.allGames[id].tie = true;
			$scope.allGames[id].winnerPick = "  TIE";
			$scope.allGames[id].winnerPickImg = "images/flags/Tie.png";
			$scope.allGames[id].scoreNotTied = false;
			$scope.allGames[id].gamePicked = true;
			isAllGroupPicked();
		}
	} //if a winner is selected, make sure the score is not equal and make sure first number is great
	else if($scope.allGames[id].winnerPick == $scope.allGames[id].team1 || $scope.allGames[id].winnerPick == $scope.allGames[id].team2){
			$scope.allGames[id].scoreNotTied = false;
			
			if(validScore){
				if($scope.allGames[id].score.charAt(0) == $scope.allGames[id].score.charAt(2) || $scope.allGames[id].score.charAt(0) < $scope.allGames[id].score.charAt(2)){
					$scope.allGames[id].enterWinError = true;
					$('#allGames'+ id).addClass("ng-invalid");
					$scope.allGames[id].gamePicked = false;
					[bracket].pickedAllGroup = false;

				}else{
					$scope.allGames[id].enterWinError = false;
					$('#allGames'+ id).addClass("ng-valid");
					$scope.allGames[id].gamePicked = true;
					isAllGroupPicked();
				}
			}else{
				$('#allGames'+ id).addClass("ng-invalid");
				$scope.allGames[id].score = "";
				$scope.allGames[id].gamePicked = false;
				[bracket].pickedAllGroup = false;
			}

		}
		else{
			$scope.allGames[id].gamePicked = false;
			[bracket].pickedAllGroup = false;
		}
	
}
// HANDLE MOUSE CLICKS WHEN USER CHOOSES BRACKET --------------------------------
	$scope.calculate_game_winner = function(event,id,team1,team2){
		
		$('#allGames'+ id).removeClass("ng-invalid");
		$('.' + id + "_winner").addClass('winnerPick'); //adds white square for Picked Winner Column
		$scope.allGames[id].displayInputScore = true; //reveals score input box

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
				$scope.allGames[id].score = "";
				$scope.allGames[id].enterWinError = false;
				$scope.allGames[id].scoreNotTied = false;
				$scope.allGames[id].tie = false;
				$scope.allGames[id].winnerPick = $scope.allGames[id].team1;
				$scope.allGames[id].winnerPickKey = $scope.allGames[id].team1_key;
				$scope.allGames[id].loserPickKey = $scope.allGames[id].team2_key;
				$scope.allGames[id].winnerPickImg = "images/flags/" + $scope.allGames[id].team1 + ".png";
			
			}	//IF SECOND TEAM WINS
			else{
				$scope.allGames[id].score = "";
				$scope.allGames[id].enterWinError = false;
				$scope.allGames[id].scoreNotTied = false;
				$scope.allGames[id].tie = false;
				$scope.allGames[id].winnerPick = $scope.allGames[id].team2;
				$scope.allGames[id].winnerPickKey = $scope.allGames[id].team2_key;
				$scope.allGames[id].loserPickKey = $scope.allGames[id].team1_key;
				$scope.allGames[id].winnerPickImg = "images/flags/" + $scope.allGames[id].team2 + ".png";
				
			}
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
