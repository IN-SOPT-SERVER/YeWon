// * 파트원 소개해주는 코드 만들기 실습

//^ 1. 서버 파트원 2-3명 소개하는 객체 만들기

const members: Server[] = [
    {
        name: '소예원', 
        age: 24,
        location: '야탑',
        mbti: 'infp',
        fav: '김볶',
        non_fav: '가지',
        alco: 3,
        yb: true
    },
    {
        name: '김도연',
        age: 23,
        location: '경복궁',
        mbti: 'istp',
        fav: '된장찌개',
        non_fav: '회',
        alco: 1,
        yb: true
    },
    {
        name: '김예린',
        age: 24,
        location: '강남구청',
        mbti: 'istj',
        fav: '고기',
        non_fav: '딱히없음',
        alco: 1,
        yb: true
    },
    {
        name: '최윤한',
        age: 26,
        location: '신림',
        mbti: 'enfp',
        fav: '고기',
        non_fav: '가지볶음',
        alco: 3,
        yb: true
    }
]

//^ 2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정

interface Server {
    name: string;
    age: number;
    location: string;
    mbti: string;
    fav: string;
    non_fav: string;
    alco : number;
    yb : boolean;
}

//^ 3. 모든 파트원 소개 아래와 같이 출력하기!
members.map((item) => console.log(`이름: ${item.name} 나이: ${item.age} 사는곳: ${item.location} 좋아하는 음식: ${item.fav} 싫어하는 음식: ${item.non_fav} 주량: ${item.alco} yb여부: ${item.yb}`));