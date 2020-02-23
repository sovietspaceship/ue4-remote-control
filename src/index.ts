import { UObject } from './objects/uobject'
import { AActor } from './objects/actor';
import { EditorLevelLibrary } from './objects/editor-level-library'
import { Resource, HttpMethodCalls } from './api/resource'

import * as Schema from './api/schema'
import * as EngineTypes from './engine/types'

export default {
    Schema,
    EngineTypes,
    UObject,
    AActor,
    EditorLevelLibrary,
    Resource,
    makeRequest
}

function makeRequest(method: HttpMethodCalls, endpoint: string, body: Object) {
    const resource = new Resource()
    resource.makeRequest<Object, Object>(method, endpoint, body)
}