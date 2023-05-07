"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE4_SERVER_PORT = 8080;
class Resource {
    async makeRequest(method, endpoint, body) {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.omitUndefined(body)),
        };
        const response = await fetch(`http://localhost:${UE4_SERVER_PORT}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
    }
    omitUndefined(obj) {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
    }
}
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map