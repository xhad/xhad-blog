'use strict';

/**
 * @ngdoc function
 * @name xhadBlogApp.controller:MainmenuCtrl
 * @description
 * # MainmenuCtrl
 * Controller of the xhadBlogApp
 */
angular.module('xhadBlogApp')
  .controller('MainmenuCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
