import { PrismaClient } from "@prisma/client";
import { ImageCreateResponseDTO } from "../interfaces/image/ImageCreateResponseDTO";

const prisma = new PrismaClient();

//* 이미지 업로드
const uploadImage = async (loacation: string): Promise<ImageCreateResponseDTO> => {
    
    const data = await prisma.image.create({
        data: {
            image: location,
        },
    });

    const result: ImageCreateResponseDTO = {
        id: data.id,
        image: data.image as string, // string으로 타입 단언(null로 넘어오면 안 되므로)
    };

    return result;

};

const imageService = {
    uploadImage
}

export default imageService;