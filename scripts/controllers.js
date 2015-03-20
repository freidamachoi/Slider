angular.module('slider')

    .controller('mainController', function($scope, $navigate) {
        $scope.$navigate = $navigate;
    })

    .controller('navController', function($scope, $location) {
        $scope.active = function(path) {
            return path === $location.path();
        };
    });

