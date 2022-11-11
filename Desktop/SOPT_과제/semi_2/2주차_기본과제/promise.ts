/* Promise */

// 3단계 존재
/// pending : 대기 - 비동기 처리가 아직 되지 않은 상태
/// fullfiled : 이행 - 비동기 처리 완료, promise 반환
/// rejected : 실패 - 비동기 처리 도중 실패 혹은 오류 발생

const condition1: boolean = false;

// //* 최초 생성 시점
// /* const promise = new Promise((resolve, reject) => {
//   if (condition1) {
//     resolve("우와 Promise다!");
//   } else {
//     reject(new Error("비동기 처리 도중 실패!"));
//   }
// });*/

//* 비동기 처리 성공(then), 비동기 처리 실패(catch)
/*promise.then((resolvedData): void => console.log(resolvedData)).catch((error): void => console.log(error));
const condition: boolean = false;

//* 최초 생성 시점
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("우와 Promise다!");
  } else {
    reject(new Error("비동기 처리 도중 실패!"));
  }
});

//* 비동기 처리 성공(then), 비동기 처리 실패(catch)
promise.then((resolvedData): void => console.log(resolvedData)).catch((error): void => console.log(error));*/