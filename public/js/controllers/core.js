
function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all Brackets and show them
	$http.get('/api/brackets')
		.success(function(data) {
			$scope.brackets = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createBracket = function() {
		$http.post('/api/brackets', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form
				$scope.brackets = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a Bracket after checking it
	$scope.deleteBracket = function(id) {
		$http.delete('/api/brackets/' + id)
			.success(function(data) {
				$scope.brackets = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}
