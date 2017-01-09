(function() {
	var app = angular.module("myApp");	/*global angular*/
	var responsiveController = function($scope, $http) {
		/*$scope.rate = 1;*/
		$scope.updateRate = function() {
			$scope.rate = this.rate;
			angular.forEach($scope.data,(value,key) => {
				value.eta=(value.total-value.read)/this.rate;
			});
		};
		var csvRead = function() {
			$http.get('/NovelVisualiser/data/novels.csv').success(function(allText) {
				// split content based on new line
				var allTextLines = allText.split(/\r\n|\n/);
				/*var headers = allTextLines[0].split(',');*/
				var lines = [];
				for ( var i = 0; i < allTextLines.length; i++) {
					// split content based on comma
					var data = allTextLines[i].split(',');
					/*if (data.length == headers.length) {*/
					var tarr = [];
					var columns = ["id","title","status","read","total"];
					var tarr = {};
					for ( var j = 0; j < data.length; j++) {
						tarr[columns[j]]=data[j];
					}
					tarr.progress = (tarr.read/tarr.total)*100;
					lines.push(tarr);
					/*tarr.rate =  ["1", "2", "3", "5"];*/
					tarr.eta = (tarr.total-tarr.read)/tarr.rate;
					console.log($scope.rate);
					/*}*/
				}
				$scope.data = lines;
				$scope.rates = ["1", "2", "3", "5"];
				console.log($scope.data);
			});
		};
		csvRead();
	};
	app.controller("responsiveController", ["$scope","$http", responsiveController]);
}());