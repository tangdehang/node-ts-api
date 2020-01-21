"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = __importDefault(require("uuid"));
function getFileUploader(env) {
    switch (env) {
        // 开发环境
        case "development":
            const fileID = uuid_1.default();
            const fileStore = multer_1.default.diskStorage({
                // 图片保存到哪里去
                destination: (req, file, cb) => {
                    cb(null, path_1.default.resolve("./", "public", "img"));
                },
                // 保存的文件设置名字
                filename: (req, file, cb) => {
                    cb(null, fileID + path_1.default.extname(file.originalname));
                }
            });
            return multer_1.default({ storage: fileStore }).single('file');
        // 生产环境
        case "production":
            return (req, res, next) => next();
        default:
            return (req, res, next) => next();
    }
}
exports.getFileUploader = getFileUploader;
