'use strict';

/**
 * @ngdoc overview
 * @name xhadBlogApp
 * @description
 * # xhadBlogApp
 *
 * Main module of the application.
 */
angular
  .module('xhadBlogApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/mainMenu', {
        templateUrl: 'views/mainmenu.html',
        controller: 'MainmenuCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
