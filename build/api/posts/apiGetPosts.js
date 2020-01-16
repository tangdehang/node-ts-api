"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const postSummary_1 = require("../../model/shared/postSummary");
exports.apiGetPosts = (req, res, next) => {
    res.json(data_1.DataStore.posts.map((item) => 
    // 给数据定义
    new postSummary_1.PostSummary(item)));
};
