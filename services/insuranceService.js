
angular.module('my-Factory',[]).factory('myFactory', function () {
    let fullname
    // let arrAnswers={}
    let msg = function (value) {
        fullname = value
    }
    // let answers=function (answer) {
        
    // }
    let arrAnswers=[]
    let selectedAnswer=function (value) {
        arrAnswers.push(value)
    }
    return {
        setFullname: function (fn) {
            msg(fn);
        },
        getFullname: function () {
            return fullname
        // },
        // setAnswers:function (ans) {
        //     answers(ans);
        // },
        // getAnswers:function () {
        //     return arrAnswers
        },
        setAnswer:function (answer) {
            selectedAnswer(answer);
        },
        getAnswer:function () {
            return arrAnswers
        }
    }
});
