/*jslint node:true*/ 
'use strict';

/* Directives */

var sistemaDirectives = angular.module('sistemaDirectives', []);

sistemaDirectives.directive('saMotes', function() {
	  return {
    restrict: 'A',
    require: '^ngModel',
		scope: {
			ngStat: '@'
		},
    template: '<span class="badge"><span class="glyphicon glyphicon-certificate" ng-repeat="i in  getNumber(character.attributes.strength.value) track by $index"></span><span class="glyphicon glyphicon-certificate mote-empty" ng-repeat="i in  getNumber(character.attributes.strength.max - character.attributes.strength.value) track by $index"></span></span>'
  }
});

/*
angular.module('sistemaApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
*/
