var app = angular.module('insight', []);
app.requires.push('ngRoute');


app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            template: '<first-page></first-page>'
        });
    $locationProvider.html5Mode(true);

});