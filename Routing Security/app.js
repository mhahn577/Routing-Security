var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router', 'ngResource']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('Home', {
            url: '/',
            templateUrl: 'index.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('Secret', {
            url: '/secret',
            templateUrl: 'secret.html',
            controller: MyApp.Controllers.SecretController,
            controllerAs: 'controller',
            data: {
                requiresAuthentication: true
            }
        })
            .state('Public', {
            url: '/public',
            templateUrl: 'public.html',
            controller: MyApp.Controllers.PublicController,
            controllerAs: 'controller'
        })
            .state('Login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: MyApp.Controllers.LoginController,
            controllerAs: 'controller'
        });
        $locationProvider.html5Mode(true);
    });
    angular.module('MyApp').run(function ($rootScope, $state, accountService) {
        $rootScope.$on('$stateChangeStart', function (e, to) {
            if (to.data && to.data.requiresAuthentication) {
                if (!accountService.isLoggedIn()) {
                    e.preventDefault();
                    $state.go('login');
                }
            }
        });
    });
})(MyApp || (MyApp = {}));
