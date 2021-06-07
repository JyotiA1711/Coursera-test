(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Cloud";
  $scope.stateOfBeing = "angry";

  $scope.sayMessage = function () {
    return "Cloud is happy when Sun is there..!!";
  };

  $scope.CloudStatus = function () {
    $scope.stateOfBeing = "happy";
  };
}

})();
