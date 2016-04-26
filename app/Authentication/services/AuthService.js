'use strict';
app.factory('authService', ['$http', '$q', function($http, $q) {
    var authServiceFactory = {};
    var _deleteUser = function(userName) {
        return $http.delete('');
    };
    var _saveRegistration = function(registration) {

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

    return authServiceFactory;
}]);