"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const v4_1 = __importDefault(require("uuid/v4"));
exports.apiCreatePost = (req, res, next) => {
    const newPost = {
        id: v4_1.default(),
        ...req.body,
        img: []
    };
    data_1.DataStore.posts.push(newPost);
    res.json(newPost);
};
