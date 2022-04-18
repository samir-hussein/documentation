var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when("/",{
		templateUrl : "https://samir-hussein.github.io/documentation/pages/home.html",
	})
    .otherwise('/');

    $locationProvider.html5Mode(true);
});
