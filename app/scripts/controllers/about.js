'use strict';

/**
 * @ngdoc function
 * @name xhadBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xhadBlogApp
 */
angular.module('xhadBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
