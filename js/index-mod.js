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

app.controller ('homeCtl', function($scope) {
  $scope.viewTpl = 'Hello, apa kabar ?';
});
