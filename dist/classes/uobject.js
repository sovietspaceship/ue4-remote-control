"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../api/resource");
class UObject extends resource_1.Resource {
    constructor(objectPath) {
        super();
        this.objectPath = objectPath;
        this.properties = {};
    }
    async remoteObjectCall(properties) {
        return await this.makeRequest('put', '/remote/object/call', properties);
    }
    async remoteObjectProperty(properties) {
        return this.makeRequest('put', '/remote/object/property', properties);
    }
    async get(property, reload) {
        if (!reload && this.properties.hasOwnProperty(property)) {
            return this.properties[property];
        }
        return this.getProperty(property);
    }
    async loadAll() {
        this.properties = await this.remoteObjectProperty({
            access: "READ_ACCESS",
            objectPath: this.objectPath
        });
    }
    async call(method, parameters, generateTransaction) {
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
    }
    async getProperty(property) {
        const value = await this.remoteObjectProperty({
            access: "READ_ACCESS",
            objectPath: this.objectPath,
            property,
        });
        this.properties[property] = value;
        return value;
    }
    async setProperty(property, value) {
        await this.remoteObjectProperty({
            access: "WRITE_ACCESS",
            propertyName: property,
            propertyValue: value
        });
        this.properties[property] = value;
        return value;
    }
}
exports.UObject = UObject;
function buildUObjectPath(path, objects) {
    return objects.reduce((path, object) => `${path}:${object.name}.${object.subobject}`, `${path}/`);
}
exports.buildUObjectPath = buildUObjectPath;
//# sourceMappingURL=uobject.js.map