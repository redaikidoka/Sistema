'use strict';

/* Controllers */

var sistemaControllers = angular.module('sistemaControllers', []);

sistemaControllers.controller('CharacterCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('characters/ash.json').success(function(data) {
			$scope.character = data;
		});
		
		$scope.happy = true;
}]);


/*																								
angular.module('sistema.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
*/