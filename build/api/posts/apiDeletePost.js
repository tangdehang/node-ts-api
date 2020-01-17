"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiDeletePost = (req, res, next) => {
    const postIndex = data_1.DataStore.posts.findIndex((item) => item.id == req.params.id);
    if (~postIndex) {
        data_1.DataStore.posts.splice(postIndex, 1);
        res.status(200).json({ msg: "删除成功", success: true });
    }
    else {
        res.status(404).json({ msg: "未查询到需要删除的数据", success: false });
    }
};
