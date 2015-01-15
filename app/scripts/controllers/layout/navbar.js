'use strict';

/**
 * @ngdoc function
 * @name OxApp.controller:NavbarCtrl
 * @description
 * # LayoutNavbarCtrl
 * Controller of the OxApp
 */
angular.module('OxApp')
  .controller('NavbarCtrl', ['$scope','$location', 'Fullscreen', function ($scope, $location, Fullscreen) {
  	$scope.isActive = function (viewLocation) {
	   return (viewLocation === $location.path());
	};

	$scope.goFullscreen = function () {

      if (Fullscreen.isEnabled())
         Fullscreen.cancel();
      else
         Fullscreen.all();
   	}

  }]);
