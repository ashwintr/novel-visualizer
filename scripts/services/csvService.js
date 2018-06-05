(function() {
	var app = angular.module("myApp"); /*global angular*/
	var csvRead = function($scope,$http) {
		$http.get('/angular/sample.csv').success(function(allText) {
			// split content based on new line
			var allTextLines = allText.split(/\r\n|\n/);
			/*var headers = allTextLines[0].split(',');*/
			var lines = [];
			for ( var i = 0; i < allTextLines.length; i++) {
				// split content based on comma
				var data = allTextLines[i].split(',');
				/*if (data.length == headers.length) {*/
					var tarr = [];
					for ( var j = 0; j < data.length; j++) {
						tarr.push(data[j]);
					}
					lines.push(tarr);
				/*}*/
			}
			$scope.data = lines;
		});
		return {
			data: data
		};
	};
	app.factory("csvRead", csvRead);
}());