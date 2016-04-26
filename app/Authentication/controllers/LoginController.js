'use strict';
app.controller('LoginController', ['$scope', '$state','authService', function ($scope, $state, authService) {

    $scope.loginData = {
        username: "",
        password: ""
    };
        $scope.message = "";
    

    $scope.login = function () {
            authService.login($scope.loginData).then(function (response) {
            $state.go('main.home');
        },
         function (err) {
             $scope.message = err.error_description;
         });
        
    };

}]);