angular.module('sandbox')
    .directive('ngPrism', ['$interpolate', function ($interpolate) {
        "use strict";
        return {
            restrict: 'E',
            template: '<pre><code ng-transclude></code></pre>',
            replace: true,
            transclude: true,
            link: function (scope, elm) {
                var tmp = $interpolate(elm.find('code').text())(scope);
                elm.find('code').html(Prism.highlightElement(tmp).value);
            }
        };
    }]);