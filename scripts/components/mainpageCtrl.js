(function () {
    'use strict';
    angular.module('insuranceProject').controller('mainpageCtrl',
        ['$scope', '$location','myFactory',function ($scope, $location,$myFactory) {
            $scope.begin = function () {
                if ($scope.fullname!=undefined && $scope.fullname!="") {
                    $myFactory.setFullname($scope.fullname);
                    $location.path('questions');
                }
            }
        }]);
})();