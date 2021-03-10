"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./class1InstanceApi"), exports);
var class1InstanceApi_1 = require("./class1InstanceApi");
__exportStar(require("./class2MessagesApi"), exports);
var class2MessagesApi_1 = require("./class2MessagesApi");
__exportStar(require("./class3ChatsApi"), exports);
var class3ChatsApi_1 = require("./class3ChatsApi");
__exportStar(require("./class4WebhooksApi"), exports);
var class4WebhooksApi_1 = require("./class4WebhooksApi");
__exportStar(require("./class5QueuesApi"), exports);
var class5QueuesApi_1 = require("./class5QueuesApi");
__exportStar(require("./class6BanApi"), exports);
var class6BanApi_1 = require("./class6BanApi");
__exportStar(require("./class7TestingApi"), exports);
var class7TestingApi_1 = require("./class7TestingApi");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [class1InstanceApi_1.Class1InstanceApi, class2MessagesApi_1.Class2MessagesApi, class3ChatsApi_1.Class3ChatsApi, class4WebhooksApi_1.Class4WebhooksApi, class5QueuesApi_1.Class5QueuesApi, class6BanApi_1.Class6BanApi, class7TestingApi_1.Class7TestingApi];
