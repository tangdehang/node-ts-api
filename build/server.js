"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
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
// 配置static指向的路径
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "img")));
// 自定义中间件,让每一次请求都回执行她，或者某些路径的请求去执行
const authenticaticator = (req, res, next) => {
    const username = "mstw";
    req.user = username;
    // 执行完继续执行下一个方法
    next();
};
// 让每个接口都可以使用我们自定义的中间件之间use就可以了
// 自定义中间件验证是否授权
// 也可以给指定地址app.use("/user",authenticaticator);
app.use(authenticaticator);
const port = process.env.PORT || 8091;
// router
app.get("/", (req, res) => {
    res.json({ msg: "你访问了根路径!!!", success: true });
});
// 查询所有 // 这里我们使用了我们自定义的中间件 logger
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
