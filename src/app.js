var app = angular
			.module("myapp", ['ngMaterial'])
			.controller("myCtrl", function($scope, $http){
				$scope.currencies = {};

				$scope.getCurrencies = function(){
					$http.get("https://data.fixer.io/api/symbols?access_key=a22225565c9b3d18d2ebb3694ef5f6e4")
						.then(function(response){
							console.log(response);
							$scope.currencies = response.data.symbols;	
						});	
				}

				$scope.convert = function(){
					$http.get("https://data.fixer.io/api/convert?access_key=a22225565c9b3d18d2ebb3694ef5f6e4&from=" + $scope.currencyFrom + "&to=" + $scope.currencyTo + "&amount=" + $scope.amount)
						 .then(function(response){
						 	console.log(response);
						 	$scope.convertedCurrency = response.data.result;
						 	$scope.timestamp = response.data.info.timestamp;
						 });
				}
			});
