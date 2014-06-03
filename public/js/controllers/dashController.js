angular.module('dashCtrl', []).controller('dashController', function($scope, dashboard, $http) {
$scope.scoreNotTiedErrorMsg = "Score Not Tied!";
$scope.enterWinErrorMsg = "Invalid Score";
var allData = {};
$scope.allData = allData;


//INITIALIZE ALL VARIABLES
//Constructor for bracket object
function Bracket(group1st,group2nd){
this.pickedAllGroup = false;
this.group1stImg = null;
this.group1st = group1st;
this.group2ndImg = null;
this.group2nd = group2nd;
}
var groupA_bracket = new Bracket("A1","A2");
$scope.groupA_bracket = groupA_bracket;
var groupB_bracket = new Bracket("B1","B2");
$scope.groupB_bracket = groupB_bracket;
var groupC_bracket = new Bracket("C1","C2");
$scope.groupC_bracket = groupC_bracket;
var groupD_bracket = new Bracket("D1","D2");
$scope.groupD_bracket = groupD_bracket;
var groupE_bracket = new Bracket("E1","E2");
$scope.groupE_bracket = groupE_bracket;
var groupF_bracket = new Bracket("F1","F2");
$scope.groupF_bracket = groupF_bracket;
var groupG_bracket = new Bracket("G1","G2");
$scope.groupG_bracket = groupG_bracket;
var groupH_bracket = new Bracket("H1","H2");
$scope.groupH_bracket = groupH_bracket;


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
{id: 13, team1: "Ghana", team1_key: "GHA", team2: "USA", team2_key: "USA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
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
{id: 29, team1: "USA", team1_key: "USA", team2: "Portugal", team2_key: "POR", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 30, team1: "Belgium", team1_key: "BEL", team2: "Russia", team2_key: "RUS", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 31, team1: "South Korea", team1_key: "KOR", team2: "Algeria", team2_key: "ALG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 32, team1: "Cameroon", team1_key: "CMR", team2: "Brazil", team2_key: "BRA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 33, team1: "Croatia", team1_key: "CRO", team2: "Mexico", team2_key: "MEX", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 34, team1: "Australia", team1_key: "AUS", team2: "Spain", team2_key: "ESP", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 35, team1: "Netherlands", team1_key: "NED", team2: "Chile", team2_key: "CHI", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 36, team1: "Japan", team1_key: "JPN", team2: "Colombia", team2_key: "COL", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 37, team1: "Greece", team1_key: "GRE", team2: "Ivory Coast", team2_key: "CIV", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 38, team1: "Italy", team1_key: "ITA", team2: "Uruguay", team2_key: "URU", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 39, team1: "Costa Rica", team1_key: "CRC", team2: "England", team2_key: "ENG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 40, team1: "Honduras", team1_key: "HON", team2: "Switzerland", team2_key: "SUI", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 41, team1: "Ecuador", team1_key: "ECU", team2: "France", team2_key: "FRA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 42, team1: "Nigeria", team1_key: "NGA", team2: "Argentina", team2_key: "ARG", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 43, team1: "Bosnia", team1_key: "BIH", team2: "Iran", team2_key: "IRN", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 44, team1: "USA", team1_key: "USA", team2: "Germany", team2_key: "GER", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 45, team1: "Portugal", team1_key: "POR", team2: "Ghana", team2_key: "GHA", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 46, team1: "South Korea", team1_key: "KOR", team2: "Belgium", team2_key: "BEL", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 47, team1: "Algeria", team1_key: "ALG", team2: "Russia", team2_key: "RUS", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
//Tournament Round 1
{id: 48, team1: groupA_bracket.group1st, team2: groupB_bracket.group2nd, score: "", tie: false, winnerPick: "A1 B2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 49, team1: groupC_bracket.group1st, team2: groupD_bracket.group2nd, score: "", tie: false, winnerPick: "C1 D2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 50, team1: groupB_bracket.group1st, team2: groupA_bracket.group2nd, score: "", tie: false, winnerPick: "B1 A2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 51, team1: groupD_bracket.group1st, team2: groupC_bracket.group2nd, score: "", tie: false, winnerPick: "D1 C2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 52, team1: groupE_bracket.group1st, team2: groupF_bracket.group2nd, score: "", tie: false, winnerPick: "E1 F2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 53, team1: groupG_bracket.group1st, team2: groupH_bracket.group2nd, score: "", tie: false, winnerPick: "G1 H2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 54, team1: groupF_bracket.group1st, team2: groupE_bracket.group2nd, score: "", tie: false, winnerPick: "F1 E2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 55, team1: groupH_bracket.group1st, team2: groupG_bracket.group2nd, score: "", tie: false, winnerPick: "H1 G2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},


];
// Tournament Round 2
$scope.allGames.push(
{id: 56, team1: $scope.allGames[48].winnerPick, team2: $scope.allGames[49].winnerPick, score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 57, team1: $scope.allGames[52].winnerPick, team2: $scope.allGames[53].winnerPick, score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 58, team1: $scope.allGames[50].winnerPick, team2: $scope.allGames[51].winnerPick, score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 59, team1: $scope.allGames[54].winnerPick, team2: $scope.allGames[55].winnerPick, score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false});
// Tournament Round 3
$scope.allGames.push(
{id: 60, team1: $scope.allGames[56].winnerPick, team2: $scope.allGames[57].winnerPick, score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 61, team1: $scope.allGames[58].winnerPick, team2: $scope.allGames[59].winnerPick, score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false});
// Tournament FINALS
$scope.allGames.push(
{id: 62, team1: $scope.allGames[60].loserPick, team2: $scope.allGames[61].loserPick, score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
{id: 63, team1: $scope.allGames[60].winnerPick, team2: $scope.allGames[61].winnerPick, score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false}
);





calculateGroupWinners = function(id1,id2,id3,id4,id5,id6,team1_pts,team1_goals,team2_pts,team2_goals, team3_pts,team3_goals, team4_pts, team4_goals,groupBracket){
// console.log(id1 + "," + id2 + "," + id3 + "," + id4 + "," + id5 + "," + id6 + "," + team1_pts + "," + team1_goals + "," + team2_pts + "," + team2_goals + "," + team3_pts + "," + team3_goals + "," + team4_pts + "," + team4_goals + ","+ groupBracket);
var game1 = $scope.allGames[id1].team1 + "," + $scope.allGames[id1].team2;
var game2 = $scope.allGames[id2].team1 + "," + $scope.allGames[id2].team2;
var game3 = $scope.allGames[id3].team1 + "," + $scope.allGames[id3].team2;
var game4 = $scope.allGames[id4].team1 + "," + $scope.allGames[id4].team2;
var game5 = $scope.allGames[id5].team1 + "," + $scope.allGames[id5].team2;
var game6 = $scope.allGames[id6].team1 + "," + $scope.allGames[id6].team2;

//game 1 team1 vs team2
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

//game 2 team3 vs team4
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

//game3 team1 vs team3
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

//game4 team4 vs team2
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
// $scope[groupBracket].group1st = null;
// $scope[groupBracket].group1stImg = null;
// $scope[groupBracket].group2nd = null;
// $scope[groupBracket].group2ndImg = null;

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


// check each game to see if strings are the same as game#, which is a string
gamePlayedAgainst = function(num,id){

for (var k=0; k<7; k++){
if (whatGame == num || whatGameReverse == num){
if($scope.allGames[id].winnerPick == $scope.allGames[id].team1){
$scope[groupBracket].group1st = $scope.allGames[id].team1;
$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id].team1 + ".png";
$scope[groupBracket].group2nd = $scope.allGames[id].team2;
$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id].team2 + ".png";
console.log("success");
}
else if($scope.allGames[id].winnerPick == $scope.allGames[id].team2){
$scope[groupBracket].group1st = $scope.allGames[id].team2;
$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id].team2 + ".png";
$scope[groupBracket].group2nd = $scope.allGames[id].team1;
$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id].team1 + ".png";
console.log("success");
}else{
console.log("cannot calculate");
}
}
}
}
gamePlayedAgainst(game1,id1);
gamePlayedAgainst(game2,id2);
gamePlayedAgainst(game3,id3);
gamePlayedAgainst(game4,id4);
gamePlayedAgainst(game5,id5);
gamePlayedAgainst(game6,id5);
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

gamePlayedAgainst = function(num,id){

for (var k=0; k<7; k++){
if (whatGame == num || whatGameReverse == num){
if($scope.allGames[id].winnerPick == $scope.allGames[id].team1){
$scope[groupBracket].group1st = $scope.allGames[id].team1;
$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id].team1 + ".png";
$scope[groupBracket].group2nd = $scope.allGames[id].team2;
$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id].team2 + ".png";
console.log("success");
}
else if($scope.allGames[id].winnerPick == $scope.allGames[id].team2){
$scope[groupBracket].group1st = $scope.allGames[id].team2;
$scope[groupBracket].group1stImg = "images/flags/" + $scope.allGames[id].team2 + ".png";
$scope[groupBracket].group2nd = $scope.allGames[id].team1;
$scope[groupBracket].group2ndImg = "images/flags/" + $scope.allGames[id].team1 + ".png";
console.log("success");
}else{
console.log("cannot calculate");
}
}
}
}
gamePlayedAgainst(game1,id1);
gamePlayedAgainst(game2,id2);
gamePlayedAgainst(game3,id3);
gamePlayedAgainst(game4,id4);
gamePlayedAgainst(game5,id5);
gamePlayedAgainst(game6,id5);
}
else{
$scope[groupBracket].group1st = $scope.groupOutcome[1][0];
$scope[groupBracket].group1stImg = "images/flags/" + $scope.groupOutcome[1][0] + ".png";
$scope[groupBracket].group2nd = $scope.groupOutcome[0][0];
$scope[groupBracket].group2ndImg = "images/flags/" + $scope.groupOutcome[0][0] + ".png";
console.log("Group Winner is" + $scope[groupBracket].group1st +". And 2nd: " + $scope[groupBracket].group2nd);
}

}


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
if ($scope.allGames[2].gamePicked = true && $scope.allGames[3].gamePicked == true && $scope.allGames[18].gamePicked == true && $scope.allGames[19].gamePicked == true &&
$scope.allGames[34].gamePicked == true && $scope.allGames[35].gamePicked == true){
groupB_bracket.pickedAllGroup = true;
//reset points for each team
groupB_bracket.Spain_pts = 0;
groupB_bracket.Spain_goals = 0;
groupB_bracket.Netherlands_pts = 0;
groupB_bracket.Netherlands_goals = 0;
groupB_bracket.Chile_pts = 0;
groupB_bracket.Chile_goals = 0;
groupB_bracket.Australia_pts = 0;
groupB_bracket.Australia_goals = 0;
console.log("PICKED ALL GROUP B");
calculateGroupWinners(2,3,18,19,34,35,"Spain_pts", "Spain_goals", "Netherlands_pts", "Netherlands_goals", "Chile_pts","Chile_goals","Australia_pts", "Australia_goals","groupB_bracket");
}
if ($scope.allGames[4].gamePicked = true && $scope.allGames[5].gamePicked == true && $scope.allGames[20].gamePicked == true && $scope.allGames[21].gamePicked == true &&
$scope.allGames[36].gamePicked == true && $scope.allGames[37].gamePicked == true){
groupC_bracket.pickedAllGroup = true;
//reset points for each team
groupC_bracket.Colombia_pts = 0;
groupC_bracket.Colombia_goals = 0;
groupC_bracket.Greece_pts = 0;
groupC_bracket.Greece_goals = 0;
groupC_bracket.IvoryCoast_pts = 0;
groupC_bracket.IvoryCoast_goals = 0;
groupC_bracket.Japan_pts = 0;
groupC_bracket.Japan_goals = 0;
console.log("PICKED ALL GROUP C");
calculateGroupWinners(4,5,20,21,36,37,"Colombia_pts", "Colombia_goals", "Greece_pts", "Greece_goals", "IvoryCoast_pts","IvoryCoast_goals","Japan_pts", "Japan_goals","groupC_bracket");
}
if ($scope.allGames[6].gamePicked = true && $scope.allGames[7].gamePicked == true && $scope.allGames[22].gamePicked == true && $scope.allGames[23].gamePicked == true &&
$scope.allGames[38].gamePicked == true && $scope.allGames[39].gamePicked == true){
groupD_bracket.pickedAllGroup = true;
//reset points for each team
groupD_bracket.Uruguay_pts = 0;
groupD_bracket.Uruguay_goals = 0;
groupD_bracket.CostaRica_pts = 0;
groupD_bracket.CostaRica_goals = 0;
groupD_bracket.England_pts = 0;
groupD_bracket.England_goals = 0;
groupD_bracket.Italy_pts = 0;
groupD_bracket.Italy_goals = 0;
console.log("PICKED ALL GROUP D");
calculateGroupWinners(6,7,22,23,38,39,"Uruguay_pts", "Uruguay_goals", "CostaRica_pts", "CostaRica_goals", "England_pts","England_goals","Italy_pts", "Italy_goals","groupD_bracket");
}
if ($scope.allGames[8].gamePicked = true && $scope.allGames[9].gamePicked == true && $scope.allGames[24].gamePicked == true && $scope.allGames[25].gamePicked == true &&
$scope.allGames[40].gamePicked == true && $scope.allGames[41].gamePicked == true){
groupE_bracket.pickedAllGroup = true;
//reset points for each team
groupE_bracket.Switzerland_pts = 0;
groupE_bracket.Switzerland_goals = 0;
groupE_bracket.Ecuador_pts = 0;
groupE_bracket.Ecuador_goals = 0;
groupE_bracket.France_pts = 0;
groupE_bracket.France_goals = 0;
groupE_bracket.Honduras_pts = 0;
groupE_bracket.Honduras_goals = 0;
console.log("PICKED ALL GROUP E");
calculateGroupWinners(8,9,24,25,40,41,"Switzerland_pts", "Switzerland_goals", "Ecuador_pts", "Ecuador_goals", "France_pts","France_goals","Honduras_pts", "Honduras_goals","groupE_bracket");
}
if ($scope.allGames[10].gamePicked = true && $scope.allGames[11].gamePicked == true && $scope.allGames[26].gamePicked == true && $scope.allGames[27].gamePicked == true &&
$scope.allGames[42].gamePicked == true && $scope.allGames[43].gamePicked == true){
groupF_bracket.pickedAllGroup = true;
//reset points for each team
groupF_bracket.Argentina_pts = 0;
groupF_bracket.Argentina_goals = 0;
groupF_bracket.Bosnia_pts = 0;
groupF_bracket.Bosnia_goals = 0;
groupF_bracket.Iran_pts = 0;
groupF_bracket.Iran_goals = 0;
groupF_bracket.Nigeria_pts = 0;
groupF_bracket.Nigeria_goals = 0;
console.log("PICKED ALL GROUP F");
calculateGroupWinners(10,11,26,27,42,43,"Argentina_pts", "Argentina_goals", "Bosnia_pts", "Bosnia_goals", "Iran_pts","Iran_goals","Nigeria_pts", "Nigeria_goals","groupF_bracket");
}
if ($scope.allGames[12].gamePicked = true && $scope.allGames[13].gamePicked == true && $scope.allGames[28].gamePicked == true && $scope.allGames[29].gamePicked == true &&
$scope.allGames[44].gamePicked == true && $scope.allGames[45].gamePicked == true){
groupG_bracket.pickedAllGroup = true;
//reset points for each team
groupG_bracket.Germany_pts = 0;
groupG_bracket.Germany_goals = 0;
groupG_bracket.Portugal_pts = 0;
groupG_bracket.Portugal_goals = 0;
groupG_bracket.Ghana_pts = 0;
groupG_bracket.Ghana_goals = 0;
groupG_bracket.USA_pts = 0;
groupG_bracket.USA_goals = 0;
console.log("PICKED ALL GROUP G");
calculateGroupWinners(12,13,28,29,44,45,"Germany_pts", "Germany_goals", "Portugal_pts", "Portugal_goals", "Ghana_pts","Ghana_goals","USA_pts", "USA_goals","groupG_bracket");
}
if ($scope.allGames[14].gamePicked = true && $scope.allGames[15].gamePicked == true && $scope.allGames[30].gamePicked == true && $scope.allGames[31].gamePicked == true &&
$scope.allGames[46].gamePicked == true && $scope.allGames[47].gamePicked == true){
groupH_bracket.pickedAllGroup = true;
//reset points for each team
groupH_bracket.Belgium_pts = 0;
groupH_bracket.Belgium_goals = 0;
groupH_bracket.Algeria_pts = 0;
groupH_bracket.Algeria_goals = 0;
groupH_bracket.Russia_pts = 0;
groupH_bracket.Russia_goals = 0;
groupH_bracket.SouthKorea_pts = 0;
groupH_bracket.SouthKorea_goals = 0;
console.log("PICKED ALL GROUP H");
calculateGroupWinners(14,15,30,31,46,47,"Belgium_pts", "Belgium_goals", "Algeria_pts", "Algeria_goals", "Russia_pts","Russia_goals","SouthKorea_pts", "SouthKorea_goals","groupH_bracket");
}
if(groupA_bracket.pickedAllGroup == true && groupB_bracket.pickedAllGroup == true && groupC_bracket.pickedAllGroup == true && groupD_bracket.pickedAllGroup == true
&& groupE_bracket.pickedAllGroup == true && groupF_bracket.pickedAllGroup == true && groupG_bracket.pickedAllGroup == true && groupH_bracket.pickedAllGroup == true){
$scope.pickedAllGroups = true;
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
// allData["groupA_game1"] = data.games[0];
// // console.log(allData);
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
$scope.allGames[id].winnerPick = " TIE";
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
$scope.allGames[id].winnerPick = " TIE";
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


// function AccordionDemoCtrl($scope) {
// $scope.oneAtATime = true;

// $scope.items = ['Item 1', 'Item 2', 'Item 3'];

// $scope.addItem = function() {
// var newItemNo = $scope.items.length + 1;
// $scope.items.push('Item ' + newItemNo);
// };

// }

//HANDLE ALL TOURNAMENT ROUND OF 16 BELOW -------------------------------------------

$scope.advanceWinners = function(event,id){
// if($scope.pickedAllGroups){
$scope.allGames[id].winnerPick = event.target.attributes.data.value;
$scope.allGames[id].winnerPickImg = "images/flags/" + event.target.attributes.data.value + ".png";


};




// $scope.submitBracket = function(item, event){
// 	console.log("submitting form");
// 	var jsonData = '{"userEmail" : "darwood@mail.com","brackets" :' + JSON.stringify($scope.allGames) + '}';
// 	var testJSON = {"Hello": {"id": "file", "value": "WTF"}};
// 	console.log(jsonData);
// 	var responsePromise = $http.post("/api/brackets", jsonData, {});
// 	responsePromise.success(function(dataFromServer,status,headers,config){
// 	console.log(dataFromServer);
// });
// responsePromise.error(function(data,status,headers,config){
// 	console.log(data);
// 	});

// }


$scope.createBracket = function() {
var jsonData = JSON.stringify($scope.allGames);
var winners = [{"A1":groupA_bracket.group1st,"A2":groupA_bracket.group2nd,"B1":groupB_bracket.group1st,"B2":groupB_bracket.group2nd,
					"C1":groupC_bracket.group1st,"C2":groupC_bracket.group1st,"D1":groupD_bracket.group2nd,"D2":groupD_bracket.group2nd,
					"E1":groupE_bracket.group1st,"E2":groupE_bracket.group2nd,"F1":groupF_bracket.group1st,"F2":groupF_bracket.group2nd,
					"G1":groupG_bracket.group1st,"G2":groupG_bracket.group2nd,"H1":groupH_bracket.group1st,"H2":groupH_bracket.group2nd}];
var jsonWinnersData = JSON.stringify(winners);
console.log("In Controller-> jsonData = " + JSON.stringify(jsonData)); //**TEST**
//Is jsonData shown as expected?    


var headers = {'Content-Type':'application/json'};

$http.post('/api/brackets', jsonData, { headers: headers })

    .success(function(data, status, headers, config) {
    $scope.brackets = data;
    console.log("Status: " + status);
    console.log("Data: " + data);
    console.log("Config: " + JSON.stringify(config));
    $location.url('views/leaderboard.html');
    //$location.path('/');                        
  })

  .error(function(data) {
    console.log('Error: ' + data);
    });

$http.post('/api/winners', jsonWinnersData, { headers: headers })

    .success(function(data, status, headers, config) {
    $scope.winners = data;
    console.log("Status: " + status);
    console.log("Data: " + data);
    console.log("Config: " + JSON.stringify(config));
    $location.url('views/leaderboard.html');
    //$location.path('/');                        
  })

  .error(function(data) {
    console.log('Error: ' + data);
    });
}

});