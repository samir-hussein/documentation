var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when("/documentation",{
		templateUrl : "https://samir-hussein.github.io/documentation/pages/home.html",
	})
    .otherwise('/documentation');

    $locationProvider.html5Mode(true);
});
