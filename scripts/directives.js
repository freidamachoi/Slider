angular.module('slideView')


    .directive('view', function($navigate) {
        return function(scope, element) {

            scope.$on('$routeChangeStart', function(event, current, previous) {

                if (!previous || !current.$$route) return;

                if ($navigate.animation) {
                    event.preventDefault();
                }
                else {
                    element.removeClass('none');
                    element.toggleClass('reverse', $navigate.reverse);
                    $navigate.animation = true;
                }
            });
        }
    })


    .directive('ngView', function($navigate) {
        return function (scope, element) {
            element.on('$animate:close', function() {
                $navigate.animation = false;
                $navigate.reverse = true;
                element.parent().addClass('reverse');
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
