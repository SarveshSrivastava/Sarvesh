(function () {
    'use strict';
    angular.module('insuranceProject').controller('showhideCtrl',
        ['$scope', '$location', 'myFactory', function ($scope, $location, $myFactory) {
            let count = 0;
            // var x = window.matchMedia("(max-width: 450px)")
            // const url=window.location.href
            // $scope.init=function(){
            //     if (x.matches&&url==window.location.href) { // If media query matches
            //         document.body.style.backgroundColor = "azure";
            //         document.body.style.backgroundImage = "none"
            //       } 
            //       else{
            //         // document.body.style.backgroundColor = "azure";
            //         document.body.style.backgroundImage = url("../assets/img/BackgroundImage.png");
            //       }
            // }
            // x.addListener(customCss);

            $scope.custName = $myFactory.getFullname();
            // var customCss = {
            //     border: "solid red"
            // }
            $scope.fullname = $myFactory.getFullname();
            let mail = function (createEmail) {
                let lowerMail
                if (createEmail != undefined) {
                    lowerMail = createEmail.toLowerCase()
                    let emailArr = lowerMail.split(" ");
                    return emailArr[0].concat(".", emailArr[1], "@abcd.com")
                }
                else {
                    return lowerMail = "email@abcd.com"
                }

            }
            $scope.transactionNumber=Math.floor(100000000000 + Math.random() * 900000000000);
            $scope.email = mail($scope.fullname);
            $scope.organization = "ABCD"
            $scope.empId = "123456"
            $scope.dob = new Date("1997-12-29");
            $scope.joiningDate = new Date("2019-06-12");
            $scope.grade = "A";
            $scope.address = "Street No-3, LA"
            // window.addEventListener('scroll', function() {
            //     if (window.scrollY > 50) {
            //       document.getElementById('z').classList.add('fixed-bottom');
            //       // add padding top to show content behind navbar
            //       navbar_height = document.querySelector('.z').offsetHeight;
            //       document.body.style.paddingTop = navbar_height + 'px';
            //     } else {
            //       document.getElementById('z').classList.remove('fixed-bottom');
            //        // remove padding top from body
            //       document.body.style.paddingTop = '0';
            //     } 
            // });
            $scope.previousButton = "Previous"
            $scope.nextButton = "Next"
            $scope.detailsForm = true;
            $scope.beneficiaryTable = false;
            $scope.note = false;
            $scope.cardPayment = false;
            $scope.accidentInfo = true;
            // $scope.paymentInfo = false;
            $scope.pageImg = true;
            $scope.page2table = false;
            $scope.page2table1 = false;
            // $scope.nextButton = true
            // $scope.prevButton = true
            // $scope.inputValue=function(){
            //     if(($scope.fullname!=undefined)&&($scope.email!=undefined)&&($scope.organization!=undefined)&&($scope.empId!=undefined)&&($scope.dob!=undefined)&&($scope.joiningDate!=undefined)&&($scope.grade!=undefined)&&($scope.address!=undefined)){
            //         $scope.nextButton = false
            //     }
            //     else{
            //         $scope.nextButton = true
            //     }
            // }

            $scope.nextPage = function () {
                // if(count==0){
                //     if($scope.fullname!=undefined||$scope.fullname!=''){
                //         $("#fullname").css(customCss)
                //     }
                //     else{
                //         count++;
                //     }

                // }

                count++;
                if (count == 1) {
                    $scope.detailsForm = false;
                    $scope.beneficiaryTable = true;
                    $scope.note = false;
                    $scope.cardPayment = false;
                    $scope.accidentInfo = true;
                    // $scope.paymentInfo = false;
                    $scope.pageImg = false;
                    $scope.page2table = true;
                    $scope.page2table1 = false;
                }
                else if (count == 2) {
                    $scope.previousButton = "Cancel"
                    $scope.nextButton = "Confirm"
                    $scope.detailsForm = false;
                    $scope.beneficiaryTable = false;
                    $scope.note = true;
                    $scope.cardPayment = false;
                    $scope.accidentInfo = false;
                    // $scope.paymentInfo = true;
                    $scope.pageImg = true;
                    $scope.page2table = false;
                    $scope.page2table1 = true;
                }
                else if (count == 3) {
                    $scope.previousButton = "Cancel"
                    $scope.nextButton = "Pay Now"
                    $scope.detailsForm = false;
                    $scope.beneficiaryTable = false;
                    $scope.note = false;
                    $scope.cardPayment = true;
                    $scope.accidentInfo = false;
                    // $scope.paymentInfo = true;
                    $scope.pageImg = true;
                    $scope.page2table1 = true;
                    $scope.page2table = false;
                }
                else if(count == 4){
                    $("#PaymentModal").modal("show");
                }
            }
            $scope.previousPage = function () {
                count--;
                if (count == 0) {
                    $scope.detailsForm = true;
                    $scope.beneficiaryTable = false;
                    $scope.note = false;
                    $scope.cardPayment = false;
                    $scope.accidentInfo = true;
                    // $scope.paymentInfo = false;
                    $scope.pageImg = true;
                    $scope.page2table = false;
                    $scope.page2table1 = false;
                }
                else if (count == 1) {
                    $scope.detailsForm = false;
                    $scope.beneficiaryTable = true;
                    $scope.note = false;
                    $scope.cardPayment = false;
                    $scope.accidentInfo = true;
                    // $scope.paymentInfo = false;
                    $scope.pageImg = false;
                    $scope.page2table = true;
                    $scope.page2table1 = false;
                }
                else if (count == 2) {
                    $scope.previousButton = "Cancel"
                    $scope.nextButton = "Confirm"
                    $scope.detailsForm = false;
                    $scope.beneficiaryTable = false;
                    $scope.note = true;
                    $scope.cardPayment = false;
                    $scope.accidentInfo = false;
                    // $scope.paymentInfo = true;
                    $scope.pageImg = true;
                    $scope.page2table1 = true;
                    $scope.page2table = false;
                }
                else if (count == 3) {
                    $scope.previousButton = "Cancel"
                    $scope.nextButton = "Pay Now"
                    $scope.detailsForm = false;
                    $scope.beneficiaryTable = false;
                    $scope.note = false;
                    $scope.cardPayment = true;
                    $scope.accidentInfo = false;
                    // $scope.paymentInfo = true;
                    $scope.pageImg = true;
                    $scope.page2table = false;
                    $scope.page2table1 = true;
                }
                else {
                    $location.path('insurance');
                }
            }
            $scope.addBeneButton = true
            $scope.inputBeneValue = function () {
                if ($scope.bene.relation != undefined && $scope.bene.relation != '' && $scope.bene.dob != undefined && $scope.bene.dob != '' && $scope.bene.name != undefined && $scope.bene.name != '') {
                    $scope.addBeneButton = false
                }
            }
            $scope.beneRelations = [
                { id: 1, name: 'Father' },
                { id: 2, name: 'Mother' },
                { id: 3, name: 'Spouse' },
                { id: 4, name: 'Child' },
                { id: 5, name: 'Father-in-law' },
                { id: 6, name: 'Mother-in-law' }
            ];
            //  $scope.bene.relation= $scope.beneRelations[0];
            $scope.beneficiary = []
            $scope.addBene = function (bene) {
                $scope.beneficiary.push({
                    'beneName': bene.name,
                    'beneRelation': bene.relation.name,
                    'beneDob': bene.dob,
                    'benePercentage': bene.percentage
                })
                console.log($scope.beneficiary)
                $scope.bene = {}
                $scope.addBeneButton = true;
            }
            $scope.closePopUp = function () {
                $scope.bene = {}
            }
            $scope.homePage=function(){
                $location.path('/')
            }

        }]);
})();