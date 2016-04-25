var app = angular.module("app", ["ui.router", "ui.bootstrap"]);
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/main/home");

    $stateProvider
        .state("main", { abstract: true, url: "/main", controller: "MainCtrl", templateUrl: "templates/main.html" })
        .state("main.home", { url: "/home", controller: HomeCtrl, templateUrl: "templates/home.html" })
        .state("main.signup", { url: "/signup", controller: "SignupController", templateUrl: "templates/signup.html" })
        .state("main.signin", { url: "/signin", controller: "LoginController", templateUrl: "templates/signin.html" })
        .state("main.workers", { url: "/workers", controller: HomeCtrl, templateUrl: "templates/workers.html" })
        .state("main.sites", { url: "/sites", controller: HomeCtrl, templateUrl: "templates/sites.html" });
});