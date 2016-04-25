app.service('CommonServices', function($http, $q) {
    var _data = this;
    _data.state = {
        loading: true
    };
    _data.sites = [];
    _data.workers = [];
    _data.hours = [];

    _data.getSites = function() {
        var promise =
            $http.get('http://elated-lion-ms0f.rapidapi.io/getsites')
                .success(function(data, textStatus, jqXHR) {
                    console.log("HTTP Request Succeeded: " + jqXHR.status);
                    angular.copy(data, _data.sites);
                });
        return promise;
    };
    _data.getWorkers = function() {
        var promise =
            $http.get('http://elated-lion-ms0f.rapidapi.io/getworkers')
                .success(function(data, textStatus, jqXHR) {
                    console.log("HTTP Request Succeeded: " + jqXHR.status);
                    angular.copy(data, _data.workers);
                });
        return promise;
    };
    _data.getHours = function() {
        var promise =
            $http.post('http://elated-lion-ms0f.rapidapi.io/gethours', {
              manager:"shlomo@gmail.com",password:123456789
        })
                .success(function(data, textStatus, jqXHR) {
                    console.log("HTTP Request Succeeded: " + jqXHR.status);
                    angular.copy(data, _data.hours);
                });
        return promise;
    };
    _data.addTask = function(task) {
        var promise =
            $http.post('http://elated-lion-ms0f.rapidapi.io/add-task', task)
                .success(function(data, textStatus, jqXHR) {
                    console.log("HTTP Request Succeeded: " + jqXHR.status);
                    console.log(data);
                });
        return promise;
    };
    _data.addWorker = function(worker) {
        var promise =
            $http.post('http://elated-lion-ms0f.rapidapi.io/addworker', worker)
                .success(function(data, textStatus, jqXHR) {
                    console.log("HTTP Request Succeeded: " + jqXHR.status);
                    console.log(data);
                });
        return promise;
    };
    _data.addSite = function(site) {
        var promise =
            $http.post('http://elated-lion-ms0f.rapidapi.io/addsite', site)
                .success(function(data, textStatus, jqXHR) {
                    console.log("HTTP Request Succeeded: " + jqXHR.status);
                    console.log(data);
                });
        return promise;
    };
    
    _data.deleteHours = function(id) {
        var promise =
              $http.post("http://elated-lion-ms0f.rapidapi.io/deletehours",{ id: id,manager:"shlomo@gmail.com",password:123456789});
              
        return promise;
    };
    
  
});




