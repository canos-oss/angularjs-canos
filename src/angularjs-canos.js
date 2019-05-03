/**
 * Canos 公共方法
 */
(function (window, angular) {

    'use strict';

    function ConvertorProvider() {
        this.$get = function () {

            var methods = {};

            methods.toSelected = function (selections, key) {
                if (selections == null || selections.length == 0) {
                    return;
                }

                var items = [];
                for (var i = 0; i < selections.length; i++) {
                    if (!selections[i].selected) {
                        continue;
                    }
                    items.push(selections[i][key]);
                }

                return items;
            }

            return methods;
        };
    }

    angular.module('ngCanos', []).
        provider('$convertor', [ConvertorProvider]);

})(window, window.angular);