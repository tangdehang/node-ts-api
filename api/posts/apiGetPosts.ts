import {DataStore} from "../../data/data";

// 导入请求的类型
import {RequestHandler, response} from "express";
import { PostSummary } from "../../model/shared/postSummary"

export const apiGetPosts: RequestHandler = (req, res, next) => {
    res.json(DataStore.posts.map((item: any) => 
        // 给数据定义
        new PostSummary(item)
    ));
}

export const apiGetPostDetail: RequestHandler = (req, res, next) => {

    DataStore.posts.map((item: any) => {

        if(item.id == req.params.id) {
            // 给数据定义
            res.json(new PostSummary(item));
        }
    })
}