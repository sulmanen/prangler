angular.module('myApp').run(['$templateCache', function($templateCache) {
$templateCache.put('test/fixtures/name.html', "<div>{{model.name}}</div>");
$templateCache.put('test/fixtures/value.html', "<div id=\"value\" class='my-value'>{{model.value}}</div>");
}]);