/*jslint node:true*/ 
'use strict';

/* Directives */

var sistemaDirectives = angular.module('sistemaDirectives', []);


sistemaDirectives.directive('saMotes', function() {
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

//
//sistemaDirectives.directive('fundooRating', function () {
//    return {
//      restrict: 'A',
//      template:  '<span ng-repeat="star in stars" class="filled">' +
//                      '\u2605' +
//                  '</span>',
//      scope: {
//        ratingValue: '='
//      },
//      link: function (scope, elem, attrs) {
//        scope.stars = [];
//        for (var i = 0; i < scope.ratingValue; i++) {
//          scope.stars.push({});
//        }
//      }
//  }
//});

/*
angular.module('sistemaApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
*/
