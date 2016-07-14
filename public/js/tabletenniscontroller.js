angular.module('athleteApp').controller('TableTennisController', function($scope, DataServices){

  $scope.randomAthlete = DataServices.data.tableAthlete;

});
