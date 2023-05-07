export declare type HttpMethodCalls = 'put' | 'PUT';
export declare class Resource {
    makeRequest<Req, Res>(method: HttpMethodCalls, endpoint: string, body: Req): Promise<Res>;
    getPort(): number;
    omitUndefined(obj: any): any;
}
