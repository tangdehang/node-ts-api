import { RequestHandler } from "express"
import multer from "multer"
import path from "path"
import uuid from "uuid"

export function getFileUploader(env: string): RequestHandler {
    switch (env) {
        // 开发环境
        case "development" :
            const fileID: string = uuid();
            const fileStore = multer.diskStorage({
                // 图片保存到哪里去
                destination: (req, file, cb) => {
                    cb(null, path.resolve("./","public","img"));
                },
                // 保存的文件设置名字
                filename: (req, file, cb) => {
                    cb(null, fileID + path.extname(file.originalname));
                }
            });
            return multer({storage: fileStore}).single('file');

        // 生产环境
        case "production":
            return (req, res, next) => next();

        default: 
        return (req, res, next) => next();
    }
}