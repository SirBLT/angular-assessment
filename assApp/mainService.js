angular.module('assessment')
.service('mainService', function($http) {
    var appUrl = 'http://practiceapi.devmounta.in/products/'
    
    this.getProducts = function () {
        return $http.get(appUrl)
    }

    this.getAProduct = function (id) {
        return $http.get(appUrl + id)
    }
            
})  
