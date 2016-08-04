var myApp = angular.module('myInfo',['ngRoute','ngResource']);

myApp.config(['$routeProvider', function($routeProvider){

  $routeProvider

  .when('/',{ 

    templateUrl:'views/home.html',
    controller: 'homeCtr'
  })
  .when('/:index',{
    
    templateUrl:'views/detail.html',
    controller: 'homeCtr'

  })
}]);


myApp.controller('homeCtr',['$scope','$http','$routeParams',  function($scope,$http,$routeParams){

$scope.index= $routeParams.index;

$scope.title="Planets List";

$scope.planet= [];
$http.get('planets.json')
  .success(function(resp){
    $scope.planet= resp;
    });

        $scope.active = true;
        $scope.active1 = true;
        

}]);








