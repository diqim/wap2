var app = angular.module("indexApp", ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.
  when('/', {
    template : '<div ng-include="viewTpl"></div>',
    controller : 'homeCtl'
  }).
  otherwise({
    redirectTo : '/'
  });
});

var data = [
    {"id":"11111","nama":"Guison","alamat":"Hongkong","email":"123@gmail.com"},
    {"id":"11112","nama":"Eriana","alamat":"Sleman","email":"123@gmail.com"},
    {"id":"11113","nama":"Luluk","alamat":"Lombok","email":"123@gmail.com"},
    {"id":"11114","nama":"Berry","alamat":"Sumbawa","email":"123@gmail.com"},
    {"id":"11115","nama":"Deva","alamat":"Bali","email":"123@gmail.com"}];

app.controller ('homeCtl', function($scope) {
  $scope.viewTpl = 'html/home.html';
  $scope.daftar = data;
});
