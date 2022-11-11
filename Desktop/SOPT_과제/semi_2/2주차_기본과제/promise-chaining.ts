/* promise-chaining */

//* 아침에 힘겹게 일어나는 여러분을 표현한 함수
const me = (callback: () => void, time: number) => {
    setTimeout(callback, time);
  };
  
  //* 기상
  const wakeUp = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 일어남");
        resolve("일어남"); // 성공 시 3초 뒤 일어남 이라는 string 반환
      }, 3000);
    });
  };

  //* 화장실 감
const goBathRoom = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 화장실로 이동함");
        resolve(`${now} -> 화장실로 이동함`);
      }, 1000);
    });
  };

  //* 칫솔과 치약을 준비함
const ready = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 칫솔과 치약을 준비함");
        resolve(`${now} -> 칫솔과 치약을 준비함`);
      }, 1000);
    });
  };
  
  //* 양치함
  const startChikaChika = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 양치함");
        resolve(`${now} -> 양치함`);
      }, 1000);
    });
  };
  
  //* 나 자신에게 칭찬함
  const goodJob = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 나 자신에게 칭찬중");
        resolve(`${now} -> 칭찬중`);
      }, 1000);
    });
  };
  
  // then을 통해 promise chaining
  wakeUp()
    .then((now) => goBathRoom(now)) // now라는 이름으로 받은 후, goBathRoom으로
    .then((now) => ready(now)) // then을 이용해 now라는 이름으로 바꿔서 ready라는 함수에 넣기
    .then((now) => startChikaChika(now)) // then 이용해 now라는 이름으로 바꿔서 ready라는 함수에 넣기
    .then((now) => goodJob(now))
    .then((now) => console.log(`\n${now}`));

    /*reject chaining*/
    Promise.resolve(true)
    .then((response) => {
      throw new Error("비동기 처리 중 에러 발생!");
    })
    .then((response) => {
      console.log(response);
      return Promise.resolve(true);
    })
    .catch((error) => {
      console.log(error.message);
    });
