angular.module('slideView')

    .factory('navService', function($filter, $route) {

        var routes = $filter('routes')($route.routes);

        return {

            list: function() {
                return routes;
            },

            next: function(path) {
                var index = routes.indexOf(path);
                return routes[index + 1] || routes[0]
            },

            prev: function(path) {
                var index = routes.indexOf(path);
                return routes[index - 1] || routes[routes.length - 1];
            },

            type: function(prev, next) {
                return routes.indexOf(prev) > routes.indexOf(next);
            }
        }

    });
