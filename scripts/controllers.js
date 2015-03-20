angular.module('slider')

    /**
     * Enable $navigate service in HTML
     */
    
    .controller('mainController', function($scope, $navigate) {
        $scope.$navigate = $navigate;
    })



    /**
     * Select current page
     */

    .controller('navController', function($scope, $location) {
        $scope.active = function(path) {
            return path === $location.path();
        };
    });

