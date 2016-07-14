angular.module('athleteApp').controller('BadmintonController', function($scope, DataServices){

  $scope.randomAthlete = DataServices.data.badmintonAthlete;
  $scope.data = DataServices.data;
//rebind all to .data


});
