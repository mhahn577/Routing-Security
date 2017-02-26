var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var MainController = (function () {
            function MainController($state) {
                this.$state = $state;
            }
            return MainController;
        }());
        Controllers.MainController = MainController;
        angular.module('MyApp').controller('MainController', MainController);
        var HomeController = (function () {
            function HomeController() {
                this.message = 'Hello from Home!!!';
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var SecretController = (function () {
            function SecretController() {
                this.message = 'Hello from Secret!!!';
            }
            return SecretController;
        }());
        Controllers.SecretController = SecretController;
        var PublicController = (function () {
            function PublicController() {
                this.message = 'Hello from Public!!!';
            }
            return PublicController;
        }());
        Controllers.PublicController = PublicController;
        var LoginController = (function () {
            function LoginController($state) {
                this.$state = $state;
                this.message = 'Hello from Login!!!';
            }
            LoginController.prototype.doSomething = function () {
                this.$state.go('Page1');
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
