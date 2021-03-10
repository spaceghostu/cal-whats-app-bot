"use strict";
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
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./ack"), exports);
__exportStar(require("./banSettings"), exports);
__exportStar(require("./banTestAction"), exports);
__exportStar(require("./banTestStatus"), exports);
__exportStar(require("./chat"), exports);
__exportStar(require("./chatIdProp"), exports);
__exportStar(require("./chatUpdate"), exports);
__exportStar(require("./chats"), exports);
__exportStar(require("./clearActionsQueueStatus"), exports);
__exportStar(require("./clearMessagesQueueStatus"), exports);
__exportStar(require("./createGroupAction"), exports);
__exportStar(require("./createGroupStatus"), exports);
__exportStar(require("./forwardMessageRequest"), exports);
__exportStar(require("./groupParticipantAction"), exports);
__exportStar(require("./groupParticipantStatus"), exports);
__exportStar(require("./inlineResponse200"), exports);
__exportStar(require("./inlineResponse2001"), exports);
__exportStar(require("./inlineResponse2002"), exports);
__exportStar(require("./inlineResponse2003"), exports);
__exportStar(require("./inlineResponse2004"), exports);
__exportStar(require("./inlineResponse2005"), exports);
__exportStar(require("./inlineResponse2005Update"), exports);
__exportStar(require("./inlineResponse401"), exports);
__exportStar(require("./instanceStatus"), exports);
__exportStar(require("./instanceStatusAction"), exports);
__exportStar(require("./instanceStatusLink"), exports);
__exportStar(require("./instanceStatusStatusData"), exports);
__exportStar(require("./instanceStatusStatusDataActions"), exports);
__exportStar(require("./message"), exports);
__exportStar(require("./messages"), exports);
__exportStar(require("./outboundAction"), exports);
__exportStar(require("./outboundActions"), exports);
__exportStar(require("./outboundMessage"), exports);
__exportStar(require("./outboundMessages"), exports);
__exportStar(require("./phoneProp"), exports);
__exportStar(require("./readChatAction"), exports);
__exportStar(require("./readChatStatus"), exports);
__exportStar(require("./sendContactRequest"), exports);
__exportStar(require("./sendFileRequest"), exports);
__exportStar(require("./sendLinkRequest"), exports);
__exportStar(require("./sendLocationRequest"), exports);
__exportStar(require("./sendMessageRequest"), exports);
__exportStar(require("./sendMessageStatus"), exports);
__exportStar(require("./sendPTTRequest"), exports);
__exportStar(require("./sendVCardRequest"), exports);
__exportStar(require("./setWebhookStatus"), exports);
__exportStar(require("./settings"), exports);
__exportStar(require("./status"), exports);
__exportStar(require("./statuses"), exports);
__exportStar(require("./webhookStatus"), exports);
__exportStar(require("./webhookUrl"), exports);
var ack_1 = require("./ack");
var banSettings_1 = require("./banSettings");
var banTestAction_1 = require("./banTestAction");
var banTestStatus_1 = require("./banTestStatus");
var chat_1 = require("./chat");
var chatIdProp_1 = require("./chatIdProp");
var chatUpdate_1 = require("./chatUpdate");
var chats_1 = require("./chats");
var clearActionsQueueStatus_1 = require("./clearActionsQueueStatus");
var clearMessagesQueueStatus_1 = require("./clearMessagesQueueStatus");
var createGroupAction_1 = require("./createGroupAction");
var createGroupStatus_1 = require("./createGroupStatus");
var forwardMessageRequest_1 = require("./forwardMessageRequest");
var groupParticipantAction_1 = require("./groupParticipantAction");
var groupParticipantStatus_1 = require("./groupParticipantStatus");
var inlineResponse200_1 = require("./inlineResponse200");
var inlineResponse2001_1 = require("./inlineResponse2001");
var inlineResponse2002_1 = require("./inlineResponse2002");
var inlineResponse2003_1 = require("./inlineResponse2003");
var inlineResponse2004_1 = require("./inlineResponse2004");
var inlineResponse2005_1 = require("./inlineResponse2005");
var inlineResponse2005Update_1 = require("./inlineResponse2005Update");
var inlineResponse401_1 = require("./inlineResponse401");
var instanceStatus_1 = require("./instanceStatus");
var instanceStatusAction_1 = require("./instanceStatusAction");
var instanceStatusLink_1 = require("./instanceStatusLink");
var instanceStatusStatusData_1 = require("./instanceStatusStatusData");
var instanceStatusStatusDataActions_1 = require("./instanceStatusStatusDataActions");
var message_1 = require("./message");
var messages_1 = require("./messages");
var outboundAction_1 = require("./outboundAction");
var outboundActions_1 = require("./outboundActions");
var outboundMessage_1 = require("./outboundMessage");
var outboundMessages_1 = require("./outboundMessages");
var phoneProp_1 = require("./phoneProp");
var readChatAction_1 = require("./readChatAction");
var readChatStatus_1 = require("./readChatStatus");
var sendContactRequest_1 = require("./sendContactRequest");
var sendFileRequest_1 = require("./sendFileRequest");
var sendLinkRequest_1 = require("./sendLinkRequest");
var sendLocationRequest_1 = require("./sendLocationRequest");
var sendMessageRequest_1 = require("./sendMessageRequest");
var sendMessageStatus_1 = require("./sendMessageStatus");
var sendPTTRequest_1 = require("./sendPTTRequest");
var sendVCardRequest_1 = require("./sendVCardRequest");
var setWebhookStatus_1 = require("./setWebhookStatus");
var settings_1 = require("./settings");
var status_1 = require("./status");
var statuses_1 = require("./statuses");
var webhookStatus_1 = require("./webhookStatus");
var webhookUrl_1 = require("./webhookUrl");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "Ack.StatusEnum": ack_1.Ack.StatusEnum,
    "InlineResponse200.AccountStatusEnum": inlineResponse200_1.InlineResponse200.AccountStatusEnum,
    "InlineResponse2001.AccountStatusEnum": inlineResponse2001_1.InlineResponse2001.AccountStatusEnum,
    "InlineResponse2002.AccountStatusEnum": inlineResponse2002_1.InlineResponse2002.AccountStatusEnum,
    "InlineResponse2003.AccountStatusEnum": inlineResponse2003_1.InlineResponse2003.AccountStatusEnum,
    "InstanceStatus.AccountStatusEnum": instanceStatus_1.InstanceStatus.AccountStatusEnum,
    "InstanceStatusAction.ActEnum": instanceStatusAction_1.InstanceStatusAction.ActEnum,
    "InstanceStatusStatusData.SubstatusEnum": instanceStatusStatusData_1.InstanceStatusStatusData.SubstatusEnum,
    "InstanceStatusStatusData.ReasonEnum": instanceStatusStatusData_1.InstanceStatusStatusData.ReasonEnum,
    "Message.TypeEnum": message_1.Message.TypeEnum,
    "OutboundAction.TypeEnum": outboundAction_1.OutboundAction.TypeEnum,
    "OutboundMessage.TypeEnum": outboundMessage_1.OutboundMessage.TypeEnum,
};
var typeMap = {
    "Ack": ack_1.Ack,
    "BanSettings": banSettings_1.BanSettings,
    "BanTestAction": banTestAction_1.BanTestAction,
    "BanTestStatus": banTestStatus_1.BanTestStatus,
    "Chat": chat_1.Chat,
    "ChatIdProp": chatIdProp_1.ChatIdProp,
    "ChatUpdate": chatUpdate_1.ChatUpdate,
    "Chats": chats_1.Chats,
    "ClearActionsQueueStatus": clearActionsQueueStatus_1.ClearActionsQueueStatus,
    "ClearMessagesQueueStatus": clearMessagesQueueStatus_1.ClearMessagesQueueStatus,
    "CreateGroupAction": createGroupAction_1.CreateGroupAction,
    "CreateGroupStatus": createGroupStatus_1.CreateGroupStatus,
    "ForwardMessageRequest": forwardMessageRequest_1.ForwardMessageRequest,
    "GroupParticipantAction": groupParticipantAction_1.GroupParticipantAction,
    "GroupParticipantStatus": groupParticipantStatus_1.GroupParticipantStatus,
    "InlineResponse200": inlineResponse200_1.InlineResponse200,
    "InlineResponse2001": inlineResponse2001_1.InlineResponse2001,
    "InlineResponse2002": inlineResponse2002_1.InlineResponse2002,
    "InlineResponse2003": inlineResponse2003_1.InlineResponse2003,
    "InlineResponse2004": inlineResponse2004_1.InlineResponse2004,
    "InlineResponse2005": inlineResponse2005_1.InlineResponse2005,
    "InlineResponse2005Update": inlineResponse2005Update_1.InlineResponse2005Update,
    "InlineResponse401": inlineResponse401_1.InlineResponse401,
    "InstanceStatus": instanceStatus_1.InstanceStatus,
    "InstanceStatusAction": instanceStatusAction_1.InstanceStatusAction,
    "InstanceStatusLink": instanceStatusLink_1.InstanceStatusLink,
    "InstanceStatusStatusData": instanceStatusStatusData_1.InstanceStatusStatusData,
    "InstanceStatusStatusDataActions": instanceStatusStatusDataActions_1.InstanceStatusStatusDataActions,
    "Message": message_1.Message,
    "Messages": messages_1.Messages,
    "OutboundAction": outboundAction_1.OutboundAction,
    "OutboundActions": outboundActions_1.OutboundActions,
    "OutboundMessage": outboundMessage_1.OutboundMessage,
    "OutboundMessages": outboundMessages_1.OutboundMessages,
    "PhoneProp": phoneProp_1.PhoneProp,
    "ReadChatAction": readChatAction_1.ReadChatAction,
    "ReadChatStatus": readChatStatus_1.ReadChatStatus,
    "SendContactRequest": sendContactRequest_1.SendContactRequest,
    "SendFileRequest": sendFileRequest_1.SendFileRequest,
    "SendLinkRequest": sendLinkRequest_1.SendLinkRequest,
    "SendLocationRequest": sendLocationRequest_1.SendLocationRequest,
    "SendMessageRequest": sendMessageRequest_1.SendMessageRequest,
    "SendMessageStatus": sendMessageStatus_1.SendMessageStatus,
    "SendPTTRequest": sendPTTRequest_1.SendPTTRequest,
    "SendVCardRequest": sendVCardRequest_1.SendVCardRequest,
    "SetWebhookStatus": setWebhookStatus_1.SetWebhookStatus,
    "Settings": settings_1.Settings,
    "Status": status_1.Status,
    "Statuses": statuses_1.Statuses,
    "WebhookStatus": webhookStatus_1.WebhookStatus,
    "WebhookUrl": webhookUrl_1.WebhookUrl,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
