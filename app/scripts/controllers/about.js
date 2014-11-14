'use strict';

/**
 * @ngdoc function
 * @name oxAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oxAppApp
 */
angular.module('oxAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
