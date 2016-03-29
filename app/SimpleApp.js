
var SimpleApp = angular.module('SimpleApp', ['ngRoute']);


SimpleApp.config(function ($routeProvider) {

	$routeProvider
	.when ('/',
	{
		controller: 'productController',
		templateUrl: 'templates/view1.html'
	})
	.when('/view2/:id',
	{
		controller:'OrderController',
		templateUrl:'templates/view2.html'
	})
	.when('/view3',
	{
		controller:'productController',
		templateUrl:'templates/view3.html'
	})
	.when('/view4',
	{
		controller:'OrderController',
		templateUrl:'templates/view4.html'
	})
	.otherwise({redirectTo: '/'});
	});
