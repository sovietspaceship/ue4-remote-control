import { Resource } from '../api/resource'

import { ObjectPath } from '../engine/types'

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
    constructor(public objectPath: ObjectPath) {
        super()
    }
    async remoteObjectCall(properties: RemoteObjectCall) {
        return await this.makeRequest<RemoteObjectCall, RemoteObjectCallResponse>('put', '/remote/object/call', properties)
    }
    async remoteObjectProperty(properties: RemoteObjectProperty) {
        return this.makeRequest<RemoteObjectProperty, RemoteObjectPropertyResponse>('put', '/remote/object/property', properties)
    }
    async get(property: string) {
        if (this.properties.hasOwnProperty(property)) {
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
        return this.remoteObjectCall({
            objectPath: this.objectPath,
            functionName: method,
            parameters,
            generateTransaction,
        })
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

export function buildObjectPath(path: string, objects: { name: string, subobject: string }[]) {
    return objects.reduce((path, object) => `${path}:${object.name}.${object.subobject}`, `${path}/`)
}