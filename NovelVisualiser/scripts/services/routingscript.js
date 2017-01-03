(function () { 
  var app = angular.module("myApp",[]);     /*global angular*/
    app.config(function($routeProvider) {
  	  $routeProvider
  		.when("/mainPage", {
  			templateUrl: "/NovelVisualiser/templates/mainpage.html",
  			controller: "/NovelVisualiser/controllers/mainController"
  		})
  		.otherwise({redirectTo: "/mainPage"});
  });
}());
