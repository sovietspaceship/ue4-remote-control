import { UObject } from './classes/uobject';
import { AActor } from './classes/actors/actor';
import { EditorLevelLibrary } from './classes/libraries/editor-level-library';
import { Resource, HttpMethodCalls } from './api/resource';
import * as Schema from './api/schema';
import * as EngineTypes from './engine/types';
declare const _default: {
    Schema: typeof Schema;
    EngineTypes: typeof EngineTypes;
    UObject: typeof UObject;
    AActor: typeof AActor;
    EditorLevelLibrary: typeof EditorLevelLibrary;
    Resource: typeof Resource;
    makeRequest: typeof makeRequest;
};
export default _default;
declare function makeRequest(method: HttpMethodCalls, endpoint: string, body: Object): void;
