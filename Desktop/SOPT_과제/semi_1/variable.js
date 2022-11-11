/* var, let, const를 사용해보자 */

// var는 재할당, 재선언 가능
// but, 코드 작성 시 "지양" 하는것이 좋다!
var myName = "소예투";
console.log(myName);
console.log(`${myName} is wrong name !`);

var myName = "소예원";
console.log(`My name is is ${myName}`);

// let은 재할당 불가능(재선언은 가능)
let me = "소예원";
// let me = "소예투"
console.log(me);

// const는 재할당, 재선언 둘 다 불가
const name = "소예원";
//const name = "소예투";
console.log(name);