/*jslint node: true */
'use strict';

/* Controllers */

var sistemaControllers = angular.module('sistemaControllers', []);

sistemaControllers.controller('CharacterCtrl', ['$scope', '$http',
		function($scope, $http) {
				$scope.character = {
						"name": "Ash of the Phoenix",
						"exalt_type": "Solar",
						"caste": "Night",
						"concept": "Intelligence gathering Nightbringer exalted from within the ranks of the Wyld Hunt itself",
						"motivation": "To decipher the nature and root cause of the curse that afflicts the Solars",
						"anima_banner": "A rising, silently screaming Phoenix, englfing him from the feet up",
						"anima": "Rising Phoenix",
						"attributes": {
								"max": 5,
								"min": 1,
								"strength": {
										"name": "strength",
										"abr": "str",
										"min": 1,
										"max": 5,
										"value": 2,
										"section": "physical"
								},
								"dexterity": {
										"name": "dexterity",
										"abr": "dex",
										"min": 1,
										"max": 5,
										"value": 5,
										"section": "physical"
								},
								"stamina": {
										"name": "stamina",
										"abr": "sta",
										"min": 1,
										"max": 5,
										"value": 2,
										"section": "physical"
								},
								"charisma": {
										"name": "charisma",
										"abr": "cha",
										"min": 1,
										"max": 5,
										"value": 3,
										"section": "social"
								},
								"manipulation": {
										"name": "manipulation",
										"abr": "man",
										"min": 1,
										"max": 5,
										"value": 2,
										"section": "social"
								},
								"appearance": {
										"name": "appearance",
										"abr": "app",
										"min": 1,
										"max": 5,
										"value": 2,
										"section": "social"
								},
								"perception": {
										"name": "perception",
										"abr": "app",
										"min": 1,
										"max": 5,
										"value": 5,
										"section": "mental"
								},
								"intelligence": {
										"name": "intelligence",
										"abr": "int",
										"min": 1,
										"max": 5,
										"value": 3,
										"section": "mental"
								},
								"wits": {
										"name": "wits",
										"abr": "wit",
										"min": 1,
										"max": 5,
										"value": 3,
										"section": "mental"
								}
						},
						"abilities": {
								"archery": {
										"name": "archery",
										"abr": "arch",
										"min": 0,
										"max": 5,
										"value": 5,
										"caste": "dawn",
										"favored": true,
										"specialties": [{
												"name": "Long Shot",
												"value": 2
										}]
								},
								"martial_arts": {
										"name": "martial arts",
										"abr": "ma",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "dawn",
										"favored": false
								},
								"melee": {
										"name": "melee",
										"abr": "mel",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "dawn",
										"favored": false
								},
								"thrown": {
										"name": "thrown",
										"abr": "thr",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "dawn",
										"favored": false
								},
								"war": {
										"name": "war",
										"abr": "war",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "dawn",
										"favored": false
								},
								"athletics": {
										"name": "athletics",
										"abr": "ath",
										"min": 0,
										"max": 5,
										"value": 3,
										"caste": "night",
										"favored": true
								},
								"awareness": {
										"name": "awareness",
										"abr": "awa",
										"min": 0,
										"max": 5,
										"value": 3,
										"caste": "night",
										"favored": true
								},
								"dodge": {
										"name": "dodge",
										"abr": "dod",
										"min": 0,
										"max": 5,
										"value": 5,
										"caste": "night",
										"favored": true
								},
								"larceny": {
										"name": "larceny",
										"abr": "lar",
										"min": 0,
										"max": 5,
										"value": 1,
										"caste": "night",
										"favored": true
								},
								"stealth": {
										"name": "stealth",
										"abr": "stlh",
										"min": 0,
										"max": 5,
										"value": 3,
										"caste": "night",
										"favored": true
								},
								"integrity": {
										"name": "integrity",
										"abr": "intg",
										"min": 0,
										"max": 5,
										"value": 1,
										"caste": "zenith",
										"favored": true
								},
								"performance": {
										"name": "performance",
										"abr": "perf",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "zenith",
										"favored": false
								},
								"presence": {
										"name": "presence",
										"abr": "pres",
										"min": 0,
										"max": 5,
										"value": 1,
										"caste": "zenith",
										"favored": false
								},
								"resistance": {
										"name": "resistance",
										"abr": "rsst",
										"min": 0,
										"max": 5,
										"value": 2,
										"caste": "zenith",
										"favored": false
								},
								"survival": {
										"name": "survival",
										"abr": "surv",
										"min": 0,
										"max": 5,
										"value": 1,
										"caste": "zenith",
										"favored": false
								},
								"bureaucracy": {
										"name": "bureaucracy",
										"abr": "bure",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "eclipse",
										"favored": false
								},
								"linguistics": {
										"name": "linguistics",
										"abr": "ling",
										"min": 0,
										"max": 5,
										"value": 1,
										"caste": "eclipse",
										"favored": false
								},
								"ride": {
										"name": "ride",
										"abr": "ride",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "eclipse",
										"favored": false
								},
								"sail": {
										"name": "sail",
										"abr": "sail",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "eclipse",
										"favored": false
								},
								"socialize": {
										"name": "socialize",
										"abr": "socl",
										"min": 0,
										"max": 5,
										"value": 1,
										"caste": "eclipse",
										"favored": false
								},
								"craft": {
										"name": "craft",
										"abr": "craf",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "twilight",
										"favored": false
								},
								"investigation": {
										"name": "investigation",
										"abr": "inv",
										"min": 0,
										"max": 5,
										"value": 3,
										"caste": "twilight",
										"favored": true
								},
								"lore": {
										"name": "lore",
										"abr": "lore",
										"min": 0,
										"max": 5,
										"value": 2,
										"caste": "twilight",
										"favored": true
								},
								"medicine": {
										"name": "medicine",
										"abr": "medi",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "twilight",
										"favored": false
								},
								"occult": {
										"name": "occult",
										"abr": "occ",
										"min": 0,
										"max": 5,
										"value": 0,
										"caste": "twilight",
										"favored": false
								}
						},
						"backgrounds": {
								"max": 5,
								"bucket": [
								{
										"name": "artifact",
										"abr": "arti",
										"value": 5,
										"details": [
											{
												"name": "Radiant Arbiter Behind the Mindful Veil",
												"value": 5
											}
										]
								}, {
										"name": "resources",
										"abr": "reso",
										"max": 5,
										"value": 3
								}, {
										"name": "followers",
										"abr": "fllw",
										"max": 5,
										"value": 1
								}
								]
						}
						,"charms": [
							{
								"domain": "Solar"
								,"name": "Forceful Arrow"
								,"type": "Supplemental"
								,"keywords" : ["combo-ok", "obvious", "knockback"]
								,"ability": "Archery"
								,"minimums":[{"name":"Archery", "value":4}, {"name":"Essence", "value":2}]
								,"prerequisites":[{"name": "There Is No Wind"}]
								,"cost": [{"name":"essence", "value": 3}, {"name":"willpower", "value":0}]
								,"bullshit": "insert bullshit here"
								,"tooltip": "Knock back a bitch"
							}
							,{
								"domain": "Solar"
								,"name": "There Is No Wind"
								,"type": "Supplemental"
								,"keywords" : ["combo-ok", "obvious", "knockback"]
								,"ability": "Archery"
								,"minimums":[{"name":"Archery", "value":4}, {"name":"Essence", "value":2}]
								,"prerequisites":[{"name": "There Is No Wind"}]
								,"cost": [{"name":"essence", "value": 3}, {"name":"willpower", "value":0}]
								,"bullshit": "insert bullshit here"
								,"tooltip": "Knock back a bitch"

							}
						]
				}

				// $http.get('characters/ash.json', {cache:false}).success(function(data) {
				// 	$scope.character = data;

				// });

				$scope.happy = true;

				$scope.getNumber = function(num) {
						return new Array(num);
				}

		}
]);


/*																								
angular.module('sistema.controllers', [])
	.controller('MyCtrl1', ['$scope', function($scope) {

	}])
	.controller('MyCtrl2', ['$scope', function($scope) {

	}]);
*/
