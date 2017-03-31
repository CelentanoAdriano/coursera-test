(function(){

'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.lunchItems = "";
  $scope.checkIfTooMuch = function(){
    var itemsTotalCount = $scope.lunchItems.length;

    if(itemsTotalCount == 0){
      return $scope.result = 'Please enter data first';
    }
    var itemsTotalCountSplitted = $scope.lunchItems.split(',').length;

    if(itemsTotalCountSplitted <= 3 ){
      return $scope.result = 'Enjoy!';
    }else if(itemsTotalCountSplitted > 3) {
      return $scope.result = 'Too much';
    }
  }
}

})();
