var app = angular.module('xhadBlog', []);

app.controller('MainCtrl', [
	'$scope', 
	function($scope){


	$scope.posts = [
		{title: 'This is the first post.', upvotes: 3},
		{title: 'There is noting like a new coat on a cold winter day.', upvotes: 5},
		{title: 'Once is enough for the time that I have been.', upvotes: 9},
		{title: 'Its all over but the bawling.', upvotes: 2}
	];

	$scope.addPost = function() {
		if(!$scope.title || $scope.title === '') { return; }
		$scope.posts.push({title: 'A new post!', upvotes: 0});
		$scope.title = '';
	};



}]);