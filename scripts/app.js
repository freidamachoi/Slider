angular.module('slider', ['ngRoute', 'ngAnimate'])

    .config(function($routeProvider) {

        $routeProvider

            .when('/one', {
                templateUrl: 'templates/one.html'
            })
            .when('/two', {
                templateUrl: 'templates/two.html'
            })
            .when('/three', {
                templateUrl: 'templates/three.html'
            })
            .when('/four', {
                templateUrl: 'templates/four.html'
            })
            .when('/five', {
                templateUrl: 'templates/five.html'
            })
            .when('/six', {
                templateUrl: 'templates/six.html'
            })
            .when('/seven', {
                templateUrl: 'templates/seven.html'
            })
            .when('/eight', {
                templateUrl: 'templates/eight.html'
            })
            .otherwise({
                redirectTo: '/one'
            });

    });

