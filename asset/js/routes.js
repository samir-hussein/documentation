var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when("/",{
		templateUrl : "hghghgvhg",
	})
    .otherwise('/');

    $locationProvider.html5Mode(true);
});
