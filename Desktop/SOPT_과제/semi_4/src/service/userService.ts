import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


//* 유저 생성
const createUser = async (userName: string, email: string, age: number) => {

  // prisma 는 보통 promise객체를 return하므로 await 이용
  const data = await prisma.user.create({
    data: {
      userName,
      age,
      email,
    },
  });

    return data;
  };

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany()
  return data;
};

//* 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where:{ // 어떤 데이터를 바꿀건지
      id: userId
    },
    data:{
      userName: name
    }
  });
  return data;
};

//* 유저 삭제
const deleteUser = async (userId: number) => {
  const user = await prisma.user.delete({
    where:{
      id: userId,
    },
  });
  return user;  
};


//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
      // name: '머시깽이'
    },
  });
  return user;
};

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userService;
