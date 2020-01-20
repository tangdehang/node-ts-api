import {DataStore} from "../../data/data";
import { NewPost } from "../../interface/newPost";

// 导入请求的类型
import {RequestHandler} from "express";

export const apiUpdatePost: RequestHandler = (req, res, next) => {
    
    const postIndex = DataStore.posts.findIndex((item: any) => item.id == req.params.id);
    if(~postIndex) {
        // 获取当前修改的原数据
        const originaPost: NewPost = DataStore.posts[postIndex];

        const upDatePost: NewPost = {
            id:req.params.id,
            userId: req.body.userId || originaPost.userId,
            title: req.body.title || originaPost.title,
            body: req.body.body || originaPost.body,
            price: req.body.price || originaPost.price,
            currency: req.body.currency || originaPost.currency,
            img: originaPost.img,
        }

        // 更新数据
        DataStore.posts[postIndex] = upDatePost;
        res.status(200).json({msg: "更新数据成功", success: true});
    }else{
        res.status(404).json({msg: "没找到需更新的数据", success: false});
    }
}