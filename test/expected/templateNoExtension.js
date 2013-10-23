angular.module('myApp').run(['$templateCache', function($templateCache) {
$templateCache.put('test/fixtures/name', "<div>{{model.name}}</div>");
$templateCache.put('test/fixtures/value', "<div id=\"value\" class='my-value'>{{model.value}}</div>");
}]);