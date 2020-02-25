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
const resource_1 = require("../api/resource");
class UObject extends resource_1.Resource {
    constructor(objectPath) {
        super();
        this.objectPath = objectPath;
        this.properties = {};
    }
    remoteObjectCall(properties) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest('put', '/remote/object/call', properties);
        });
    }
    remoteObjectProperty(properties) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('put', '/remote/object/property', properties);
        });
    }
    get(property, reload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!reload && this.properties.hasOwnProperty(property)) {
                return this.properties[property];
            }
            return this.getProperty(property);
        });
    }
    loadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.properties = (yield this.remoteObjectProperty({
                access: "READ_ACCESS",
                objectPath: this.objectPath
            }));
        });
    }
    call(method, parameters, generateTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                objectPath: this.objectPath,
                functionName: method,
                parameters,
                generateTransaction,
            };
            if (parameters) {
                options.parameters = Object.assign({}, parameters);
                for (const key in options.parameters) {
                    const param = parameters[key];
                    if (param && param.hasOwnProperty('objectPath')) {
                        options.parameters[key] = param.objectPath;
                    }
                }
            }
            return this.remoteObjectCall(options);
        });
    }
    getProperty(property) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.remoteObjectProperty({
                access: "READ_ACCESS",
                objectPath: this.objectPath,
                property,
            });
            this.properties[property] = value;
            return value;
        });
    }
    setProperty(property, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.remoteObjectProperty({
                access: "WRITE_ACCESS",
                propertyName: property,
                propertyValue: value
            });
            this.properties[property] = value;
            return value;
        });
    }
}
exports.UObject = UObject;
function buildObjectPath(path, objects) {
    return objects.reduce((path, object) => `${path}:${object.name}.${object.subobject}`, `${path}/`);
}
exports.buildObjectPath = buildObjectPath;
//# sourceMappingURL=uobject.js.map