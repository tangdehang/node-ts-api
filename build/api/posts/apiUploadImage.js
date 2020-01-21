"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const static_1 = require("./genera/static");
exports.apiUploadImage = (req, res, next) => {
    let postIndex = data_1.DataStore.posts.findIndex((item) => item.id == req.params.id);
    if (~postIndex) {
        const upload = static_1.getFileUploader(req.app.get("env"));
        upload(req, res, err => {
            if (err) {
                console.log(err);
                res.status(404)
                    .json({ msg: "上传失败", success: false });
            }
            else {
                console.log(req.file.filename);
                data_1.DataStore.posts[postIndex].img.push(req.file.filename);
                res.json({ msg: "上传成功", success: true });
            }
        });
    }
    else {
        res.status(404).json({ success: false, msg: "没有找到" });
    }
};
