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

import { RequestFile } from './models';

export class ClearMessagesQueueStatus {
    /**
    * Messages queue clear status
    */
    'message'?: string;
    /**
    * Content of the first hundred messages from the cleaned queue
    */
    'messageTextsExample'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "messageTextsExample",
            "baseName": "messageTextsExample",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ClearMessagesQueueStatus.attributeTypeMap;
    }
}

