angular.module('slideView')



    .directive('ngView', function($rootScope) {
        return function (scope, element) {
            element.on('$animate:close', function() {
                $rootScope.animation = false;
            })
        }
    })



    .directive('nav', function() {

        function setWidth(element) {
            element.css('width', window.innerWidth + 'px');
        }

        return function(scope, element) {
            setWidth(element.children());
            angular.element(window).bind('resize', function() {
                setWidth(element.children());
            });
        }
    });
