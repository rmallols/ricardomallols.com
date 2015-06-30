var app = angular.module('app', ['ui.router', 'templates-main']);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('who', {
                url: '/',
                templateUrl: "who.html",
                controller: 'WhoCtrl',
                pageTitle: 'Hi! Welcome to Ricardo Mallols personal site'
            })

            .state('what', {
                url: '/what',
                templateUrl: "what.html",
                controller: 'WhatCtrl',
                pageTitle: 'What I do?'
            })

            .state('where', {
                url: '/where',
                templateUrl: "where.html",
                controller: 'WhereCtrl',
                pageTitle: 'Where I am?'
            });

        $urlRouterProvider.otherwise("/");
    }]);

app.run(['$rootScope', 'browser', function ($rootScope, browser) {
    $rootScope.userAgent = browser.getUA();
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $rootScope.pageTitle = toState.pageTitle + ' | menzit';
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $rootScope.state = toState.name;
        $rootScope.pageTitle = toState.pageTitle;
    });
}]);