import express from "express";
import {apiGetPosts,apiGetPostDetail} from "./api/posts/apiGetPosts"
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
    console.log(`http://localhost:${port} 启动成功了`);
})