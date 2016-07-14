angular.module('athleteApp').controller('TriathlonController', function($scope, DataServices){

  $scope.randomAthlete = DataServices.data.triathlonAthlete;


});
