angular.module('slideView')

    .directive('ngView', function($rootScope) {
        return function (scope, element) {
            element.on('$animate:close', function() {
                $rootScope.animation = false;
                $rootScope.direction = 'reverse';
                $rootScope.$apply();
            })
        }
    })

    .directive('nav', function($document) {

        function setWidth(element) {
            element.css('width', document.body.offsetWidth + 'px');
        }

        return function(scope, element) {
            setWidth(element.children());
            angular.element(window).bind('resize', function() {
                setWidth(element.children());
            });
        }
    });
