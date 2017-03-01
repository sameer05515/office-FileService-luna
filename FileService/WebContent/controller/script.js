angular.module('scopeExample', []).controller('MyController',
		[ '$scope', function($scope) {
			$scope.username = 'World';

			$scope.sayHello = function() {
				$scope.greeting = 'Hello ' + $scope.username + '!';
			};
		} ]);

angular
		.module('scopeExample', [])
		.controller(
				'fileSearchController',
				[
						'$scope',
						'$http',
						function($scope, $http) {
							// $scope.fileNames = [{name:'Agile Metrics in
							// Action.pdf'}];
							// $scope.fileNames = [{name:'Agile Metrics in
							// Action.pdf' ,
							// filePath:'C:/Users/796412/Desktop/readings/agile/Agile
							// Metrics in Action.pdf'} ,
							// {name:'AgileMethodologies.pdf' ,
							// filePath:'C:/Users/796412/Desktop/readings/agile/AgileMethodologies.pdf'}
							// , {name:'AgileMethods.pdf' ,
							// filePath:'C:/Users/796412/Desktop/readings/agile/AgileMethods.pdf'}
							// , {name:'Intro_to_Agile.pdf' ,
							// filePath:'C:/Users/796412/Desktop/readings/agile/Intro_to_Agile.pdf'}
							// , {name:'scrum_tutorial.pdf' ,
							// filePath:'C:/Users/796412/Desktop/readings/agile/scrum_tutorial.pdf'}];
							$scope.errorMessage = "";
							
							// /////////////////
							
							$scope.loadResult =function() {
								
								$scope.errorMessage = "Loading data...";
								$http(
										{
											method : 'POST',
											url : 'http://127.0.0.1:8888/FileService/fileService.jsp?fileName=C:/Users/796412/Desktop/readings/'
										})
										.success(function(data) {
											// set the list of roles with
											// $scope.roleList = data or
											// data.<SOMETHING>
											$scope.fileNames = data;
											$scope.errorMessage = "";
										})
										.error(
												function(data) {
													$scope.errorMessage += "There was an error fetching the list of available roles. Please reload the page and try again.";
												});
								
							};
							
							$scope.loadResult();

							

							// //////////////////

							// $scope.sayHello = function() {
							// $scope.greeting = 'Hello ' + $scope.username +
							// '!';
							// };
						} ]);