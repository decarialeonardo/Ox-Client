'use strict';

/**
 * @ngdoc overview
 * @name OxApp
 * @description
 * # OxApp
 *
 * Main module of the application.
 */
angular
  .module('OxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'notificationModule',
    'cardflipModule',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/session/login.html',
        controller: 'LoginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/pipeline/dashboard', {
        templateUrl: 'views/pipeline/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/pipeline/grid/:projectId', {
        templateUrl: 'views/pipeline/grid.html',
        controller: 'GridCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
