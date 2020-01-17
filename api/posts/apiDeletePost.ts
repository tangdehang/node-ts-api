import {DataStore} from "../../data/data";

// 导入请求的类型
import {RequestHandler, response} from "express";


export const apiDeletePost: RequestHandler = (req, res, next) => {
    const postIndex = DataStore.posts.findIndex((item: any) => item.id == req.params.id);

    if(~postIndex){
        DataStore.posts.splice(postIndex, 1);
        res.status(200).json({msg: "删除成功",success: true});
    }else{
        res.status(404).json({msg: "未查询到需要删除的数据",success: false});
    }
}