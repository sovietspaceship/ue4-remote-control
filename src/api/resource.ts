import * as rp from 'request-promise'

const UE4_SERVER_PORT = 8080

type HttpMethodCalls = 'put'

export class Resource {
    protected async makeRequest<Req, Res>(method: HttpMethodCalls, endpoint: string, body: Req) {
        const response = await rp[method]({
            uri: 'http://localhost' + endpoint,
            port: UE4_SERVER_PORT,
            body: body,
        })
        return response as Res
    }
}