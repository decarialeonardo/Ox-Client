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
    'fullscreenModule',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/session/login.html',
        controller: 'LoginCtrl',
        bodyStyle: {
          'background-color': 'green'
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/pipeline/dashboard', {
        templateUrl: 'views/pipeline/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/pipeline/grid/:projectId?', {
        templateUrl: 'views/pipeline/grid.html',
        controller: 'GridCtrl'
      })
      .when('/layout/navbar', {
        templateUrl: 'views/layout/navbar.html',
        controller: 'NavbarCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
