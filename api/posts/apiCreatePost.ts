import {DataStore} from "../../data/data";
import uuid from "uuid/v4";
import { NewPost } from "../../interface/newPost";

// 导入请求的类型
import {RequestHandler} from "express";

export const apiCreatePost: RequestHandler = (req, res, next) => {

   const newPost: NewPost = {
       id: uuid(),
       ...req.body
   }
   DataStore.posts.push( newPost );

   res.json(newPost);
}