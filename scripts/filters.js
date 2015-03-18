angular.module('slideView')

    .filter('routes', function() {
        return function(items) {
            var routes = [];
            var index = 0;

            for (var route in items) {
                index++;
                if (index % 2 && route !== 'null') {
                    routes.push(route);
                }
            }
            return routes;
        }
    });
