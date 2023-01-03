import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { sc } from "../constants";
import { UserCreateDTO } from "../interfaces/user/UserCreateDTO";
import { UserSignInDTO } from "../interfaces/user/UserSignInDTO";

const prisma = new PrismaClient();

//* 회원가입
const createUser = async (userCreateDto: UserCreateDTO) => {
  //? 넘겨받은 password를 bcrypt의 도움을 받아 암호화
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDto.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.user.create({
    data: {
      userName: userCreateDto?.name,
      age: userCreateDto?.age,
      email: userCreateDto.email,
      password,
    },
  });

  return data;
};

//* 로그인
const signIn = async (userSignInDto: UserSignInDTO) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: userSignInDto.email,
      },
    });
    if (!user) return null;

    const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
    if (!isMatch) return sc.UNAUTHORIZED;

    return user.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//* 유저 전체 조회
const getAllUser = async (page: number, limit: number) => { // page: 페이지 수 , limit:한 페이지 당 몇개의 data를 보여줄건지
  const data = await prisma.user.findMany({
    skip:(page - 1) * limit, // 1페이지일 경우 다 보여주면 되므로
    take: limit,
  });

  return data;
};

//* 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      userName: name,
    },
  });

  return data;
};

//* 유저 삭제
const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

//*- 이름으로 유저 조회 (query)
const searchUserByName = async (keyword: string, option: string)=> {
  //?유저 선착순
  if ( option === "desc" ){
   const data = await prisma.user.findMany({
     where: {
       userName: {
         contains: keyword,
       },
     },
     orderBy: { // 정렬
       createdAt: 'desc',
     }
   });
   return data;
  }
 
  //? 유저 오래된 순 
  if ( option === "asc" ){
   const data = await prisma.user.findMany({
     where: {
       userName: {
         contains: keyword,
       },
     },
     orderBy: {
       createdAt: 'asc',
     }
   });
   return data;
  }
 
  //? 이름을 오름 차순으로 정렬 
  if ( option === "nameDesc"){
     const data = await prisma.user.findMany({
       where: {
         userName: {
           contains: keyword
         }
       },
       orderBy: {
         userName: 'desc',
       }
     });
     return data;
  }
}

const userService = {
  createUser,
  signIn,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  searchUserByName
};

export default userService;
