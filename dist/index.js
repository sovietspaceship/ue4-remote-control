"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("./classes/uobject");
const actor_1 = require("./classes/actors/actor");
const editor_level_library_1 = require("./classes/libraries/editor-level-library");
const resource_1 = require("./api/resource");
const Schema = require("./api/schema");
const EngineTypes = require("./engine/types");
exports.default = {
    Schema,
    EngineTypes,
    UObject: uobject_1.UObject,
    AActor: actor_1.AActor,
    EditorLevelLibrary: editor_level_library_1.EditorLevelLibrary,
    Resource: resource_1.Resource,
    makeRequest
};
function makeRequest(method, endpoint, body) {
    const resource = new resource_1.Resource();
    resource.makeRequest(method, endpoint, body);
}
//# sourceMappingURL=index.js.map