"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiUpdatePost = (req, res, next) => {
    const postIndex = data_1.DataStore.posts.findIndex((item) => item.id == req.params.id);
    if (~postIndex) {
        // 获取当前修改的原数据
        const originaPost = data_1.DataStore.posts[postIndex];
        const upDatePost = {
            id: req.params.id,
            userId: req.body.userId || originaPost.userId,
            title: req.body.title || originaPost.title,
            body: req.body.body || originaPost.body,
            price: req.body.price || originaPost.price,
            currency: req.body.currency || originaPost.currency,
            img: originaPost.img,
        };
        // 更新数据
        data_1.DataStore.posts[postIndex] = upDatePost;
        res.status(200).json({ msg: "更新数据成功", success: true });
    }
    else {
        res.status(404).json({ msg: "没找到需更新的数据", success: false });
    }
};
