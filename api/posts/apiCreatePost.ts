import {DataStore} from "../../data/data";
import uuid from "uuid/v4";
import { NewPost } from "../../interface/newPost";

// 导入请求的类型
import {RequestHandler} from "express";
import { APIError, PublicInfo } from "../../model/shared/message";

export const apiCreatePost: RequestHandler = (req, res, next) => {
    // 设置必传参数
    const requireFields = ["title","body"];
    
    // 拿到所有传的字段
    const givenFields = Object.getOwnPropertyNames(req.body);
    if(!requireFields.every(field => givenFields.includes(field))){
        return next (
            new APIError("Data misssing", "not all requied fields suppplied", 400)
        );
    }

    const newPost: NewPost = {
        id: uuid(),
        ...req.body,
        img: []
    }
    DataStore.posts.push( newPost );

    // res.json(newPost);
    res.json(new PublicInfo("post added", 200, {post: newPost}));
}