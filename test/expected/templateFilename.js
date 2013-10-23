angular.module('myApp').run(['$templateCache', function($templateCache) {
$templateCache.put('name.html', "<div>{{model.name}}</div>");
$templateCache.put('value.html', "<div id=\"value\" class='my-value'>{{model.value}}</div>");
}]);