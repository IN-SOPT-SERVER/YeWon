/* 변수와 scope */

// var의 scope 알아보기
if(true) 
{
    var x = "var";
    console.log("x: ", x);
}
console.log("x: ", x); 
// function scope라 밖에서 출력 가능

// let의 scope 알아보기
if(true)
{
    let y = "let";
    console.log("y : ", y);
}
// console.log("y : ", y); 
/// block scope 밖에서 출력 안됨


// var가 function scope 를 벗어났을 때!
function func() {
    if (true) {
      var test = "var";
      console.log("test: ", test);
    }
    console.log("test: ", test);
  }
  
  func();
 // console.log("test: ", test); 
 /// function scope를 벗어낫기 때문에 not defined 에러 뜸!

