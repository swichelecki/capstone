(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider
            .state('landing', {
            url: '/',
            controller: 'LandingCtrl as landing',
            templateUrl: '/templates/landing.html'
        }).state('pageTwo', {
            url: 'pageTwo',
            controller: 'PageTwoCtrl as pageTwo',
            templateUrl: '/templates/pagetwo.html'
        }).state('pageThree', {
            url: 'pageThree',
            controller: 'PageThreeCtrl as pageThree',
            templateUrl: 'templates/pagethree.html'
        });
    
    }
    
    angular
    .module('capstone', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'firebase'])
    .config(config); 
})();