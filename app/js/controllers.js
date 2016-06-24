'use strict';

/* Controllers */
<<<<<<< HEAD
var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

phonecatApp.config(['$routeProvider', function ($routeProvide) {
    $routeProvide
        .when('/', {
            templateUrl: '/template/home.html',
            controller: 'PhoneListCtrl'
        })
        .when('/about', {
            templateUrl: '/template/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact', {
            templateUrl: '/template/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/phones/:phoneId', {
            templateUrl: '/template/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

phonecatApp.filter('checkmark', function(){
    return function(input){
        return input ? '\u2713' : '\u2718'
    }
});

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    //$scope.title ="Телефоны";
    console.log('$location.url() - ', $location.url());
    console.log('$location.path() - ', $location.path());
    console.log('$location.search() - ', $location.search());
    console.log('$location.hash() - ', $location.hash());

    $http.get('phones/phones.json').success(function (data, status, headers, config) {
        //console.log('This is Data:', data,'\n\n This is Status:', status, '\n\n This is Headers:', headers, '\n\n This is Config:', config);
        $scope.phones = data;
    });

}]);
phonecatApp.controller('AboutCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
phonecatApp.controller('ContactCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
    var url = ' phones/' + $routeParams.phoneId + '.json';

    $http.get(url).success(function (data) {
        //console.log('This is Data:', data,'\n\n This is Status:', status, '\n\n This is Headers:', headers, '\n\n This is Config:', config);
        $scope.phone = data;
    });
}]);

=======

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
>>>>>>> master
