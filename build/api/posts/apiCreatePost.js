"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const v4_1 = __importDefault(require("uuid/v4"));
const message_1 = require("../../model/shared/message");
exports.apiCreatePost = (req, res, next) => {
    // 设置必传参数
    const requireFields = ["title", "body"];
    // 拿到所有传的字段
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requireFields.every(field => givenFields.includes(field))) {
        return next(new message_1.APIError("Data misssing", "not all requied fields suppplied", 400));
    }
    const newPost = {
        id: v4_1.default(),
        ...req.body,
        img: []
    };
    data_1.DataStore.posts.push(newPost);
    // res.json(newPost);
    res.json(new message_1.PublicInfo("post added", 200, { post: newPost }));
};
