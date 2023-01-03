// src/config/s3Config.ts

import { S3Client } from "@aws-sdk/client-s3";
import config from ".";

const s3: S3Client = new S3Client({ // 방금 다운 받은 모듈 내 method들을 사용할 수 있는 s3객체를 만들겠다!
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: config.s3AccessKey,
    secretAccessKey: config.s3SecretKey,
  },
});

export default s3;