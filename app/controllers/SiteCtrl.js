var SiteCtrl = function($scope, CommonServices, $filter) {
    $scope.sites = CommonServices.sites;
    if($scope.sites.length==0)
    {
        CommonServices.getSites();
    }
    $scope.addSite = function () {
        var site = {};
        site.manager = "shlomo@gmail.com";
        site.siteName = $scope.siteName;
        CommonServices.addSite(site).then(function () {
            CommonServices.getSites();
        });
    }
}