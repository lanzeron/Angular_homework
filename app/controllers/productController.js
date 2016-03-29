SimpleApp.controller('productController', function($scope, simpleFactory, $http) {
	simpleFactory.getProducts().pipe(function(response){
		$scope.products = response.prod;
		$scope.orders = response.order;



	$scope.addProduct = function() {
	$http.post('/view4', {name:$scope.newProduct.name, description:$scope.newProduct.description, image:$scope.newProduct.image});

};
	 });
});
