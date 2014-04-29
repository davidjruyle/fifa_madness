angular.module('dashFactory', []).factory('dashboard', ['$http', function($http) {
	var teamFactory = {};
  
	teamFactory.getCustomers = function() {
            return $http.get('/customers');
        };


    teamFactory.getData = function(){
    	var promise = $http.get('http://footballdb.herokuapp.com/api/v1/event/world.2014/round/3');
    	promise = promise.then(function(response){
    		return response.data;
    	});
    }

    return teamFactory;



}]);
