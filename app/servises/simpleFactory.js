SimpleApp.factory('simpleFactory', function($http){

  var factory={};
  factory.getProducts = function () {
    var deferred = $.Deferred();
    $http.get('/view4').success(function (response) {
    var	products = response;
      deferred.resolve(products);
    });
    return deferred.promise();
  };
  return factory;

});
