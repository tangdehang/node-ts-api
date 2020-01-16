import express from "express";
import { apiGetPosts } from "./api/posts/apiGetPosts"
import { apiGetPostDetail } from './api/posts/apiGetpostDetail'
const app = express();

const port = process.env.PORT || 8091;

// router
app.get("/",(req, res) => {
    res.json({msg:"你访问了根路径!!!",success: true});
})

app.get("/todos",(req, res) => {
    
})

app.get("/posts", apiGetPosts);
app.get("/posts/:id", apiGetPostDetail);


app.listen(port, () => {
    console.log(`http://127.0.0.1:${port} 启动成功了`);
})