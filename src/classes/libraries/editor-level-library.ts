import { UObject } from '../uobject'
import { ReturnValue } from '../../api/schema'
import { AStaticMeshActor } from '../actors/static-mesh-actor'
import { FVector, FRotator, FName, FString, FEditorScriptingMergeStaticMeshActorsOptions, FEditorScriptingJoinStaticMeshActorsOptions, FEditorScriptingCreateProxyMeshActorOptions } from '../../engine/types'
import { AActor } from '../actors/actor'
import { UClass } from '../objects/class'
import { UStaticMesh } from '../objects/static-mesh'
import { UStaticMeshComponent } from '../objects/static-mesh-component'
import { UMaterialInterface } from '../objects/material-interface'
import { UMeshComponent } from '../objects/mesh-component'
import { UWorld } from '../objects/world'
import { UActorComponent } from '../objects/actor-component'

type CreateProxyMeshActorReturn = {
    ReturnValue: boolean,
    OutMergedActor: AStaticMeshActor
}
type MergeStaticMeshActorsReturn = {
    ReturnValue: boolean,
    OutMergedActor: AStaticMeshActor
}

export class EditorLevelLibrary extends UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorLevelLibrary')
    }

    async ClearActorSelectionSet(): Promise<void> {
        await this.call('ClearActorSelectionSet')
    }

    async ConvertActors(Actors: AActor[], ActorClass: UClass, StaticMeshPackagePath: FString): Promise<AActor[]> {
        const { ReturnValue } = await this.call('ConvertActors', { Actors, ActorClass, StaticMeshPackagePath }) as ReturnValue<AActor[]>
        return ReturnValue
    }

    async CreateProxyMeshActor(ActorsToMerge: AStaticMeshActor[], MergeOptions: FEditorScriptingCreateProxyMeshActorOptions): Promise<CreateProxyMeshActorReturn> {
        return await this.call('CreateProxyMeshActor', { ActorsToMerge, MergeOptions }) as CreateProxyMeshActorReturn
    }

    async DestroyActor(ActorToDestroy: AActor): Promise<boolean> {
        const { ReturnValue } = await this.call('DestroyActor', { ActorToDestroy }) as ReturnValue<boolean>
        return ReturnValue
    }

    async EditorInvalidateViewports(): Promise<void> {
        await this.call('EditorInvalidateViewports')
    }

    async EditorPlaySimulate(): Promise<void> {
        await this.call('EditorPlaySimulate')
    }

    async EditorSetGameView(bGameView: boolean): Promise<void> {
        await this.call('EditorSetGameView', { bGameView })
    }

    async EjectPilotLevelActor(): Promise<void> {
        await this.call('EjectPilotLevelActor')
    }

    async GetActorReference(PathToActor: FString): Promise<AActor> {
        const { ReturnValue } = await this.call('GetActorReference', { PathToActor }) as ReturnValue<AActor>
        return ReturnValue
    }

    async GetAllLevelActors(): Promise<AActor[]> {
        const { ReturnValue } = await this.call('GetAllLevelActors') as ReturnValue<AActor[]>
        return ReturnValue
    }

    async GetAllLevelActorsComponents(): Promise<UActorComponent[]> {
        const { ReturnValue } = await this.call('GetAllLevelActorsComponents') as ReturnValue<UActorComponent[]>
        return ReturnValue
    }

    async GetEditorWorld(): Promise<UWorld> {
        const { ReturnValue } = await this.call('GetEditorWorld') as ReturnValue<UWorld>
        return ReturnValue
    }

    async GetGameWorld(): Promise<UWorld> {
        const { ReturnValue } = await this.call('GetGameWorld') as ReturnValue<UWorld>
        return ReturnValue
    }

    async GetLevelViewportCameraInfo(CameraLocation: FVector, CameraRotation: FRotator): Promise<boolean> {
        const { ReturnValue } = await this.call('GetLevelViewportCameraInfo', { CameraLocation, CameraRotation }) as ReturnValue<boolean>
        return ReturnValue
    }

    async GetSelectedLevelActors(): Promise<AActor[]> {
        const { ReturnValue } = await this.call('GetSelectedLevelActors') as ReturnValue<AActor[]>
        return ReturnValue
    }

    async JoinStaticMeshActors(ActorsToJoin: AStaticMeshActor[], JoinOptions: FEditorScriptingJoinStaticMeshActorsOptions): Promise<AActor> {
        const { ReturnValue } = await this.call('JoinStaticMeshActors', { ActorsToJoin, JoinOptions }) as ReturnValue<AActor>
        return ReturnValue
    }

    async LoadLevel(AssetPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('LoadLevel', { AssetPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async MergeStaticMeshActors(ActorsToMerge: AStaticMeshActor[], MergeOptions: FEditorScriptingMergeStaticMeshActorsOptions): Promise<MergeStaticMeshActorsReturn> {
        return await this.call('MergeStaticMeshActors', { ActorsToMerge, MergeOptions }) as MergeStaticMeshActorsReturn
    }

    async NewLevel(AssetPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('NewLevel', { AssetPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async NewLevelFromTemplate(AssetPath: FString, TemplateAssetPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('NewLevelFromTemplate', { AssetPath, TemplateAssetPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async PilotLevelActor(ActorToPilot: AActor): Promise<void> {
        await this.call('PilotLevelActor', { ActorToPilot })
    }

    async ReplaceMeshComponentsMaterials(MeshComponents: UMeshComponent[], MaterialToBeReplaced: UMaterialInterface, NewMaterial: UMaterialInterface): Promise<void> {
        await this.call('ReplaceMeshComponentsMaterials', { MeshComponents, MaterialToBeReplaced, NewMaterial })
    }

    async ReplaceMeshComponentsMaterialsOnActors(Actors: AActor[], MaterialToBeReplaced: UMaterialInterface, NewMaterial: UMaterialInterface): Promise<void> {
        await this.call('ReplaceMeshComponentsMaterialsOnActors', { Actors, MaterialToBeReplaced, NewMaterial })
    }

    async ReplaceMeshComponentsMeshes(MeshComponents: UStaticMeshComponent[], MeshToBeReplaced: UStaticMesh, NewMesh: UStaticMesh): Promise<void> {
        await this.call('ReplaceMeshComponentsMeshes', { MeshComponents, MeshToBeReplaced, NewMesh })
    }

    async ReplaceMeshComponentsMeshesOnActors(Actors: AActor[], MeshToBeReplaced: UStaticMesh, NewMesh: UStaticMesh): Promise<void> {
        await this.call('ReplaceMeshComponentsMeshesOnActors', { Actors, MeshToBeReplaced, NewMesh })
    }

    async SaveAllDirtyLevels(): Promise<boolean> {
        const { ReturnValue } = await this.call('SaveAllDirtyLevels') as ReturnValue<boolean>
        return ReturnValue
    }

    async SaveCurrentLevel(): Promise<boolean> {
        const { ReturnValue } = await this.call('SaveCurrentLevel') as ReturnValue<boolean>
        return ReturnValue
    }

    async SelectNothing(): Promise<void> {
        await this.call('SelectNothing')
    }

    async SetActorSelectionState(Actor: AActor, bShouldBeSelected: boolean): Promise<void> {
        await this.call('SetActorSelectionState', { Actor, bShouldBeSelected })
    }

    async SetCurrentLevelByName(LevelName: FName): Promise<boolean> {
        const { ReturnValue } = await this.call('SetCurrentLevelByName', { LevelName }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SetLevelViewportCameraInfo(CameraLocation: FVector, CameraRotation: FRotator): Promise<void> {
        await this.call('SetLevelViewportCameraInfo', { CameraLocation, CameraRotation })
    }

    async SetSelectedLevelActors(ActorsToSelect: AActor[]): Promise<void> {
        await this.call('SetSelectedLevelActors', { ActorsToSelect })
    }

    async SpawnActorFromClass(ActorClass: UClass, Location: FVector, Rotation: FRotator): Promise<AActor> {
        const { ReturnValue } = await this.call('SpawnActorFromClass', { ActorClass, Location, Rotation }) as ReturnValue<AActor>
        return ReturnValue
    }

    async SpawnActorFromObject(ObjectToUse: UObject, Location: FVector, Rotation: FRotator): Promise<AActor> {
        const { ReturnValue } = await this.call('SpawnActorFromObject', { ObjectToUse, Location, Rotation }) as ReturnValue<AActor>
        return ReturnValue
    }
}