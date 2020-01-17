"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const apiGetpostDetail_1 = require("./api/posts/apiGetpostDetail");
const apiCreatePost_1 = require("./api/posts/apiCreatePost");
const apiDeletePost_1 = require("./api/posts/apiDeletePost");
const apiUpdatePost_1 = require("./api/posts/apiUpdatePost");
const app = express_1.default();
// POST 请求中间件
const body_parser_1 = __importDefault(require("body-parser"));
// 配置解析 application/x-www-form-urlencoded 数据
app.use(body_parser_1.default.urlencoded({ extended: false }));
// 配置解析 application/json 数据
app.use(body_parser_1.default.json());
const port = process.env.PORT || 8091;
// router
app.get("/", (req, res) => {
    res.json({ msg: "你访问了根路径!!!", success: true });
});
// 查询所有
app.get("/posts", apiGetPosts_1.apiGetPosts);
// 查询详情
app.get("/posts/:id", apiGetpostDetail_1.apiGetPostDetail);
// 新增
app.post("/posts", apiCreatePost_1.apiCreatePost);
// 删除
app.delete("/posts/:id", apiDeletePost_1.apiDeletePost);
// 更新某条数据
app.put("/posts/:id", apiUpdatePost_1.apiUpdatePost);
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port} 启动成功了`);
});
