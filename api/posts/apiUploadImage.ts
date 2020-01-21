import {DataStore} from "../../data/data";
import { NewPost } from "../../interface/newPost";

import { getFileUploader } from "./genera/static";

// 导入请求的类型
import { RequestHandler} from "express";
import { PostDetail } from "../../model/shared/postDetail"

export const apiUploadImage: RequestHandler = (req, res, next) => {
    let postIndex = DataStore.posts.findIndex((item: NewPost) => item.id == req.params.id );

    if(~postIndex) {
        const upload = getFileUploader(req.app.get("env"));
        upload(req, res, err => {
            if(err) {
                console.log(err);
                res.status(404)
                .json({msg:"上传失败",success: false});
            } else {
                console.log(req.file.filename);
                DataStore.posts[postIndex].img.push(req.file.filename);
                res.json({msg: "上传成功", success: true});
            }
        })
    }else{
        res.status(404).json({success: false,msg: "没有找到"});
    }
    
}