(function(){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  // step2: Register Filter factory with module
  .filter('registration', RegistrationFilter)
  .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope','registrationFilter'];

  function MsgController($scope,registrationFilter) {
    $scope.stateOfBeing = "registration";

    $scope.displayMessage = function () {
      var msg = "Your Registration has been done successfully...!";
      return msg;
    }

    $scope.registrationMessage = function () {
      var msg = "Your Registration has been done successfully...!";
      // call to custom filter
      msg = registrationFilter(msg);
      return msg;
    }

    $scope.feedMessage = function(){
      $scope.stateOfBeing = "registrationdone";
    };
  }

  function RegistrationFilter(){
    return function (input){
      input = input || "";
      input = input.replace("Registration","Admission");
      return input;
    };
  }

  // step1: Define filter factory function with custom arguments.
  function TruthFilter(){
    return function (input, target, replace){
      input = input || "";
      input = input.replace(target,replace);
      return input;
    };
  }
})();
