angular.module('slideView')

    .factory('$navigate', function($filter, $route, $location, $rootScope, $timeout) {

        $rootScope.direction = 'none';

        return {

            routes: $filter('routes')($route.routes),

            index: function(location) {
                return this.routes.indexOf(location || $location.path());
            },

            next: function() {
                this.go(this.routes[this.index() + 1] || this.routes[0]);
            },

            prev: function() {
                this.go(this.routes[this.index() - 1] || this.routes[this.routes.length - 1], 'reverse');
            },

            to: function(location) {
                this.go(location, this.index() > this.index(location) && 'reverse');
            },

            go: function(location, direction) {
                $rootScope.direction = direction || 'normal';
                $timeout(function() {
                    $location.path(location);
                });
            }

        }

    });
