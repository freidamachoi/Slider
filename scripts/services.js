angular.module('slider')

    .factory('$navigate', function($filter, $route, $location) {

        return {

            animation: false,
            routes: $filter('routes')($route.routes),

            index: function(location) {
                return this.routes.indexOf(location || $location.path());
            },

            next: function() {
                this.go(this.routes[this.index() + 1] || this.routes[0], false);
            },

            prev: function() {
                this.go(this.routes[this.index() - 1] || this.routes[this.routes.length - 1], true);
            },

            to: function(location) {
                this.go(location, this.index() > this.index(location));
            },

            go: function(location, reverse) {
                this.reverse = reverse;
                $location.path(location);

            }

        }

    });
