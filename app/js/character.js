/*jslint node:true*/ 
'use strict';

sistemaApp.controller('CharacterCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('characters/ash.json', {cache:false}).success(function(data) {
			$scope.character = data;
			
		});
		
		$scope.happy = true;
		
		$scope.getNumber = function(num) {
    	return new Array(num);   
		}
		
}]).directive('saMotes', function() {
	  return {
    restrict: 'A',
		scope: {
			moteCount: '=',
			moteMax: '=',
			statName: '@'
		},
    template: '<span ng-repeat="mote in motes" class="glyphicon glyphicon-certificate" ng-class="{\'mote-empty\':$index>moteCount+1}"> </span>',
		link: function(scope, elem, attrs, ctrl ) {
			scope.motes = []; 
			console.log(" mote count: " + scope.moteCount);
			console.log(" mote max: " + scope.moteMax);
			console.log(" stat: " + scope.statName);
			
			for (var i = 0; i< scope.moteMax; i++) {
				scope.motes.push( i );
			}
			
		}
}});