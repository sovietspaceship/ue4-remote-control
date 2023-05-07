"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class EditorLevelLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorLevelLibrary');
    }
    async ClearActorSelectionSet() {
        await this.call('ClearActorSelectionSet');
    }
    async ConvertActors(Actors, ActorClass, StaticMeshPackagePath) {
        const { ReturnValue } = await this.call('ConvertActors', { Actors, ActorClass, StaticMeshPackagePath });
        return ReturnValue;
    }
    async CreateProxyMeshActor(ActorsToMerge, MergeOptions) {
        return await this.call('CreateProxyMeshActor', { ActorsToMerge, MergeOptions });
    }
    async DestroyActor(ActorToDestroy) {
        const { ReturnValue } = await this.call('DestroyActor', { ActorToDestroy });
        return ReturnValue;
    }
    async EditorInvalidateViewports() {
        await this.call('EditorInvalidateViewports');
    }
    async EditorPlaySimulate() {
        await this.call('EditorPlaySimulate');
    }
    async EditorSetGameView(bGameView) {
        await this.call('EditorSetGameView', { bGameView });
    }
    async EjectPilotLevelActor() {
        await this.call('EjectPilotLevelActor');
    }
    async GetActorReference(PathToActor) {
        const { ReturnValue } = await this.call('GetActorReference', { PathToActor });
        return ReturnValue;
    }
    async GetAllLevelActors() {
        const { ReturnValue } = await this.call('GetAllLevelActors');
        return ReturnValue;
    }
    async GetAllLevelActorsComponents() {
        const { ReturnValue } = await this.call('GetAllLevelActorsComponents');
        return ReturnValue;
    }
    async GetEditorWorld() {
        const { ReturnValue } = await this.call('GetEditorWorld');
        return ReturnValue;
    }
    async GetGameWorld() {
        const { ReturnValue } = await this.call('GetGameWorld');
        return ReturnValue;
    }
    async GetLevelViewportCameraInfo(CameraLocation, CameraRotation) {
        const { ReturnValue } = await this.call('GetLevelViewportCameraInfo', { CameraLocation, CameraRotation });
        return ReturnValue;
    }
    async GetSelectedLevelActors() {
        const { ReturnValue } = await this.call('GetSelectedLevelActors');
        return ReturnValue;
    }
    async JoinStaticMeshActors(ActorsToJoin, JoinOptions) {
        const { ReturnValue } = await this.call('JoinStaticMeshActors', { ActorsToJoin, JoinOptions });
        return ReturnValue;
    }
    async LoadLevel(AssetPath) {
        const { ReturnValue } = await this.call('LoadLevel', { AssetPath });
        return ReturnValue;
    }
    async MergeStaticMeshActors(ActorsToMerge, MergeOptions) {
        return await this.call('MergeStaticMeshActors', { ActorsToMerge, MergeOptions });
    }
    async NewLevel(AssetPath) {
        const { ReturnValue } = await this.call('NewLevel', { AssetPath });
        return ReturnValue;
    }
    async NewLevelFromTemplate(AssetPath, TemplateAssetPath) {
        const { ReturnValue } = await this.call('NewLevelFromTemplate', { AssetPath, TemplateAssetPath });
        return ReturnValue;
    }
    async PilotLevelActor(ActorToPilot) {
        await this.call('PilotLevelActor', { ActorToPilot });
    }
    async ReplaceMeshComponentsMaterials(MeshComponents, MaterialToBeReplaced, NewMaterial) {
        await this.call('ReplaceMeshComponentsMaterials', { MeshComponents, MaterialToBeReplaced, NewMaterial });
    }
    async ReplaceMeshComponentsMaterialsOnActors(Actors, MaterialToBeReplaced, NewMaterial) {
        await this.call('ReplaceMeshComponentsMaterialsOnActors', { Actors, MaterialToBeReplaced, NewMaterial });
    }
    async ReplaceMeshComponentsMeshes(MeshComponents, MeshToBeReplaced, NewMesh) {
        await this.call('ReplaceMeshComponentsMeshes', { MeshComponents, MeshToBeReplaced, NewMesh });
    }
    async ReplaceMeshComponentsMeshesOnActors(Actors, MeshToBeReplaced, NewMesh) {
        await this.call('ReplaceMeshComponentsMeshesOnActors', { Actors, MeshToBeReplaced, NewMesh });
    }
    async SaveAllDirtyLevels() {
        const { ReturnValue } = await this.call('SaveAllDirtyLevels');
        return ReturnValue;
    }
    async SaveCurrentLevel() {
        const { ReturnValue } = await this.call('SaveCurrentLevel');
        return ReturnValue;
    }
    async SelectNothing() {
        await this.call('SelectNothing');
    }
    async SetActorSelectionState(Actor, bShouldBeSelected) {
        await this.call('SetActorSelectionState', { Actor, bShouldBeSelected });
    }
    async SetCurrentLevelByName(LevelName) {
        const { ReturnValue } = await this.call('SetCurrentLevelByName', { LevelName });
        return ReturnValue;
    }
    async SetLevelViewportCameraInfo(CameraLocation, CameraRotation) {
        await this.call('SetLevelViewportCameraInfo', { CameraLocation, CameraRotation });
    }
    async SetSelectedLevelActors(ActorsToSelect) {
        await this.call('SetSelectedLevelActors', { ActorsToSelect });
    }
    async SpawnActorFromClass(ActorClass, Location, Rotation) {
        const { ReturnValue } = await this.call('SpawnActorFromClass', { ActorClass, Location, Rotation });
        return ReturnValue;
    }
    async SpawnActorFromObject(ObjectToUse, Location, Rotation) {
        const { ReturnValue } = await this.call('SpawnActorFromObject', { ObjectToUse, Location, Rotation });
        return ReturnValue;
    }
}
exports.EditorLevelLibrary = EditorLevelLibrary;
//# sourceMappingURL=editor-level-library.js.map