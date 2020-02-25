import { Resource } from '../api/resource';
import { UObjectPath } from '../engine/types';
import { RemoteObjectCall, RemoteObjectProperty, UnknownObject, UnknownValue } from '../api/schema';
export declare class UObject extends Resource {
    objectPath: UObjectPath;
    properties: UnknownObject;
    constructor(objectPath: UObjectPath);
    remoteObjectCall(properties: RemoteObjectCall): Promise<UnknownValue>;
    remoteObjectProperty(properties: RemoteObjectProperty): Promise<UnknownValue>;
    get(property: string, reload?: boolean): Promise<UnknownValue>;
    loadAll(): Promise<void>;
    call(method: string, parameters?: UnknownObject, generateTransaction?: boolean): Promise<UnknownValue>;
    getProperty(property: string): Promise<UnknownValue>;
    setProperty(property: string, value: UnknownValue): Promise<UnknownValue>;
}
export declare function buildUObjectPath(path: string, objects: {
    name: string;
    subobject: string;
}[]): string;
