"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postSummary_1 = require("./postSummary");
class PostDetail extends postSummary_1.PostSummary {
    constructor(postData, todos) {
        super(postData);
        this.price = postData.price;
        this.currency = postData.currency;
        this.todos = todos;
    }
}
exports.PostDetail = PostDetail;
