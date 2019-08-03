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

            //适用于复选框，在初始化更新页面的时候，设置checkbox的状态
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

            //适用于单选框，在初始化更新页面的时候，设置当当前raiod绑定的值的状态
            methods.setCurrent = function (scope, propertyName, propertySelections, propertyKey, key) {
                if (scope[propertySelections] == null || scope[propertyKey] == null) {
                    return;
                }
                for (var selectionIndex = 0; selectionIndex < scope[propertySelections].length; selectionIndex++) {
                    if (scope[propertySelections][selectionIndex][key] == scope[propertyKey]) {
                        scope[propertyName] = scope[propertySelections][selectionIndex];
                        break;
                    }
                }
            }            

            return methods;
        };
    }

    angular.module('ngCanos', []).
        provider('$convertor', [ConvertorProvider]);

})(window, window.angular);