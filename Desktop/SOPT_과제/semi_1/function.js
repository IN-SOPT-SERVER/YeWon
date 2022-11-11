// 함수 선언식
function hello(name){
    console.log(`${name} 안녕 !`);
}

const sum = (num1, num2) => { // function 키워드 쓰지 않고 함수선언
    return result = num1 + num2; 
    // 로직 한줄일 때는 => num1+num2로만 쓸수 있지만
    // 협업할 때는 이해 잘 안될수도 있음.(지양 요소)
}

// 로직 한줄인 경우 return 생략 가능
// const add = (a, b) => a + b;
// const hello = name => console.log(`${name}, hello!`)
//const info = (name, age) => ({name, age})

hello("예원");
sum(1, 6);

// console.log(typeof num1); 변수 타입 알수있음

