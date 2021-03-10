export * from './class1InstanceApi';
import { Class1InstanceApi } from './class1InstanceApi';
export * from './class2MessagesApi';
import { Class2MessagesApi } from './class2MessagesApi';
export * from './class3ChatsApi';
import { Class3ChatsApi } from './class3ChatsApi';
export * from './class4WebhooksApi';
import { Class4WebhooksApi } from './class4WebhooksApi';
export * from './class5QueuesApi';
import { Class5QueuesApi } from './class5QueuesApi';
export * from './class6BanApi';
import { Class6BanApi } from './class6BanApi';
export * from './class7TestingApi';
import { Class7TestingApi } from './class7TestingApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [Class1InstanceApi, Class2MessagesApi, Class3ChatsApi, Class4WebhooksApi, Class5QueuesApi, Class6BanApi, Class7TestingApi];
