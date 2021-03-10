"use strict";
/**
 * Chat API SDK
 * The SDK allows you to receive and send messages through your WhatsApp account. [Sign up now](https://app.chat-api.com/)  The Chat API is based on the WhatsApp WEB protocol and excludes the ban both when using libraries from mgp25 and the like. Despite this, your account can be banned by anti-spam system WhatsApp after several clicking the \"block\" button.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: sale@chat-api.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadChatAction = void 0;
var ReadChatAction = /** @class */ (function () {
    function ReadChatAction() {
    }
    ReadChatAction.getAttributeTypeMap = function () {
        return ReadChatAction.attributeTypeMap;
    };
    ReadChatAction.discriminator = undefined;
    ReadChatAction.attributeTypeMap = [
        {
            "name": "chatId",
            "baseName": "chatId",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        }
    ];
    return ReadChatAction;
}());
exports.ReadChatAction = ReadChatAction;
