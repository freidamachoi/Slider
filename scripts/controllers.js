angular.module('slideView')

    .controller('mainController', function($scope, $navigate) {
        $scope.$navigate = $navigate;
    })

    .controller('navController', function($scope, $location) {
        $scope.active = function(route) {
            return route === $location.path();
        };
    });

