"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const postDetail_1 = require("../../model/shared/postDetail");
exports.apiGetPostDetail = (req, res, next) => {
    const selectedPost = data_1.DataStore.posts.find((element) => element.id == req.params.id);
    if (selectedPost) {
        const selectedTodos = data_1.DataStore.todos.filter((item) => item.postId == req.params.id);
        const imgURLs = selectedPost.img.map((item) => {
            // req.app.get("env"); 这个方法可以拿到当前是生产环境,还是在 development (开发环境)
            if (req.app.get("env") == "development") {
                return "http://localhost:8091/static/" + item;
            }
            else {
                return "http://47.110.72.2:8888/img/record@2x.cbe605f7.png";
            }
        });
        // 给数据定义
        res.json(new postDetail_1.PostDetail(selectedPost, selectedTodos, imgURLs));
    }
    else {
        res.status(404).json({ status: 'failed', message: 'post not found' });
    }
};
