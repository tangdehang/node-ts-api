"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postSummary_1 = require("./postSummary");
const todo_1 = require("./todo");
class PostDetail extends postSummary_1.PostSummary {
    constructor(postData, todoData, postImages) {
        super(postData);
        this.price = postData.price;
        this.currency = postData.currency;
        this.todos = todoData.map((item) => new todo_1.Todo(item));
        this.img = postImages;
    }
}
exports.PostDetail = PostDetail;
