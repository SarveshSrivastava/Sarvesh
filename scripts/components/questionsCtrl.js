(function () {
    'use strict';
    angular.module('insuranceProject').controller('questionsCtrl',
        ['$scope', '$location', 'myFactory', function ($scope, $location, $myFactory) {
            let count = 1;
            $scope.ans1 = "";
            // $scope.ans2 = "";
            $scope.previousIsDisabled = true;
            $scope.page = 1;
            $scope.nextIsDisabled = true;
            $scope.fullname=$myFactory.getFullname();
            
            $('#age').bind("cut copy paste", function (e) {
                e.preventDefault();
            });
            $('#age').keypress(function (e) {
                var keyCode = e.which;
                /*
                  8 - (backspace)
                  32 - (space)
                  48-57 - (0-9)Numbers
                */

                if ((keyCode != 8 || keyCode == 32) && (keyCode < 48 || keyCode > 57)) {
                    return false;
                }
            });

            $scope.EnableDisable = function () {

                $scope.nextIsDisabled = $scope.ans1 == undefined || $scope.ans1 == "";

            }

            $scope.newValue = function (value) {
                $scope.nextIsDisabled = value == undefined || value == "";
                console.log(value);
            }
            let pageValidation = function (count) {
                let arrOfModel = [$scope.ans1, $scope.ans2, $scope.ans3, $scope.ans4, $scope.ans5, $scope.ans6, $scope.ans7]
                for (let i = 1; i < 8; i++) {
                    if (i == count) {
                        if (arrOfModel[i - 1] != undefined && arrOfModel[i - 1] != "") {
                            $scope.nextIsDisabled = false;
                        }
                        else {
                            $scope.nextIsDisabled = true;
                        }
                    }
                }
            }
            

            $scope.previousButton = function () {
                count -= 1;
                $scope.page = count;
                if (count == 1) {
                    $scope.previousIsDisabled = true;
                }
                pageValidation(count);
            }
            $scope.nextButton = function () {

                $scope.nextIsDisabled = true;
                count += 1;
                $scope.page = count;
                if (count == 9) {
                    $location.path('insurance');
                }
                if(count<8){
                    pageValidation(count);
                }
                else{
                    $scope.nextIsDisabled = false;
                }
                if (count > 1) {
                    $scope.previousIsDisabled = false;
                }
                if($scope.ans5=='Accident prone'){
                    $myFactory.setAnswer($scope.ans5)
                }
                if($scope.ans7=='Yes'){
                    $myFactory.setAnswer($scope.ans7)
                }
            }
        }])
})();