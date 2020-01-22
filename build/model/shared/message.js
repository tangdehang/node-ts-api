"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIError extends Error {
    constructor(name, message, status) {
        super();
        this.status = status;
        this.name = name;
        this.message = message;
    }
}
exports.APIError = APIError;
class PublicInfo {
    constructor(message, status, properties) {
        this.status = status;
        this.properties = properties;
    }
}
exports.PublicInfo = PublicInfo;
