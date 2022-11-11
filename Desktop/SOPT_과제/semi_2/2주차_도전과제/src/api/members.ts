// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

const members: Object[] = [
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

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "멤버 조회 성공",
    data: members
  });
})

module.exports = router;