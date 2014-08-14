/*jslint node:true*/ 
'use strict';

/* Directives */

var sistemaDirectives = angular.module('sistemaDirectives', []);


sistemaDirectives.directive('saMotes', function() {
	  return {
    restrict: 'AE',
		scope: {
			moteCount: '=',
			moteMax: '=',
			statName: '='
		},
    template: '<span ng-repeat="mote in motes" class="glyphicon glyphicon-certificate" ng-class="{\'mote-empty\':$index>moteCount-1}"> </span>',
		link: function(scope, elem, attrs, ctrl ) {
			scope.motes = []; 
			// console.log(" mote count: " + scope.moteCount);
			// console.log(" mote max: " + scope.moteMax);
			// console.log(" stat: " + scope.statName);
			
			// console.log(scope.statName + ": " + scope.moteCount + " / " + scope.moteMax);

			if ( angular.isNumber(scope.moteMax) ) {
				for (var i = 0; i< scope.moteMax; i++) {
					scope.motes.push( i );
				}

				//console.log(scope.motes);
			}

			// scope.$watch('moteCount',function(newValue, oldValue){
			//     if(newValue !== oldValue){
			//       console.log({label:'watch', value: scope.mouteCount});
			//     }

			// 	if (angular.isObject(scope.moteMax)) {
			// 		for (var i = 0; i< scope.moteMax; i++) {
			// 			scope.motes.push( i );
			// 		}
			// 	}

			//   });
			
		}
}});

