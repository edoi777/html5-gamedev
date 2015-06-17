AngularjsApp.controller("SearchController", function($scope, $http, $routeParams){

	$http({
        url: "json/platforms.json",
        method: "GET"
    }).success(function(platforms){
        $scope.platforms = platforms;

        for( var i = 0;  i < $scope.platforms.length; i++ ) {
            if( $scope.platforms[i].name.toLowerCase() == $routeParams.id ) {
                $scope.platform = $scope.platforms[i];
                console.log($scope.platform);
            }
        }
    });
})