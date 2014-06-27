var sampleApp = angular.module('sampleApp', []);

sampleApp.controller('sampleAppController', ['$scope', function($scope) {
		
		// ha valodi alkalmazas lenne akkor AJAX get json eredmenye lenne
		$scope.games = [
			{ 	name : "Elso jatek", 
				question : "Hany eves a kapitany?",
				options: [ { text: "Egy" }, { text: "Ketto" }, { text: "Harom" } ],
				filled: false
			},
			{ 	name : "Masodik jatek", 
				question : "Hany fejleszto kell ehhez a feladathoz?",
				options: [ { text: "Negy" }, { text: "Ot" }, { text: "Hat" } ],
				filled: false
			}
		];

		$scope.filling = false;

		$scope.fillQuiz = function (quiz, $index) {
			$scope.filling = true;
			$scope.fillingQuiz = quiz;
		};

		$scope.submitQuiz = function () {
			// ha valodi alkalmazas lenne akkor AJAX post
			$scope.filling = false;
			$scope.fillingQuiz.filled = true;
		};

		$scope.isEverytingFilled = function () {
			return _.every($scope.games, function (game) {
				return game.filled
			});
		}

    }
]);