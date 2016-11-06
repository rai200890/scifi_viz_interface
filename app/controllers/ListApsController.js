angular.module('wifiUffLocation').controller("ListApsController",
function ListApsController($scope, Ap){
    $scope.aps = [];
    Ap.query().success(function(data){
        $scope.aps = data;
    });
    $scope.displayedAps = [].concat($scope.aps);
});
