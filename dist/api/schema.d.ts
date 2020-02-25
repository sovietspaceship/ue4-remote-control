declare type RemoteObject = {
    objectPath: string;
};
export declare type UnknownObject = {
    [key: string]: UnknownValue;
};
export declare type UnknownValue = UnknownObject | number | string | boolean | null | UnknownValue[] | {};
export declare type RemoteObjectCall = RemoteObject & {
    functionName: string;
    parameters?: UnknownObject;
    generateTransaction?: boolean;
};
export declare type RemoteObjectCallResponse = UnknownValue;
export declare type ReturnValue<T> = {
    ReturnValue: T;
};
export declare type RemoteObjectReadProperty = RemoteObject & {
    access: 'READ_ACCESS';
    property?: string;
};
export declare type RemoteObjectWriteProperty = {
    access: 'WRITE_ACCESS' | 'WRITE_TRANSACTION_ACCESS';
    propertyName: string;
    propertyValue: UnknownValue;
};
export declare type RemoteObjectProperty = RemoteObjectReadProperty | RemoteObjectWriteProperty;
export declare type RemoteObjectPropertyResponse = UnknownValue;
export {};
