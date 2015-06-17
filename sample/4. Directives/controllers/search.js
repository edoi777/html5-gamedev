AngularjsApp.controller("SearchController", function($scope, $http){

	$http({
        url: "json/platforms.json",
        method: "GET"
    }).success(function(platforms){
        $scope.platforms = platforms;
    });
})