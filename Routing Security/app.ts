namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
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


        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });


    angular.module('MyApp').run((
        $rootScope: ng.IRootScopeService,
        $state: ng.ui.IStateService,
        accountService: MyApp.Services.AccountService
    ) => {
            $rootScope.$on('$stateChangeStart', (e, to) => {
                // protect non-public views
                if (to.data && to.data.requiresAuthentication) {
                    if (!accountService.isLoggedIn()) {
                        e.preventDefault();
                        $state.go('login');
                    }
                }
            });
    });
}
