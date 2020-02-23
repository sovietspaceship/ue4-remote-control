import { Resource } from '../api/resource'

export type ObjectPath = string

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
    async load() {
        this.properties = await this.remoteObjectProperty({
            access: "READ_ACCESS",
            objectPath: this.objectPath
        }) as UnknownObject
    }
    async call(method: string, parameters?: UnknownObject) {
        return this.remoteObjectCall({
            objectPath: this.objectPath,
            functionName: method,
            parameters
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

    async setProperty(property: string, value: UnknownValue) {
        await this.remoteObjectProperty({
            access: "WRITE_ACCESS",
            propertyName: property,
            propertyValue: value
        })
        this.properties[property] = value
    }
}