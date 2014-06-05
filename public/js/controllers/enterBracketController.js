angular.module('enterBracketCtrl', []).controller('enterBracketController', function($scope, dashboard, $http, $modal, $log) {

function Bracket(group1st,group2nd,exception){
this.pickedAllGroup = false;
this.group1stImg = null;
this.group1st = group1st;
this.group2ndImg = null;
this.group2nd = group2nd;
this.exception = exception;
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
{id: 8, team1: "Switzerland", team1_key: "SUI", team2: "Ecuador", team2_key: "ECU", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
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
{id: 22, team1: "Uruguay", team1_key: "URU", team2: "England", team2_key: "ENGLAND", score: "", tie: false, winnerPick: "", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false},
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
{id: 55, team1: groupH_bracket.group1st, team2: groupG_bracket.group2nd, score: "", tie: false, winnerPick: "H1 G2", winnerPickImg: "", winnerPickKey: "", loserPickKey: "", enterWinError: false, scoreNotTied: false, gamePicked: false, displayInputScore: false}
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




// $scope.items = ['item1', 'item2', 'item3'];

$scope.open = function () {

var modalInstance = $modal.open({
	templateUrl: '/views/modal.html',
	controller: ModalInstanceCtrl,
	resolve: {
	    items: function () {
	    	return $scope.items;
	    }
	}
});

	modalInstance.result.then(function (selectedItem) {
	  $scope.selected = selectedItem;
	  $(".btn").remove();
	});
};

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}





//INIATES CALCULATEGROUPWINNER()
isAllGroupPicked = function(id){
//groupA
if(id == 0 || id == 1 || id == 16 || id == 17 || id == 32 || id == 33){
	if ($scope.allGames[0].gamePicked == true && $scope.allGames[1].gamePicked == true && $scope.allGames[16].gamePicked == true && $scope.allGames[17].gamePicked == true &&
		$scope.allGames[32].gamePicked == true && $scope.allGames[33].gamePicked == true){
		groupA_bracket.pickedAllGroup = true;
		//reset points for each team
		groupA_bracket.Brazil_pts = 0;
		groupA_bracket.Croatia_pts = 0;
		groupA_bracket.Cameroon_pts = 0;
		groupA_bracket.Mexico_pts = 0;
		console.log("PICKED ALL GROUP A");
		calculateGroupWinners(0,1,16,17,32,33,"Brazil_pts", "Croatia_pts", "Mexico_pts","Cameroon_pts","groupA_bracket");
	}
}
if(id == 2 || id == 3 || id == 18 || id == 19 || id == 34 || id == 35){
	if ($scope.allGames[2].gamePicked == true && $scope.allGames[3].gamePicked == true && $scope.allGames[18].gamePicked == true && $scope.allGames[19].gamePicked == true &&
		$scope.allGames[34].gamePicked == true && $scope.allGames[35].gamePicked == true){
		groupB_bracket.pickedAllGroup = true;
		//reset points for each team
		groupB_bracket.Spain_pts = 0;
		groupB_bracket.Netherlands_pts = 0;
		groupB_bracket.Chile_pts = 0;
		groupB_bracket.Australia_pts = 0;
		console.log("PICKED ALL GROUP B");
		calculateGroupWinners(2,3,18,19,34,35,"Spain_pts", "Netherlands_pts", "Chile_pts","Australia_pts","groupB_bracket");
	}
}
if(id == 4 || id == 5 || id == 20 || id == 21 || id == 36 || id == 37){
	if ($scope.allGames[4].gamePicked == true && $scope.allGames[5].gamePicked == true && $scope.allGames[20].gamePicked == true && $scope.allGames[21].gamePicked == true &&
		$scope.allGames[36].gamePicked == true && $scope.allGames[37].gamePicked == true){
		groupC_bracket.pickedAllGroup = true;
		//reset points for each team
		groupC_bracket.Colombia_pts = 0;
		groupC_bracket.Greece_pts = 0;
		groupC_bracket.IvoryCoast_pts = 0;
		groupC_bracket.Japan_pts = 0;
		console.log("PICKED ALL GROUP C");
		calculateGroupWinners(4,5,20,21,36,37,"Colombia_pts","Greece_pts","IvoryCoast_pts","Japan_pts","groupC_bracket");
	}
}
if(id == 6 || id == 7 || id == 22 || id == 23 || id == 38 || id == 39){
	if ($scope.allGames[6].gamePicked == true && $scope.allGames[7].gamePicked == true && $scope.allGames[22].gamePicked == true && $scope.allGames[23].gamePicked == true &&
		$scope.allGames[38].gamePicked == true && $scope.allGames[39].gamePicked == true){
		groupD_bracket.pickedAllGroup = true;
		//reset points for each team
		groupD_bracket.Uruguay_pts = 0;
		groupD_bracket.CostaRica_pts = 0;
		groupD_bracket.England_pts = 0;
		groupD_bracket.Italy_pts = 0;
		console.log("PICKED ALL GROUP D");
		calculateGroupWinners(6,7,22,23,38,39,"Uruguay_pts","CostaRica_pts","England_pts","Italy_pts","groupD_bracket");
	}
}
if(id == 8 || id == 9 || id == 24 || id == 25 || id == 40 || id == 41){
	if ($scope.allGames[8].gamePicked == true && $scope.allGames[9].gamePicked == true && $scope.allGames[24].gamePicked == true && $scope.allGames[25].gamePicked == true &&
		$scope.allGames[40].gamePicked == true && $scope.allGames[41].gamePicked == true){
		groupE_bracket.pickedAllGroup = true;
		//reset points for each team
		groupE_bracket.Switzerland_pts = 0;
		groupE_bracket.Ecuador_pts = 0;
		groupE_bracket.France_pts = 0;
		groupE_bracket.Honduras_pts = 0;
		console.log("PICKED ALL GROUP E");
		calculateGroupWinners(8,9,24,25,40,41,"Switzerland_pts","Ecuador_pts","France_pts","Honduras_pts","groupE_bracket");
	}
}
if(id == 10 || id == 11 || id == 26 || id == 27 || id == 42 || id == 43){
	if ($scope.allGames[10].gamePicked == true && $scope.allGames[11].gamePicked == true && $scope.allGames[26].gamePicked == true && $scope.allGames[27].gamePicked == true &&
		$scope.allGames[42].gamePicked == true && $scope.allGames[43].gamePicked == true){
		groupF_bracket.pickedAllGroup = true;
		//reset points for each team
		groupF_bracket.Argentina_pts = 0;
		groupF_bracket.Bosnia_pts = 0;
		groupF_bracket.Iran_pts = 0;
		groupF_bracket.Nigeria_pts = 0;
		console.log("PICKED ALL GROUP F");
		calculateGroupWinners(10,11,26,27,42,43,"Argentina_pts","Bosnia_pts","Iran_pts","Nigeria_pts","groupF_bracket");
	}
}
if(id == 12 || id == 13 || id == 28 || id == 29 || id == 44 || id == 45){
	if ($scope.allGames[12].gamePicked == true && $scope.allGames[13].gamePicked == true && $scope.allGames[28].gamePicked == true && $scope.allGames[29].gamePicked == true &&
		$scope.allGames[44].gamePicked == true && $scope.allGames[45].gamePicked == true){
		groupG_bracket.pickedAllGroup = true;
		//reset points for each team
		groupG_bracket.Germany_pts = 0;
		groupG_bracket.Portugal_pts = 0;
		groupG_bracket.Ghana_pts = 0;
		groupG_bracket.USA_pts = 0;
		console.log("PICKED ALL GROUP G");
		calculateGroupWinners(12,13,28,29,44,45,"Germany_pts","Portugal_pts","Ghana_pts","USA_pts","groupG_bracket");
	}
}
if(id == 14 || id == 15 || id == 30 || id == 31 || id == 46 || id == 47){
	if ($scope.allGames[14].gamePicked == true && $scope.allGames[15].gamePicked == true && $scope.allGames[30].gamePicked == true && $scope.allGames[31].gamePicked == true &&
		$scope.allGames[46].gamePicked == true && $scope.allGames[47].gamePicked == true){
		groupH_bracket.pickedAllGroup = true;
		//reset points for each team
		groupH_bracket.Belgium_pts = 0;
		groupH_bracket.Algeria_pts = 0;
		groupH_bracket.Russia_pts = 0;
		groupH_bracket.SouthKorea_pts = 0;
		console.log("PICKED ALL GROUP H");
		calculateGroupWinners(14,15,30,31,46,47,"Belgium_pts","Algeria_pts","Russia_pts","SouthKorea_pts","groupH_bracket");
	}
}
	if(groupA_bracket.pickedAllGroup == true && groupB_bracket.pickedAllGroup == true && groupC_bracket.pickedAllGroup == true && groupD_bracket.pickedAllGroup == true
		&& groupE_bracket.pickedAllGroup == true && groupF_bracket.pickedAllGroup == true && groupG_bracket.pickedAllGroup == true && groupH_bracket.pickedAllGroup == true){
		$scope.pickedAllGroups = true;
	}

};


calculateGroupWinners = function(id1,id2,id3,id4,id5,id6,team1_pts,team2_pts,team3_pts,team4_pts,groupBracket){
	//reset vars
	$scope[groupBracket].group1st = null;
	$scope[groupBracket].group1stImg = null;
	$scope[groupBracket].group2nd = null;
	$scope[groupBracket].group2ndImg = null;
	$scope[groupBracket].exception1 = false;
	$scope[groupBracket].exception2 = false;
	$scope.groupOutcome = [];
	//game 1 team1 vs team2
	if ($scope.allGames[id1].winnerPick == $scope.allGames[id1].team1 ){
	$scope[groupBracket][team1_pts] += 3;
	}	
	else if($scope.allGames[id1].winnerPick == $scope.allGames[id1].team2){
	$scope[groupBracket][team2_pts] += 3;
	}else{
	$scope[groupBracket][team1_pts] += 1;
	$scope[groupBracket][team2_pts] += 1;
	}
	//game 2 team3 vs team4
	if ($scope.allGames[id2].winnerPick == $scope.allGames[id2].team1 ){
	$scope[groupBracket][team3_pts] += 3;
	}	
	else if($scope.allGames[id2].winnerPick == $scope.allGames[id2].team2){
	$scope[groupBracket][team4_pts] += 3;
	}else{
	$scope[groupBracket][team3_pts] += 1;
	$scope[groupBracket][team4_pts] += 1;
	}
	//game3 team1 vs team3
	if ($scope.allGames[id3].winnerPick == $scope.allGames[id3].team1 ){
	$scope[groupBracket][team1_pts] += 3;
	}	
	else if($scope.allGames[id3].winnerPick == $scope.allGames[id3].team2){
	$scope[groupBracket][team3_pts] += 3;
	}else{
	$scope[groupBracket][team1_pts] += 1;
	$scope[groupBracket][team3_pts] += 1;
	}
	//game4 team4 vs team2
	if ($scope.allGames[id4].winnerPick == $scope.allGames[id4].team1 ){
	$scope[groupBracket][team4_pts] += 3;
	}	
	else if($scope.allGames[id4].winnerPick == $scope.allGames[id4].team2){
	$scope[groupBracket][team2_pts] += 3;
	}else{
	$scope[groupBracket][team2_pts] += 1;
	$scope[groupBracket][team4_pts] += 1;
	}
	//game5 team4 vs team1
	if ($scope.allGames[id5].winnerPick == $scope.allGames[id5].team1 ){
	$scope[groupBracket][team4_pts] += 3;
	}	
	else if($scope.allGames[id5].winnerPick == $scope.allGames[id5].team2){
	$scope[groupBracket][team1_pts] += 3;
	}else{
	$scope[groupBracket][team1_pts] += 1;
	$scope[groupBracket][team4_pts] += 1;
	}
	//game6 team2 vs team3
	if ($scope.allGames[id6].winnerPick == $scope.allGames[id6].team1 ){
	$scope[groupBracket][team2_pts] += 3;
	}	
	else if($scope.allGames[id6].winnerPick == $scope.allGames[id6].team2){
	$scope[groupBracket][team3_pts] += 3;
	}else{
	$scope[groupBracket][team2_pts] += 1;
	$scope[groupBracket][team3_pts] += 1;
	}
	//sort according to points

	$scope.groupOutcome = [
		[$scope.allGames[id1].team1, $scope[groupBracket][team1_pts]],
		[$scope.allGames[id1].team2, $scope[groupBracket][team2_pts]],
		[$scope.allGames[id2].team1, $scope[groupBracket][team3_pts]],
		[$scope.allGames[id2].team2, $scope[groupBracket][team4_pts]]
		];
	$scope.groupOutcome.sort(function(a,b){return a[1] < b[1]});
	console.log($scope.groupOutcome);
	//create array of possible winners
	 $scope[groupBracket].possibleWinners = [];
	
	//DETERMINE GROUP WINNERS -------------------------

	//If a team has the most points, group1st, remove it from groupOutcome
	if ($scope.groupOutcome[0][1] > $scope.groupOutcome[1][1]){
		$scope[groupBracket].group1st = $scope.groupOutcome[0][0];
		$scope[groupBracket].group1stImg = "images/flags/" + $scope.groupOutcome[0][0] + ".png";
		$scope.groupOutcome.shift();
		console.log("Group Winner is" + $scope[groupBracket].group1st);
		//if the 2nd place team has more than 3rd place, they are group2nd
		if ($scope.groupOutcome[0][1] > $scope.groupOutcome[1][1]){
		$scope[groupBracket].group2nd = $scope.groupOutcome[0][0];
		$scope[groupBracket].group2ndImg = "images/flags/" + $scope[groupBracket].group2nd + ".png";
		console.log("Group 2nd is" + $scope[groupBracket].group2nd);
		}
		else{
		//if there is a tie for 2nd, raise exception
		$scope[groupBracket].exception2 = true;
			var winner1 = $scope.groupOutcome[0][1];
			$scope[groupBracket].possibleWinners.push($scope.groupOutcome[0][0]);
			for (var i=1; i<3; i++){
				if($scope.groupOutcome[i][1] == winner1){
					$scope[groupBracket].possibleWinners.push($scope.groupOutcome[i][0])
				}
			}
		console.log("there is a tie for group2nd");
		}
	}
	//Top 2 teams (at least) are tied, raise exception
	else{
		if($scope.groupOutcome[0][1] == $scope.groupOutcome[1][1]){
			$scope[groupBracket].exception1 = true;
			var winner1 = $scope.groupOutcome[0][1];
			$scope[groupBracket].possibleWinners.push($scope.groupOutcome[0][0]);
			for (var i=1; i<4; i++){
				if($scope.groupOutcome[i][1] == winner1){
					$scope[groupBracket].possibleWinners.push($scope.groupOutcome[i][0])
				}
			}
			console.log("there is a tie for first place");
			console.log($scope[groupBracket].exception1);
		}
	}
}

$scope.openGroup1st = function (event) {
	var thisGroup = $(event.target).closest("button").data("group");
	var modalInstance = $modal.open({
		templateUrl: '/views/modal.html',
		controller: ModalInstanceCtrl,
		resolve: {
		    items: function () {
		    	return $scope[thisGroup].possibleWinners;
		    }
		}
	});

		modalInstance.result.then(function (selectedItem) {
		  $scope.selected = selectedItem;
		  $scope[thisGroup].group1st = selectedItem;
		  $scope[thisGroup].group1stImg = "images/flags/" + selectedItem + ".png";
		  
		  $scope[thisGroup].exception1 = false;
		  
		  var z = $scope[thisGroup].possibleWinners.indexOf(selectedItem);
		  if (z != -1){
		  	$scope[thisGroup].possibleWinners.splice(z,1);
		  }else{
		  	$scope[thisGroup].possibleWinners.pop();
		  }
		  if ($scope[thisGroup].possibleWinners.length == 1){
		  	$scope[thisGroup].group2nd = $scope[thisGroup].possibleWinners[0];
		  	$scope[thisGroup].group2ndImg = "images/flags/" + $scope[thisGroup].group2nd + ".png";
		  }
		  else{
		  	$scope[thisGroup].exception2 = true;
		  }

		});
	};

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}

$scope.openGroup2nd = function (event) {
	var thisGroup = $(event.target).closest("button").data("group");
	var modalInstance = $modal.open({
		templateUrl: '/views/modal2.html',
		controller: ModalInstanceCtrl,
		resolve: {
		    items: function () {
		    	return $scope[thisGroup].possibleWinners;
		    }
		}
	});

		modalInstance.result.then(function (selectedItem) {
		  $scope.selected = selectedItem;
		  $scope[thisGroup].group2nd = selectedItem;
		  $scope[thisGroup].group2ndImg = "images/flags/" + selectedItem + ".png";
		  $scope[thisGroup].exception2 = false;
		});
	};

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}



$scope.calculate_game_winner = function(event,id,team1,team2){
	$(event.target).closest("tr").find("td").removeClass("winnerPick"); //remove all highlited classes
	$(event.target).closest("td").addClass("winnerPick");  //add class to highlite winner
	$scope.allGames[id].winnerPick = $(event.target).closest("td").data("team"); //get winning team or tie
	$scope.allGames[id].winnerPickImg = "images/flags/" + $scope.allGames[id].winnerPick + ".png";
	$scope.allGames[id].gamePicked = true;
	isAllGroupPicked(id);
};
$scope.advanceWinners = function(event,id,team){
	// if($scope.pickedAllGroups){
		$(event.target).closest("tr").find("td").removeClass("winnerPick"); //remove all highlited classes
		$scope.allGames[id].winnerPick = $(event.target).closest("td").data("team");//add class to highlite winner
		$(event.target).closest("td").addClass("winnerPick");
		$scope.allGames[id].winnerPickImg = "images/flags/" + $scope.allGames[id].winnerPick + ".png";

};



});