angular.module('authService', []).factory('auth', ['$http', function($http) {

	  // return{
	  //     apiPath:'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/3',
	  //     getAllItems: function(){
	  //       //Creating a deferred object
	  //       var deferred = $q.defer();
	 
	  //       //fetch data
	  //       $http.get(this.apiPath).success(function(data){
	  //         //Passing data to deferred's resolve function on successful completion
	  //         deferred.resolve(data);
	  //     }).error(function(){
	 
	  //       //Sending a friendly error message in case of failure
	  //       deferred.reject("An error occured while fetching items");
	  //     });
	 
	  //     //Returning the promise object
	  //     return deferred.promise;
	  //   }
	  // }

}]);
