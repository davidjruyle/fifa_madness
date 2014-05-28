'use strict';

/* Controllers */

function IndexCtrl($scope, $http) {
  $http.get('/api/brackets').
    success(function(data, status, headers, config) {
      $scope.brackets = data.brackets;
    });
}

function AddBracketCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitBracket = function () {
    $http.bracket('/api/bracket', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}

function ReadBracketCtrl($scope, $http, $routeParams) {
  $http.get('/api/bracket/' + $routeParams.id).
    success(function(data) {
      $scope.bracket = data.bracket;
    });
}

function EditBracketCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/bracket/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.bracket;
    });

  $scope.editBracket = function () {
    $http.put('/api/bracket/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readbracket/' + $routeParams.id);
      });
  };
}

function DeleteBracketCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/bracket/' + $routeParams.id).
    success(function(data) {
      $scope.bracket = data.bracket;
    });

  $scope.deleteBracket = function () {
    $http.delete('/api/bracket/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };

  $scope.home = function () {
    $location.url('/');
  };
}
