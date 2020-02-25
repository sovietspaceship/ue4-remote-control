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
const rp = require("request-promise");
const UE4_SERVER_PORT = 8080;
const lodash_1 = require("lodash");
const debug = require("debug");
const d = debug('ue4-remote-control:Resource');
class Resource {
    makeRequest(method, endpoint, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                uri: `http://localhost:${UE4_SERVER_PORT}${endpoint}`,
                method,
                body: lodash_1.omitBy(body, lodash_1.isUndefined),
                json: true
            };
            d('>> request', options);
            const result = yield rp(options);
            d('<< result', result);
            return result;
        });
    }
}
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map