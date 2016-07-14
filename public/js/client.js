




angular.module('athleteApp').controller('BadmintonController', function($scope, $http){

  $scope.randomAthlete;

  function handleSuccess(response){
      console.log('Success:', response.data);
      $scope.randomAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getAthlete(sport) {
      $http({
          method: 'GET',
          url: '/olympics/' + sport
      }).then(handleSuccess, handleFailure);
    }

  getAthlete('badminton');

});

angular.module('athleteApp').controller('JudoController', function($scope, $http){

  $scope.randomAthlete;

  function handleSuccess(response){
      console.log('Success:', response.data);
      $scope.randomAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getAthlete(sport) {
      $http({
          method: 'GET',
          url: '/olympics/' + sport
      }).then(handleSuccess, handleFailure);
    }

  getAthlete('judo');
});

angular.module('athleteApp').controller('SynchronizedSwimmingController', function($scope, $http){

  $scope.randomAthlete;

  function handleSuccess(response){
      console.log('Success:', response.data);
      $scope.randomAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getAthlete(sport) {
      $http({
          method: 'GET',
          url: '/olympics/' + sport
      }).then(handleSuccess, handleFailure);
    }

  getAthlete('synchronized-swimming');
});

angular.module('athleteApp').controller('TableTennisController', function($scope, $http){

  $scope.randomAthlete;

  function handleSuccess(response){
      console.log('Success:', response.data);
      $scope.randomAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getAthlete(sport) {
      $http({
          method: 'GET',
          url: '/olympics/' + sport
      }).then(handleSuccess, handleFailure);
    }

  getAthlete('table-tennis');
});

angular.module('athleteApp').controller('TriathlonController', function($scope, $http){

  $scope.randomAthlete;

  function handleSuccess(response){
      console.log('Success:', response.data);
      $scope.randomAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getAthlete(sport) {
      $http({
          method: 'GET',
          url: '/olympics/' + sport
      }).then(handleSuccess, handleFailure);
    }

  getAthlete('triathlon');
});




// app.controller('AthleteController', function($scope, $http){
//
//   $scope.randomAthleteArray = [];
//
//   function handleSuccess(response){
//     console.log('Success:', response.data);
//     $scope.randomAthleteArray.push({ name: response.data[0], origin: response.data[1], sport: response.data[2]});
//   }
//
//   function handleFailure(response){
//     console.log('Failure:', response.data);
//   }
//
//   function getAthlete(sport) {
//     $http({
//         method: 'GET',
//         url: '/olympics/' + sport
//     }).then(handleSuccess, handleFailure);
//   }
//
//   $scope.generateAthletesButton = function () {
//     $scope.randomAthleteArray = [];
//     getAthlete('badminton');
//     getAthlete('judo');
//     getAthlete('synchronized-swimming');
//     getAthlete('table-tennis');
//     getAthlete('triathlon');
//   };
//
// })
