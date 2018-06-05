(function () { 
  var app = angular.module("myApp",["ngRoute"]);     /*global angular*/
    app.config(function($routeProvider) {
  	  $routeProvider
  		.when("/mainPage", {
  			templateUrl: "/templates/mainpage.html",
        /*templateUrl: "/NovelVisualiser/templates/mainpage.html",*/
  			controller: "mainController"
  		})
  		.when("/responsive", {
  			templateUrl: "/templates/responsive.html",
        /*templateUrl: "/NovelVisualiser/templates/responsive.html",*/
  			controller: "responsiveController"
  		})
  		.when("/addNovels", {
  		  templateUrl: "/templates/addNovels.html",
        /*templateUrl: "/NovelVisualiser/templates/addNovels.html",*/
  		  controller: "addNovelsController"
  		})
      .when("/novellist", {
        templateUrl: "/templates/novellist.html",
        /*templateUrl: "/NovelVisualiser/templates/novellist.html",*/
        controller: "novellistController"
      })
  		.otherwise({redirectTo: "/responsive"});
  });
}());
