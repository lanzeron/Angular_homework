SimpleApp.controller('OrderController', function($scope, $routeParams, simpleFactory, $http){
	simpleFactory.getProducts().pipe(function(response){
	$scope.products = response.prod;
	$scope.orders = response.order;
	for (var prod in $scope.products) {

		if ($scope.products[prod].id == $routeParams.id) {
			$scope.product = $scope.products[prod];

		}
	}
	$scope.AddOrder = function() {
		$http.post('/view3', {name:$scope.product.name, id:$scope.product.id});
	};

	$scope.OrdersRemove = function (id) {

		for (var i = 0; i < $scope.orders.length; i++){
			if 	($scope.orders[i].id == id) {
					$scope.orders.splice(i, 1);
					$http.post('/view2', {name:$scope.orders});
			}
		}

	};

	});

});
