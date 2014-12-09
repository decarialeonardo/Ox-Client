'use strict';

/**
 * @ngdoc function
 * @name oxApp.controller:LoginCtrl
 * @description
 * # SessionLoginCtrl
 * Controller of the oxApp
 */
angular.module('OxApp')
  .controller('LoginCtrl', ['$scope','$location', function ($scope, $location) {
		$scope.logged = function(){
			$location.path('/pipeline/dashboard');
		}
  }]);
