namespace MyApp.Controllers {

    export class MainController {
        constructor(public $state: ng.ui.IStateService) { }
    }
    angular.module('MyApp').controller('MainController', MainController);

    export class HomeController {
        public message = 'Hello from Home!!!';
    }

    export class SecretController {
        public message = 'Hello from Secret!!!';
    }

    export class PublicController {
        public message = 'Hello from Public!!!';
    }

    export class LoginController {
        public message = 'Hello from Login!!!'
        doSomething() {
            this.$state.go('Page1');
        }

        constructor(private $state: ng.ui.IStateService) { }
    }
}
