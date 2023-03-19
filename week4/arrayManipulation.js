function arrayManipulation(num, callback1, callback2){
    const operation=num.map(callback1);
    const filter=operation.filter(callback2);
    return filter;
}
let num=[1,2,3,4,5];
function callback1(num){
    return num*num;
}
function callback2(num){
    return num<16;
}

// document.getElementById('para').innerHTML=arrayManipulation(num,callback1,callback2);
const result=arrayManipulation(num,callback1,callback2);
// console.log(result);
document.getElementById('para').innerHTML=result;