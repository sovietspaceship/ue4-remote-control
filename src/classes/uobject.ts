import { Resource } from '../api/resource'

import { UObjectPath } from '../engine/types'

import {
    RemoteObjectCall,
    RemoteObjectCallResponse,
    RemoteObjectProperty,
    RemoteObjectPropertyResponse,
    UnknownObject,
    UnknownValue
} from '../api/schema'

export class UObject extends Resource {
    properties: UnknownObject = {}
    constructor(public objectPath: UObjectPath) {
        super()
    }
    async remoteObjectCall(properties: RemoteObjectCall) {
        return await this.makeRequest<RemoteObjectCall, RemoteObjectCallResponse>('put', '/remote/object/call', properties)
    }
    async remoteObjectProperty(properties: RemoteObjectProperty) {
        return this.makeRequest<RemoteObjectProperty, RemoteObjectPropertyResponse>('put', '/remote/object/property', properties)
    }
    async get(property: string, reload?: boolean) {
        if (!reload && this.properties.hasOwnProperty(property)) {
            return this.properties[property]
        }
        return this.getProperty(property)
    }
    async loadAll() {
        this.properties = await this.remoteObjectProperty({
            access: "READ_ACCESS",
            objectPath: this.objectPath
        }) as UnknownObject
    }
    async call(method: string, parameters?: UnknownObject, generateTransaction?: boolean) {
        const options = {
            objectPath: this.objectPath,
            functionName: method,
            parameters,
            generateTransaction,
        }
        if (parameters) {
            options.parameters = { ...parameters }
            for (const key in options.parameters) {
                const param: any = parameters[key]
                if (param && param.hasOwnProperty('objectPath')) {
                    options.parameters[key] = (param as UObject).objectPath
                }
            }
        }
        return this.remoteObjectCall(options)
    }
    async getProperty(property: string) {
        const value = await this.remoteObjectProperty({
            access: "READ_ACCESS",
            objectPath: this.objectPath,
            property,
        })
        this.properties[property] = value
        return value
    }
    async setProperty(property: string, value: UnknownValue): Promise<UnknownValue> {
        await this.remoteObjectProperty({
            access: "WRITE_ACCESS",
            propertyName: property,
            propertyValue: value
        })
        this.properties[property] = value
        return value
    }
}

export function buildUObjectPath(path: string, objects: { name: string, subobject: string }[]) {
    return objects.reduce((path, object) => `${path}:${object.name}.${object.subobject}`, `${path}/`)
}