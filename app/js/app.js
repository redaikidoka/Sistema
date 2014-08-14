/*jslint node: true */ 
'use strict';

// Declare app level module which depends on filters, and services
var sistemaApp = angular.module('sistemaApp', [
	'ngRoute',
	'sistemaFilters',
 	'sistemaControllers',
	'sistemaDirectives'
]);

	
sistemaApp.config(['$routeProvider', 
 function($routeProvider) {
	 $routeProvider.
	  when('/character', {
			templateUrl: 'partials/character.html',
			controller: 'CharacterCtrl'
		}).
	  otherwise({
			redirectTo: '/character'
		});
 }]);

