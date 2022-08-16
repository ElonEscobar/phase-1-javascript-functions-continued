// code your solution here
function saturdayFun(someValue = "roller-skate"){
    return (`This Saturday, I want to ${someValue}!`);
}
const mondayWork = function mondayWork(secValue ='go to the office'){
    return(`This Monday, I will ${secValue}.`);
}
function wrapAdjective(someAdjective = "*"){
    return function(someValue = "special"){
        return (`You are ${someAdjective}${someValue}${someAdjective}!`);
    };
}