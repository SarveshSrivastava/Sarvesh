(function () {
    'use strict';
    angular.module('insuranceProject').controller('insuranceCtrl',
        ['$scope', '$location', 'myFactory', function ($scope, $location, $myFactory) {

            $scope.cart = [{
                id: 1,
                title: "Accident Insurance",
                description: "Injury prone? Weekend warrior? Have children who play sports? When an unexpected injury happens, accident insurance can help offset costs that are not covered by your medical plan. The benefit is paid directly to you and can be used for out-of-pocket costs like co-pays, deductibles and other expenses."
            }, {
                id: 2,
                title: "Cancer Insurance",
                description: "Cancer insurance pays benefits to help pay for some of the direct medical and indirect non-medical costs related to cancer diagnosis and treatment. It can help pay for expenses that your health plan isn't designed to cover, like deductibles, coinsurance and travel to and from cancer treatment centers. Most plans offer options to help protect your spouse or children, as well."
            }, {
                id: 3,
                title: "Critical Illness Insurance",
                description: "Critical illness insurance offers you a lump-sum benefit when you are initially diagnosed with a serious condition. Certain plans also include options for extended benefits for cancer treatment. It can help pay for expenses that your health plan isn't designed to cover. Most plans offer family options to help protect your spouse or children, as well."
            }, {
                id: 4,
                title: "Disability Insurance",
                description: "Disability insurance is protection for the thing that matters most — your ability to earn an income. Sometimes referred to as paycheck protection, this insurance can replace a portion of your income if you are unable to work because of the birth of a new child, any covered injury or an illness."
            }, {
                id: 5,
                title: "Hospital Confinement Indemnity Insurance",
                description: "With medical costs on the rise, you may be faced with having to pay more for things that your health insurance won't cover. Hospital Confinement Indemnity Insurance can help fill those gaps."
            }, {
                id: 6,
                title: "Whole Life Insurance",
                description: "Whole life insurance can help provide financial protection for your family when you or a loved one passes away."
            }, {
                id: 7,
                title: "Dental Insurance",
                description: "Dental insurance provides the same benefit amounts with any dentist you choose and covers a variety of dental procedures, from routine cleanings to more advanced procedures, such as crowns and root canals. Additional savings are available by visiting a network dentist."
            }]
            let arrCart = []
            let answers = $myFactory.getAnswer();
            let basedOnAnswers = function (params) {
                $scope.cart.forEach(element => {
                    if (element.title == params) {
                        arrCart.push(element)
                    }
                })
            }
            if (answers != null) {
                if (answers.includes('Accident prone')) {
                    basedOnAnswers("Accident Insurance")

                }
                if (answers.includes('Yes')) {
                    basedOnAnswers("Cancer insurance")
                }
            }

            $scope.addRemoveFromCart = function (item) {
                let flag = arrCart.includes(item)
                if (flag) {
                    let index = arrCart.indexOf(item)
                    arrCart.splice(index, 1)
                    console.log(arrCart)
                    // $scope.addRemove="Remove"
                }
                else {
                    arrCart.push(item)
                    console.log(arrCart)
                    // $scope.addRemove="Add"
                }
            }
            $scope.goToCart = function () {
                $location.path('showhide');
            }

            



        }]);
})();