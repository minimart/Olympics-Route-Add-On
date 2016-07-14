angular.module('athleteApp').controller('JudoController', function($scope, DataServices){
  console.log('hit3');
  $scope.randomAthlete = DataServices.data.judoAthlete;


});
