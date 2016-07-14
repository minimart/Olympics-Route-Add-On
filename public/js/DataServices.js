angular.module('athleteApp').factory('DataServices', function($http){
console.log('hit40')
  var data = {};
//JUDO
  function handleJudoSuccess(response){
      console.log('Success:', response.data);
      data.judoAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getJudoAthlete() {
      $http({
          method: 'GET',
          url: '/olympics/judo'
      }).then(handleJudoSuccess, handleFailure);
    }

  getJudoAthlete();

  // BADMINTON
  function handleBadmintonSuccess(response){
      console.log('Success:', response.data);
      data.badmintonAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getBadmintonAthlete() {
      $http({
          method: 'GET',
          url: '/olympics/badminton'
      }).then(handleBadmintonSuccess, handleFailure);
    }

  getBadmintonAthlete('badminton');

  // SYNCHRONIZED SWIMMING

  function handleSwimmingSuccess(response){
      console.log('Success:', response.data);
      data.swimmingAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getSwimmingAthlete() {
      $http({
          method: 'GET',
          url: '/olympics/synchronized-swimming'
      }).then(handleSwimmingSuccess, handleFailure);
    }

  getSwimmingAthlete();

  //TABLE TENNIS

  function handleTableSuccess(response){
      console.log('Success:', response.data);
      data.tableAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getTableAthlete() {
      $http({
          method: 'GET',
          url: '/olympics/table-tennis'
      }).then(handleTableSuccess, handleFailure);
    }

  getTableAthlete();

  // TRIATHLON

  function handleTriathlonSuccess(response){
      console.log('Success:', response.data);
      data.triathlonAthlete = { name: response.data[0], origin: response.data[1], sport: response.data[2]};
    }

    function handleFailure(response){
      console.log('Failure:', response.data);
    }

  function getTriathlonAthlete() {
      $http({
          method: 'GET',
          url: '/olympics/triathlon'
      }).then(handleTriathlonSuccess, handleFailure);
    }

  getTriathlonAthlete();

  return {
    data: data,

  }
})
