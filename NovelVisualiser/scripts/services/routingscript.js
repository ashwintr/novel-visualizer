(function () { 
  var app = angular.module("myApp",["ngRoute"]);     /*global angular*/
    app.config(function($routeProvider) {
  	  $routeProvider
  		.when("/mainPage", {
  			templateUrl: "/NovelVisualiser/templates/mainpage.html",
  			controller: "mainController"
  		})
  		.otherwise({redirectTo: "/mainPage"});
  });
}());
