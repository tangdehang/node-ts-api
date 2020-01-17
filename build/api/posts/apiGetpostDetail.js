"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const postDetail_1 = require("../../model/shared/postDetail");
exports.apiGetPostDetail = (req, res, next) => {
    const selectedPost = data_1.DataStore.posts.find((element) => element.id == req.params.id);
    if (selectedPost) {
        const selectedTodos = data_1.DataStore.todos.filter((item) => item.postId == req.params.id);
        // 给数据定义
        res.json(new postDetail_1.PostDetail(selectedPost, selectedTodos));
    }
    else {
        res.status(404).json({ status: 'failed', message: 'post not found' });
    }
};
