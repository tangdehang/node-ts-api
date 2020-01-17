"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiUpdataPost = (req, res, next) => {
    const postIndex = data_1.DataStore.posts.findIndex((item) => item.id == req.params.id);
    if (~postIndex) {
        console.log(postIndex);
    }
};
