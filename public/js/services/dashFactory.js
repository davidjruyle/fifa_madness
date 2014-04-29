angular.module('dashFactory', []).factory('dashboard', ['$http', function($http) {
	var allRounds = [];
    return {

    // getRounds: function() {
    //     for (var i=1; i<21; i++){
    //         var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/' + i + '?callback=JSON_CALLBACK';
    //         $http.jsonp(url).success(function(result){
    //             allRounds.push(result);
    //         });
    //     }
    //     setTimeout(function(){
    //         console.log(allRounds);
    //     }, 3000);
    //     return allRounds;
    // },
    getRound1: function() {
       var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/1?callback=JSON_CALLBACK';
       return $http.jsonp(url);
    }    
    // getRound2: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/2?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound3: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/3?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound4: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/4?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound5: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/5?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound6: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/6?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound7: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/7?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound8: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/8?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound9: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/9?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound10: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/10?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound11: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/11?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound12: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/12?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound13: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/13?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound14: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/14?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound15: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/15?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound16: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/16?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound17: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/17?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound18: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/18?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound19: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/19?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound20: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/20?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    // getRound21: function() {
    //    var url = 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/21?callback=JSON_CALLBACK';
    //    return $http.jsonp(url);
    // },
    };
}]);