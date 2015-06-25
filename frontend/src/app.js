var app = angular.module('app', ['ui.router', 'templates-main']);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: "home.html",
                controller: 'HomeCtrl',
                pageTitle: 'Hi! Welcome to Ricardo Mallols personal site'
            })

            .state('skills', {
                url: '/skills',
                templateUrl: "skills.html",
                controller: 'SkillsCtrl',
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