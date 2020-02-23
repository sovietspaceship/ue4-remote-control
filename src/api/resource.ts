import * as rp from 'request-promise'

const UE4_SERVER_PORT = 8080

export type HttpMethodCalls = 'put'

export class Resource {
    async makeRequest<Req, Res>(method: HttpMethodCalls, endpoint: string, body: Req) {
        const response = await rp(`http://localhost:${UE4_SERVER_PORT}${endpoint}`, {
            method,
            body: body,
            json: true,
        })
        return response as Res
    }
}