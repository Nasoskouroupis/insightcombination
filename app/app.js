var app = angular.module('insight', []);
app.requires.push('ngRoute');


app.config(function ($routeProvider) {
    $routeProvider
        .when('/home/:data', {
            template: '<first-page></first-page>',
            resolve: {
                configData: function (session) {
                    return session.getConfig();
                }
            }
        });
});