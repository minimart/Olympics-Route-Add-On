angular.module('athleteApp').controller('SynchronizedSwimmingController', function($scope, DataServices){

  $scope.randomAthlete = DataServices.data.swimmingAthlete;


});
