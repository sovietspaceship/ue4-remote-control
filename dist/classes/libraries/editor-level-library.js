"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class EditorLevelLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorLevelLibrary');
    }
    ClearActorSelectionSet() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('ClearActorSelectionSet');
        });
    }
    ConvertActors(Actors, ActorClass, StaticMeshPackagePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ConvertActors', { Actors, ActorClass, StaticMeshPackagePath });
            return ReturnValue;
        });
    }
    CreateProxyMeshActor(ActorsToMerge, MergeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('CreateProxyMeshActor', { ActorsToMerge, MergeOptions });
        });
    }
    DestroyActor(ActorToDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DestroyActor', { ActorToDestroy });
            return ReturnValue;
        });
    }
    EditorInvalidateViewports() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('EditorInvalidateViewports');
        });
    }
    EditorPlaySimulate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('EditorPlaySimulate');
        });
    }
    EditorSetGameView(bGameView) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('EditorSetGameView', { bGameView });
        });
    }
    EjectPilotLevelActor() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('EjectPilotLevelActor');
        });
    }
    GetActorReference(PathToActor) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetActorReference', { PathToActor });
            return ReturnValue;
        });
    }
    GetAllLevelActors() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetAllLevelActors');
            return ReturnValue;
        });
    }
    GetAllLevelActorsComponents() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetAllLevelActorsComponents');
            return ReturnValue;
        });
    }
    GetEditorWorld() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetEditorWorld');
            return ReturnValue;
        });
    }
    GetGameWorld() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetGameWorld');
            return ReturnValue;
        });
    }
    GetLevelViewportCameraInfo(CameraLocation, CameraRotation) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetLevelViewportCameraInfo', { CameraLocation, CameraRotation });
            return ReturnValue;
        });
    }
    GetSelectedLevelActors() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetSelectedLevelActors');
            return ReturnValue;
        });
    }
    JoinStaticMeshActors(ActorsToJoin, JoinOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('JoinStaticMeshActors', { ActorsToJoin, JoinOptions });
            return ReturnValue;
        });
    }
    LoadLevel(AssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('LoadLevel', { AssetPath });
            return ReturnValue;
        });
    }
    MergeStaticMeshActors(ActorsToMerge, MergeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('MergeStaticMeshActors', { ActorsToMerge, MergeOptions });
        });
    }
    NewLevel(AssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('NewLevel', { AssetPath });
            return ReturnValue;
        });
    }
    NewLevelFromTemplate(AssetPath, TemplateAssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('NewLevelFromTemplate', { AssetPath, TemplateAssetPath });
            return ReturnValue;
        });
    }
    PilotLevelActor(ActorToPilot) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PilotLevelActor', { ActorToPilot });
        });
    }
    ReplaceMeshComponentsMaterials(MeshComponents, MaterialToBeReplaced, NewMaterial) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('ReplaceMeshComponentsMaterials', { MeshComponents, MaterialToBeReplaced, NewMaterial });
        });
    }
    ReplaceMeshComponentsMaterialsOnActors(Actors, MaterialToBeReplaced, NewMaterial) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('ReplaceMeshComponentsMaterialsOnActors', { Actors, MaterialToBeReplaced, NewMaterial });
        });
    }
    ReplaceMeshComponentsMeshes(MeshComponents, MeshToBeReplaced, NewMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('ReplaceMeshComponentsMeshes', { MeshComponents, MeshToBeReplaced, NewMesh });
        });
    }
    ReplaceMeshComponentsMeshesOnActors(Actors, MeshToBeReplaced, NewMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('ReplaceMeshComponentsMeshesOnActors', { Actors, MeshToBeReplaced, NewMesh });
        });
    }
    SaveAllDirtyLevels() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SaveAllDirtyLevels');
            return ReturnValue;
        });
    }
    SaveCurrentLevel() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SaveCurrentLevel');
            return ReturnValue;
        });
    }
    SelectNothing() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SelectNothing');
        });
    }
    SetActorSelectionState(Actor, bShouldBeSelected) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetActorSelectionState', { Actor, bShouldBeSelected });
        });
    }
    SetCurrentLevelByName(LevelName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetCurrentLevelByName', { LevelName });
            return ReturnValue;
        });
    }
    SetLevelViewportCameraInfo(CameraLocation, CameraRotation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetLevelViewportCameraInfo', { CameraLocation, CameraRotation });
        });
    }
    SetSelectedLevelActors(ActorsToSelect) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetSelectedLevelActors', { ActorsToSelect });
        });
    }
    SpawnActorFromClass(ActorClass, Location, Rotation) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnActorFromClass', { ActorClass, Location, Rotation });
            return ReturnValue;
        });
    }
    SpawnActorFromObject(ObjectToUse, Location, Rotation) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnActorFromObject', { ObjectToUse, Location, Rotation });
            return ReturnValue;
        });
    }
}
exports.EditorLevelLibrary = EditorLevelLibrary;
//# sourceMappingURL=editor-level-library.js.map