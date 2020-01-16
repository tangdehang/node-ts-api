"use strict";
exports.__esModule = true;
var data_1 = require("../../data/data");
var postSummary_1 = require("../../model/shared/postSummary");
exports.apiGetPosts = function (req, res, next) {
    res.json(data_1.DataStore.posts.map(function (item) {
        // 给数据定义
        return new postSummary_1.PostSummary(item);
    }));
};
exports.apiGetPostDetail = function (req, res, next) {
    data_1.DataStore.posts.map(function (item) {
        if (item.id == req.params.id) {
            // 给数据定义
            res.json(new postSummary_1.PostSummary(item));
        }
    });
};
