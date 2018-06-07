(function () { 
  var app = angular.module("myApp",["ngRoute"]);     /*global angular*/
    app.config(function($routeProvider) {
  	  $routeProvider
  		.when("/responsive", {
  			templateUrl: "/templates/responsive.html",
  			controller: "responsiveController"
  		})
  		.when("/addNovels", {
  		  templateUrl: "/templates/addNovels.html",
  		  controller: "addNovelsController"
  		})
      .when("/novellist", {
        templateUrl: "/templates/novellist.html",
        controller: "novellistController"
      })
  		.otherwise({redirectTo: "/responsive"});
  });
}());
