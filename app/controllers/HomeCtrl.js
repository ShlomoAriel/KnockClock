var HomeCtrl = function($scope, CommonServices,$filter) {
    $scope.task={};
    $scope.startTime=0;
    $scope.endTime=0;
    $scope.sites = CommonServices.sites;
    $scope.workers = CommonServices.workers;
    $scope.hours = CommonServices.hours;
   
    var d = new Date();
    d.setHours( 06 );
    d.setMinutes( 0 );
    $scope.start =d;
     var d2 = new Date();
    d2.setHours( 16 );
    d2.setMinutes( 0 );
    $scope.end= d2;
    $scope.task.hourlyRate=30;
    $scope.task.commute=0; 
    $scope.addTask = function() {
         $scope.task.date =$filter('date')($scope.date, 'dd/MM/yyyy');
         $scope.task.startTime =$filter('date')($scope.start, 'HH:mm');
         $scope.task.endTime =$filter('date')($scope.end, 'HH:mm');
         $scope.task.siteName=$scope.site.name;
         $scope.task.manager="shlomo@gmail.com";
         $scope.task.worker = $scope.worker.username;
         $scope.task.workerName = $scope.worker.name;
         CommonServices.addTask($scope.task).then(function(){
             CommonServices.getHours();
         });
    }
    $scope.addWorker = function() {
        var worker={};
        worker.manager="shlomo@gmail.com";
        worker.username=$scope.newWorker.username;
        worker.name=$scope.newWorker.name;
        CommonServices.addWorker(worker);
    }
    $scope.addSite = function() {
        var site={};
        site.manager="shlomo@gmail.com";
        site.siteName=$scope.siteName;
        CommonServices.addSite(site);
    }
    $scope.calculateTotal = function() {
        var totalMilliseconds = $scope.end - $scope.start;
        var seconds = totalMilliseconds / 1000;
        var hours = totalMilliseconds / (1000 * 3600);
        $scope.task.hours=hours
        $scope.task.total = ($scope.task.hours) * $scope.task.hourlyRate + $scope.task.commute;
    
    };

    $scope.$watch('end', function(newValue) {
        if (newValue != null) {
            var time = {};
            time.hour = (newValue).getHours();
            time.minute = (newValue).getMinutes();
            $scope.endTime = time;
            $scope.calculateTotal();
        }
    });
    $scope.$watch('start', function(newValue) {
        if (newValue != null) {
            var time = {};
            time.hour = (newValue).getHours();
            time.minute = (newValue).getMinutes();
            $scope.startTime = time;
            $scope.calculateTotal();
        }
    });
    $scope.deleteHours = function () {
        var id = this.item._id;
        CommonServices.deleteHours(id).then(function(){
            $("#item_" + id).fadeOut(500);
        });
        
        
    };
  
  $scope.date = new Date();
  $scope.date.showWeeks=false;
  $scope.valuationDatePickerIsOpen = false;
  
  $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1,
        'showWeeks':false,
        'show-button-bar':false
    };
  
  $scope.valuationDatePickerOpen = function () {

      this.valuationDatePickerIsOpen = true;
  };
}