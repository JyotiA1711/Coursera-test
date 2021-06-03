(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
$scope.name = "Jyoti";
$scope.sayHello = function(){
  return "Thank you Coursera!!"
}

});

})();
