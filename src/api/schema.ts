
// common

type RemoteObject = {
    objectPath: string
}

export type UnknownObject = { [key: string]: UnknownValue }

export type UnknownValue = UnknownObject | number | string | boolean | null | UnknownValue[] | {}

// PUT /remote/object/call

export type RemoteObjectCall = RemoteObject & {
    functionName: string,
    parameters?: UnknownObject,
    generateTransaction?: boolean
}

export type RemoteObjectCallResponse = UnknownObject

// PUT /remote/object/property

export type RemoteObjectReadProperty = RemoteObject & {
    access: 'READ_ACCESS',
    property?: string
}

export type RemoteObjectWriteProperty = {
    access: 'WRITE_ACCESS' | 'WRITE_TRANSACTION_ACCESS',
    propertyName: string,
    propertyValue: UnknownValue
}

export type RemoteObjectProperty = RemoteObjectReadProperty | RemoteObjectWriteProperty

export type RemoteObjectPropertyResponse = UnknownValue