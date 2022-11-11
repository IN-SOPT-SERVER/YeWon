/* 타입 */

// 원시 타입
/// Symbol : 고유하고 변경 불가한 원시값
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1);  // true

console.log(sym1 === sym2);  // false
console.log(sym3 === sym4);  // false

// 객체 타입
/// Object : JS의 기본 타입. {}로 감싸진 생김새
const user = {
    email: "yewonso857@gmail.com",
    name: "소예원",
    favorite: ["김볶", "초밥", "츄러스"],
    introduce: function () 
    {
      console.log(`${this.name}입니다. ${this.favorite} 좋아`);
    },
    getFavoriteFoods: function () 
    {
      this.favorite.forEach((food) => {
        console.log(`${food} 맛 있 어`);
      });
    },
  };

const arr1 = ['소예원', '김볶', 24, true];
const arr2 = Array('헤헤', '배고프다', true);

arr1.map((item) => console.log(`${item} 야호`));
arr2.map((item) => console.log(`${item} 야호`));

