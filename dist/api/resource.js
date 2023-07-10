"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Resource {
    async makeRequest(method, endpoint, body) {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.omitUndefined(body)),
        };
        const response = await fetch(`http://localhost:${this.getPort()}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
    }
    getPort() {
        const port = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('UE_SERVER_PORT');
        return port ? parseInt(port, 10) : 8080;
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