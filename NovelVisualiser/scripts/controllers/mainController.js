(function() {
	var app = angular.module("myApp");	/*global angular*/
	var mainController = function($scope) {
		$scope.novel = { /*[ 
			{*/
				sno: "1.",
				name: "PMG",
				status: "Completed",
				progress:"826",
				total: "2500",
				rate: "2",
				eta: "413" 
					/*},
			{
				sno: "2",
				name: "GOS",
				status: "Completed",
				progress:"936",
				total: "1632",
				rate: "2",
				eta: "468" 
			} ]*/
		};
	};
	app.controller("mainController", mainController);
});
