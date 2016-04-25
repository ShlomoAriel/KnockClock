'use strict';
app.factory('authService', ['$http', '$q', function($http, $q) {

    var serviceBase = 'http://localhost:55460/';
    var authServiceFactory = {};

    var _getUsers = function() {
        return $http.get(serviceBase + 'api/account/GetUsers');
    };
    var _deleteUser = function(userName) {
        return $http.delete(serviceBase + 'api/account/DeleteUser?email=' + userName);
    };
    var _saveRegistration = function(registration) {

        // _logOut();


        jQuery.ajax({
            url: "http://elated-lion-ms0f.rapidapi.io/sign-up",
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            data: {
                "username": registration.userName,
                "password": registration.password
            },
        })
            .done(function(data, textStatus, jqXHR) {
                console.log("HTTP Request Succeeded: " + jqXHR.status);
                console.log(data);
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.log("HTTP Request Failed");
            })
            .always(function() {
                /* ... */
            });



        // return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        //     return response;
        // });

    };


    var _login = function(loginData) {

        $scope.signin = function() {
            jQuery.ajax({
                url: "http://elated-lion-ms0f.rapidapi.io/sign-in",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    "email": "shlomo@gmail.com",
                    "password": "123456789",
                },
            })
                .done(function(data, textStatus, jqXHR) {
                    console.log("HTTP Request Succeeded: " + jqXHR.status);
                    console.log(data);
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    console.log("HTTP Request Failed");
                })
                .always(function() {
                    /* ... */
                });
        }

    };
    var _login = function(data) {
        var promise =
            $http.post('http://elated-lion-ms0f.rapidapi.io/sign-in', data)
                .success(function(data, textStatus, jqXHR) {
                    console.log("HTTP Request Succeeded: " + jqXHR.status);
                    console.log(data);
                });
        return promise;
    };

    var _logOut = function() {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";

    };

    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.deleteUser = _deleteUser;
    authServiceFactory.getUsers = _getUsers;

    return authServiceFactory;
}]);