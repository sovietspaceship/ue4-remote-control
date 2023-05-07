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
      `http://localhost:${this.getPort()}${endpoint}`,
      options
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  }

  getPort(): number {
    const port = localStorage?.getItem('UE_SERVER_PORT');
    return port ? parseInt(port, 10) : 8080;
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
