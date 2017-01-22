(function () { 
  var app = angular.module("myApp",["ngRoute"]);     /*global angular*/
    app.config(function($routeProvider) {
  	  $routeProvider
  		.when("/responsive", {
  			templateUrl: "/novel-visualizer/NovelVisualiser/templates/responsive.html",
  			controller: "responsiveController"
  		})
  		.when("/mainPage", {
  			templateUrl: "/novel-visualizer/NovelVisualiser/templates/mainpage.html",
  			controller: "mainController"
  		})
  		.when("/addNovels", {
  		  templateUrl: "/novel-visualizer/NovelVisualiser/templates/addNovels.html",
  		  controller: "addNovelsController"
  		})
  		.otherwise({redirectTo: "/mainPage"});
  });
}());
