"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostSummary {
    constructor(data) {
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
    }
}
exports.PostSummary = PostSummary;
