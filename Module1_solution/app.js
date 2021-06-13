(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.list = "";
  $scope.CheckLunchItemsSize = function(){
    var itemSize = CheckLunchItemsSize($scope.list);
    $scope.itemSize = itemSize;
  };

$scope.DisplayMessage = function(){
  if($scope.itemSize == 0 || $scope.list == "")
    $scope.sayMessage = "Please enter your lunch item first.Thank you!";
  else if ($scope.itemSize <= 3) {
      $scope.sayMessage = "Enjoy!!";
  }
  else
    $scope.sayMessage = "Too much!!"
}
}

function CheckLunchItemsSize(string){

  if (string.trim().length == "")
      return 0;
  else {
      const words = string.split(',').filter(function(el) {return el.trim().length != 0});
      return words.length;
  }
}
})();
