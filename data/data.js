"use strict";
exports.__esModule = true;
var posts_json_1 = require("./posts.json");
var todos_json_1 = require("./todos.json");
var DataStore = /** @class */ (function () {
    function DataStore() {
    }
    DataStore.posts = posts_json_1["default"];
    DataStore.todos = todos_json_1["default"];
    return DataStore;
}());
exports.DataStore = DataStore;
