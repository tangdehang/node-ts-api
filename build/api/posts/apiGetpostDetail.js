"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const postDetail_1 = require("../../model/shared/postDetail");
exports.apiGetPostDetail = (req, res, next) => {
    const selectedPost = data_1.DataStore.posts.find((element) => element.id == req.params.id);
    const todos = data_1.DataStore.todos.filter((item) => item.postId == req.params.id);
    if (selectedPost) {
        // 给数据定义
        res.json(new postDetail_1.PostDetail(selectedPost, todos));
    }
    else {
        res.status(404).json({ status: 'failed', message: 'post not found' });
    }
};
