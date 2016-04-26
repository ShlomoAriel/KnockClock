var MainCtrl = function ($rootScope, $scope, $state,CommonServices) {
     CommonServices.getSites();
    CommonServices.getWorkers();
    CommonServices.getHours();
    $scope.tabs = [
        { heading: "שעות", route: "main.home", active: false },
        { heading: "עובדים", route: "main.workers", active: false },
        { heading: "אתרים", route: "main.sites", active: false },
        { heading: "התחברות", route: "main.signin", active: false }
    ];
    
    $scope.go = function (route, params) {
        $state.go(route, params);
    };

    $scope.active = function (route) {
        return $state.is(route);
    };

    $scope.$on("$stateChangeSuccess", function () {
        $scope.tabs.forEach(function (tab) {
            tab.active = $scope.active(tab.route);
        });
    });

};
angular.module("app").controller("MainCtrl", MainCtrl);