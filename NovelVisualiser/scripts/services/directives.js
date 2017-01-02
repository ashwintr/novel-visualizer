  (function() {
	var app = angular.module("myApp");
	var csvRead = function() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "/templates/directives/novelList.html"
		}
	};
	app.directive("csvRead", csvRead);
});
