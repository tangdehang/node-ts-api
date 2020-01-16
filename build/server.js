"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const app = express_1.default();
const port = process.env.PORT || 8091;
// router
app.get("/", (req, res) => {
    res.json({ msg: "你访问了根路径!!!", success: true });
});
app.get("/todos", (req, res) => {
});
app.get("/posts", apiGetPosts_1.apiGetPosts);
app.get("/post/:id", apiGetPosts_1.apiGetPostDetail);
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port} 启动成功了`);
});
