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

            methods.setSelected = function (scope, propertySelections, propertyKeys, key) {
                if (scope[propertySelections] == null || scope[propertyKeys] == null) {
                    return;
                }
                for (var keyIndex = 0; keyIndex < scope[propertyKeys].length; keyIndex++) {
                    for (var selectionIndex = 0; selectionIndex < scope[propertySelections].length; selectionIndex++) {
                        if (scope[propertySelections][selectionIndex][key] == scope[propertyKeys][keyIndex]) {
                            scope[propertySelections][selectionIndex].selected = true;
                            break;
                        }
                    }
                }
            }

            return methods;
        };
    }

    angular.module('ngCanos', []).
        provider('$convertor', [ConvertorProvider]);

})(window, window.angular);