(function () {
    'use strict';
    angular.module('insuranceProject', ['ngRoute','my-Factory'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/mainpage.html',
                    controller: "mainpageCtrl"
                })
                .when('/insurance', {
                    templateUrl: 'views/insurance-overview.html',
                    controller: "insuranceCtrl"
                })
                .when('/questions', {
                    templateUrl: 'views/questions.html',
                    controller: "questionsCtrl"
                })
                .when('/showhide', {
                    templateUrl: 'views/showhide.html',
                    controller: "showhideCtrl"
                });
            $locationProvider.hashPrefix('');
        })

})();