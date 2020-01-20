import {DataStore} from "../../data/data";

// 导入请求的类型
import { RequestHandler} from "express";
import { PostDetail } from "../../model/shared/postDetail"


export const apiGetPostDetail: RequestHandler = (req, res, next) => {

    const selectedPost = DataStore.posts.find((element: any) => 
        element.id == req.params.id
    );
    
    if(selectedPost) {
        const selectedTodos = DataStore.todos.filter((item: any) => item.postId == req.params.id);

        const imgURLs = selectedPost.img.map((item: string) => {

            // req.app.get("env"); 这个方法可以拿到当前是生产环境,还是在 development (开发环境)
            if(req.app.get("env") == "development") {
                return "http://localhost:8091/static/" + item;
            }else{
                return "http://47.110.72.2:8888/img/record@2x.cbe605f7.png";
            }
        });
        
        // 给数据定义
        res.json(new PostDetail(selectedPost, selectedTodos, imgURLs));
    }else{
        res.status(404).json({status: 'failed', message: 'post not found'});
    }
}