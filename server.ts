import express from "express";
import path from "path";

import { apiGetPosts } from "./api/posts/apiGetPosts"
import { apiGetPostDetail } from './api/posts/apiGetpostDetail'
import { apiCreatePost } from './api/posts/apiCreatePost'
import { apiDeletePost } from './api/posts/apiDeletePost'
import { apiUpdatePost } from './api/posts/apiUpdatePost'
import { CumtomRequesetHandler } from "./interface/express";
const app = express();

// POST 请求中间件
import bodyParser from "body-parser";

// 配置解析 application/x-www-form-urlencoded 数据
app.use(bodyParser.urlencoded({ extended: false}));
// 配置解析 application/json 数据
app.use(bodyParser.json());

// 配置static指向的路径
app.use("/static", express.static(path.resolve("./", "public", "img")));

// 自定义中间件,让每一次请求都回执行她，或者某些路径的请求去执行
const authenticaticator: CumtomRequesetHandler = (req, res, next) => {
    const username = "mstw";
    req.user = username;

    // 执行完继续执行下一个方法
    next();
}

// 让每个接口都可以使用我们自定义的中间件之间use就可以了
// 自定义中间件验证是否授权
// 也可以给指定地址app.use("/user",authenticaticator);
app.use(authenticaticator);

const port = process.env.PORT || 8091;

// router
app.get("/",(req, res) => {
    res.json({msg:"你访问了根路径!!!",success: true});
})

// 查询所有 // 这里我们使用了我们自定义的中间件 logger
app.get("/posts", apiGetPosts);
// 查询详情
app.get("/posts/:id", apiGetPostDetail);

// 新增
app.post("/posts", apiCreatePost);

// 删除
app.delete("/posts/:id", apiDeletePost);

// 更新某条数据
app.put("/posts/:id", apiUpdatePost);

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port} 启动成功了`);
})