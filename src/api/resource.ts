import * as rp from 'request-promise'

const UE4_SERVER_PORT = 8080

export type HttpMethodCalls = 'put' | 'PUT'

import { omitBy, isUndefined } from 'lodash'

export class Resource {
    async makeRequest<Req, Res>(method: HttpMethodCalls, endpoint: string, body: Req): Promise<Res> {
        const options: rp.Options = {
            uri: `http://localhost:${UE4_SERVER_PORT}${endpoint}`,
            method,
            body: omitBy(body, isUndefined),
            json: true
        };
        return await rp(options) as Res
    }
}