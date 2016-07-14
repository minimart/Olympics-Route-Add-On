angular.module('routeApp', ['ngRoute']);

angular.module('routeApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/red', {
      templateUrl:'views/red.html',
      controller: 'RedController'
    })
    .when('/green', {
      templateUrl:'views/green.html',
      controller: 'GreenController'
    })
    .when('/blue', {
      templateUrl: 'views/blue.html',
      controller: 'BlueController'
    })
    .when('/orange', {
      templateUrl: 'views/orange.html',
      controller: 'OrangeController'
    })
$locationProvider.html5Mode(true);
})


angular.module('routeApp').controller('RedController', function($scope){

});
angular.module('routeApp').controller('GreenController', function($scope){

});
angular.module('routeApp').controller('BlueController', function($scope){

});
angular.module('routeApp').controller('OrangeController', function($scope){

});
