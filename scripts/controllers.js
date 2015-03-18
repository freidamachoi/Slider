angular.module('slideView')

    .controller('navController', function($scope, $location, navService) {

        $scope.routes = navService.list();

        $scope.active = function(route) {
            return route === $location.path();
        };

        $scope.navigate = function(val) {
            console.log(val);
        };

        $scope.$on('$routeChangeSuccess', function() {
            var path = $location.path();
            $scope.next = navService.next(path);
            $scope.prev = navService.prev(path);
        });

    });
