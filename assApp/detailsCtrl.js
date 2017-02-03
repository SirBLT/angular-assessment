angular.module('assessment')
.controller('detailsCtrl', function($scope, mainService, $stateParams){
  mainService.getProducts()
  .then(function(products){
    $scope.products = products.data;
  });
  mainService.getAProduct($stateParams.id)
  .then(function(response){
    $scope.yourProduct = response.data;
  });
})