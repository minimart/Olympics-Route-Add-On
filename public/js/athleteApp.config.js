angular.module('athleteApp').config(function($routeProvider, $locationProvider){
  console.log('Hit2.')
  $routeProvider
    .when('/badminton', {
      templateUrl: 'views/badminton.html',
      controller: 'BadmintonController'
    })
    .when('/judo', {
      templateUrl: 'views/judo.html',
      controller: 'JudoController'
    })
    .when('/synchronized-swimming', {
      templateUrl: 'views/synchronized-swimming.html',
      controller: 'SynchronizedSwimmingController'
    })
    .when('/table-tennis', {
      templateUrl: 'views/table-tennis.html',
      controller: 'TableTennisController'
    })
    .when('/triathlon', {
      templateUrl: 'views/triathlon.html',
      controller: 'TriathlonController'
    })

    $locationProvider.html5Mode(true);
});
