import { success, fail } from './../constants/response';
import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { imageService } from "../service";


//* 이미지 업로드 API
const uploadImage = async (req:Request, res:Response) => {
    const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
    const { location } = image; //이미지 객체 url
    //이미지 이름 image.filename

    if (!location){
        res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST,rm.NO_IMAGE))
    }

    const data = await imageService.uploadImage(location);

    if (!data){ // 데이터가 넘어오지 않았을 때 이미지 저장 실패
        res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST,rm.CREATE_IMAGE_FAIL))
    }

   return res.status(sc.CREATED).send(success(sc.CREATED,rm.CREATE_IMAGE_SUCCESS))

};


const imageController = {
    uploadImage,
};
export default imageController;
