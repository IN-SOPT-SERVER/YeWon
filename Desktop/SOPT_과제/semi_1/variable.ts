// string
const test1: string = 'hello'
console.log(typeof test1, test1) 

// boolean
const test3: boolean = true
console.log(typeof test3, test3)

// array 표현방법
let numbers: number[]  = [1,2,3];
let hangeul: Array<String> = ["가", "나", "다"];

// object
const foo1= (a: Object) =>{
    console.log(a)
}

const foo2 = (a: object) => {
    console.log(a)
}

foo1('hello')
// foo2('hello')

// function
const h = (name: string): void => { // void : 리턴값
    console.log(`${name}아 안녕`)
}

const sum1 = (a: number, b:number): number => {
    return a+b;
}

h("예원");
sum1(1,2);

// * as
const test11: any = '소예원' // any는 타입스크립트 사용 시 지양
const nameLength = (test11 as string).length
console.log(nameLength)

const test12: any = '장히리'
const nameLength2 = (<string>test12).length
console.log(nameLength2)
 
// Interface
interface TEST 
{
    name: string;
    age: number;
    isSOPT?: boolean; // 선택적 property
}

// interface 배열
const arr3: TEST[]= [{
    name: '소예원',
    age: 20,
    isSOPT: true
},{
    name: '소예원2',
    age: 21,
    isSOPT: false
},{
    name: '소예원3',
    age: 22,
    isSOPT: true
}]
