const UE4_SERVER_PORT = 8080;

export type HttpMethodCalls = 'put' | 'PUT';

export class Resource {
  async makeRequest<Req, Res>(
    method: HttpMethodCalls,
    endpoint: string,
    body: Req
  ): Promise<Res> {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.omitUndefined(body)),
    };

    const response = await fetch(
      `http://localhost:${UE4_SERVER_PORT}${endpoint}`,
      options
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  }

  omitUndefined(obj: any): any {
    return Object.entries(obj).reduce((acc: any, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }
}
