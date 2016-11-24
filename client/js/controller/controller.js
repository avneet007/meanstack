var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('lostpplContoller', ['$scope', '$resource', function($scope,$resource) {

   var ppldata = $resource("/api/lostpeople")

   
   ppldata.query(function(result){

      $scope.ppl = result;

   })


    $scope.lostpplcount = 5;

    $scope.ppl = [{name:"avneet"},
    {name:"vineet"}]


    $scope.submitdata = function(){

    	//$scope.ppl.push({name:$scope.newPpl});
    	//$scope.newPpl="";

    	var newData = new ppldata();

    	newData.name=$scope.newPpl;
    	newData.$save(function(result){

             $scope.ppl.push(result);
             $scope.newPpl= "";

    	});

    }
   
}]);




