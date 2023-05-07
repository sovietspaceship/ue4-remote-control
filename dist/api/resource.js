"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UE4_SERVER_PORT = 8080;
class Resource {
    makeRequest(method, endpoint, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.omitUndefined(body)),
            };
            const response = yield fetch(`http://localhost:${UE4_SERVER_PORT}${endpoint}`, options);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json();
        });
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