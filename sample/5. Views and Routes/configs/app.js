var AngularjsApp = angular.module('AngularjsApp', ['ngRoute']);

AngularjsApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller:'SearchController',
            templateUrl:'views/home.html'
        })
        .when('/platform/:id', {
            controller:'SearchController',
            templateUrl:'views/about.html'
        })

        // Default
        .otherwise({
            redirectTo:'/'
        });
});
