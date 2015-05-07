'use strict';

/**
 * @ngdoc function
 * @name xhadBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xhadBlogApp
 */
angular.module('xhadBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
