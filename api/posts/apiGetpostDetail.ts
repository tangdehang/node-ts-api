import {DataStore} from "../../data/data";

// 导入请求的类型
import { RequestHandler} from "express";
import { PostDetail } from "../../model/shared/postDetail"


export const apiGetPostDetail: RequestHandler = (req, res, next) => {

    const selectedPost = DataStore.posts.find((element: any) => 
        element.id == req.params.id
    );
    const todos = DataStore.todos.filter((item: any) => item.postId == req.params.id)
    if(selectedPost) {
        // 给数据定义
        res.json(new PostDetail(selectedPost, todos));
    }else{
        res.status(404).json({status: 'failed', message: 'post not found'});
    }
}