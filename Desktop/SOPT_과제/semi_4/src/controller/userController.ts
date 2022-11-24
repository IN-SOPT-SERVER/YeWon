import { Request, Response } from "express";
import { userService } from "../service";

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

//* 유저 생성 (추후에는 회원가입처럼 쓰이게 됨)
const createUser = async ( req: Request, res: Response ) => {
  const {userName, email, age} = req.body // 받기

  const data = await userService.createUser(userName, email, age);
  // userService내의 createUser가 데이터 받음.

  // 데이터 잘 넘어왔나 확인
  if(!userName || !email || !age){
    return res.status(400).json({ status: 400, message: "유저 생성 실패" }); // null이 넘어왔을 경우 예외처리
  }
  return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
};

//* 유저 전체 조회
const getAllUser = async ( req: Request, res: Response ) => {
  const data = await userService.getAllUser();
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

//* 유저 정보 업데이트
const updateUser = async ( req: Request, res: Response ) => {
  const {name} = req.body;
  const { userId } = req.params;
  if(!name){
    return res.status(400).json({ status: 400, message: "유저 업데이트 실패" }); 
  }
  const updateUser = await userService.updateUser(+userId, name);
  return res.status(200).json({ status: 200, message: "유저 업데이트 성공", data });
};

//* 유저 삭제
const deleteUser = async ( req: Request, res: Response ) => {
  const { userId } = req.params;

  const data = await userService.deleteUser(+userId);
  return res.status(200).json({ status: 200, message: "유저 삭제 성공", data });
};

const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userController; 
// userController를 언제든지 import하여 사용할 수 있도록 해줌
