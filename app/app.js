﻿
(function () {

    angular.module('weather-widget', ['ngRoute'])
    .config(configure);

    function configure($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(false).hashPrefix("");

        $routeProvider.when('/list', {

            templateUrl: '/views/display.html',
            controller: 'weatherCtrl'            

        }).otherwise({
            redirectTo: '/list'
        });

    }


})();