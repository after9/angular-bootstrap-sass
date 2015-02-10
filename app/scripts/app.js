/**
 * Created by Ron on 15/2/10.
 */


angular.module('myApp', ['ngRoute','ui.router'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'views/main.html',
//                controller: ''
            })
            .otherwise({
                redirectTo: '/'
            });
    });