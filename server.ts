import express from "express";

import { apiGetPosts } from "./api/posts/apiGetPosts"
import { apiGetPostDetail } from './api/posts/apiGetpostDetail'
import { apiCreatePost } from './api/posts/apiCreatePost'
import { apiDeletePost } from './api/posts/apiDeletePost'
const app = express();

// POST 请求中间件
import bodyParser from "body-parser";
// 配置解析 application/x-www-form-urlencoded 数据
app.use(bodyParser.urlencoded({ extended: false}));
// 配置解析 application/json 数据
app.use(bodyParser.json());

const port = process.env.PORT || 8091;

// router
app.get("/",(req, res) => {
    res.json({msg:"你访问了根路径!!!",success: true});
})

// 查询所有
app.get("/posts", apiGetPosts);
// 查询详情
app.get("/posts/:id", apiGetPostDetail);

// 新增
app.post("/posts", apiCreatePost);

// 删除
app.delete("/posts/:id", apiDeletePost);

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port} 启动成功了`);
})