/*jslint node: true */ 
'use strict';

// Declare app level module which depends on filters, and services
var sistemaApp = angular.module('sistemaApp', [
	'ngRoute',
	'sistemaControllers',
	'sistemaFilters',
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

/*	
angular.module('sistema', [
  'ngRoute',
  'sistema.filters',
  'sistema.services',
  'sistema.directives',
  'sistema.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/