import { UObject } from '../uobject'
import { ReturnValue } from '../../api/schema'
import { FName, UObjectRef, FMatrix, FVector, FHitResult, FRotator, TSubclassOf, FString, FVector2D, TOptional, TEnumAsByte } from '../../engine/types'
import { USkeletalMesh } from '../objects/skeletal-mesh'
import { AActor } from '../actors/actor'
import { UParticleSystem, USceneComponent, UForceFeedbackEffect, UForceFeedbackAttenuation, UForceFeedbackComponent, UParticleSystemComponent, USoundBase, UDialogueWave, USoundMix, USoundClass, APlayerController, USaveGame, UCameraShake, UPhysicalMaterial, UPrimitiveComponent, USoundConcurrency, USoundAttenuation, UDecalComponent, UAudioComponent, APawn, ULevelStreaming, APlayerCameraManager, ACharacter, UGameInstance, AGameModeBase, AGameStateBase, UReverbEffect, UInterface, UBlueprint, UDamageType, AController } from '../objects/unimplemented-objects'
import { EAttachLocation, EPSCPoolMethod, EMouseCaptureMode, ESuggestProjVelocityTraceOption, EPhysicalSurface, ECollisionChannel, ESpawnActorCollisionHandlingMethod, EObjectTypeQuery, EDrawDebugTrace } from '../../engine/enums'
import { FTransform, FDialogueContext, FIntVector, FPredictProjectilePathParams, FPredictProjectilePathResult, FLatentActionInfo, FMemoryReader, FCollisionResponseParams, FMinimalViewInfo, FAsyncLoadGameFromSlotDelegate, FAsyncSaveGameToSlotDelegate } from '../structs/unimplemented-structs'
import { UWorld } from '../objects/world'
import { UMaterialInterface } from '../objects/material-interface'
import { UStaticMesh } from '../objects/static-mesh'
import { UClass } from '../objects/class'

type Blueprint_PredictProjectilePath_ByObjectTypeReturn = {
    ReturnValue: boolean,
    OutHit: FHitResult,
    OutPathPositions: FVector[],
    OutLastTraceDestination: FVector
}
type Blueprint_PredictProjectilePath_ByTraceChannelReturn = {
    ReturnValue: boolean,
    OutHit: FHitResult,
    OutPathPositions: FVector[],
    OutLastTraceDestination: FVector
}
type CalculateViewProjectionMatricesFromMinimalViewReturn = {
    ReturnValue: void,
    OutViewMatrix: FMatrix,
    OutProjectionMatrix: FMatrix,
    OutViewProjectionMatrix: FMatrix
}
type CalculateViewProjectionMatricesFromViewTargetReturn = {
    ReturnValue: void,
    OutViewMatrix: FMatrix,
    OutProjectionMatrix: FMatrix,
    OutViewProjectionMatrix: FMatrix
}
type GetAllActorsOfClassReturn = {
    ReturnValue: void,
    OutActors: UObjectRef<AActor>[]
}
type GetAllActorsOfClassWithTagReturn = {
    ReturnValue: void,
    OutActors: UObjectRef<AActor>[]
}
type GetAllActorsWithInterfaceReturn = {
    ReturnValue: void,
    OutActors: UObjectRef<AActor>[]
}
type GetAllActorsWithTagReturn = {
    ReturnValue: void,
    OutActors: UObjectRef<AActor>[]
}
type LoadDataFromSlotReturn = {
    ReturnValue: boolean,
    OutSaveData: number[]
}
type PlayWorldCameraShakeReturn = {
    ReturnValue: void,
    OuterRadius: number
}
type SaveGameToMemoryReturn = {
    ReturnValue: boolean,
    OutSaveData: number[]
}
type SpawnObjectReturn = {
    ReturnValue: UObjectRef<UObject>,
    Outer: UObjectRef<UObject>
}
type SuggestProjectileVelocity_CustomArcReturn = {
    ReturnValue: boolean,
    OutLaunchVelocity: FVector
}

export class GameplayStatics extends UObject {
    constructor() {
        super('/Script/Editor.Default__GameplayStatics')
    }

    async ActivateReverbEffect(WorldContextObject: UObject, ReverbEffect: UReverbEffect, TagName: FName, Priority: number, Volume: number, FadeTime: number): Promise<void> {
        await this.call('ActivateReverbEffect', { WorldContextObject, ReverbEffect, TagName, Priority, Volume, FadeTime })
    }

    async ApplyDamage(DamagedActor: AActor, BaseDamage: number, EventInstigator: AController, DamageCauser: AActor, DamageTypeClass: TSubclassOf<UDamageType>): Promise<number> {
        const { ReturnValue } = await this.call('ApplyDamage', { DamagedActor, BaseDamage, EventInstigator, DamageCauser, DamageTypeClass }) as ReturnValue<number>
        return ReturnValue
    }

    async ApplyPointDamage(DamagedActor: AActor, BaseDamage: number, HitFromDirection: FVector, HitInfo: FHitResult, EventInstigator: AController, DamageCauser: AActor, DamageTypeClass: TSubclassOf<UDamageType>): Promise<number> {
        const { ReturnValue } = await this.call('ApplyPointDamage', { DamagedActor, BaseDamage, HitFromDirection, HitInfo, EventInstigator, DamageCauser, DamageTypeClass }) as ReturnValue<number>
        return ReturnValue
    }

    async ApplyRadialDamage(WorldContextObject: UObject, BaseDamage: number, Origin: FVector, DamageRadius: number, DamageTypeClass: TSubclassOf<UDamageType>, IgnoreActors: AActor[], DamageCauser: AActor, InstigatedByController: AController, bDoFullDamage: boolean, DamagePreventionChannel: ECollisionChannel): Promise<boolean> {
        const { ReturnValue } = await this.call('ApplyRadialDamage', { WorldContextObject, BaseDamage, Origin, DamageRadius, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, bDoFullDamage, DamagePreventionChannel }) as ReturnValue<boolean>
        return ReturnValue
    }

    async ApplyRadialDamageWithFalloff(WorldContextObject: UObject, BaseDamage: number, MinimumDamage: number, Origin: FVector, DamageInnerRadius: number, DamageOuterRadius: number, DamageFalloff: number, DamageTypeClass: TSubclassOf<UDamageType>, IgnoreActors: AActor[], DamageCauser: AActor, InstigatedByController: AController, DamagePreventionChannel: ECollisionChannel): Promise<boolean> {
        const { ReturnValue } = await this.call('ApplyRadialDamageWithFalloff', { WorldContextObject, BaseDamage, MinimumDamage, Origin, DamageInnerRadius, DamageOuterRadius, DamageFalloff, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, DamagePreventionChannel }) as ReturnValue<boolean>
        return ReturnValue
    }

    async AreAnyListenersWithinRange(WorldContextObject: UObject, Location: FVector, MaximumRange: number): Promise<boolean> {
        const { ReturnValue } = await this.call('AreAnyListenersWithinRange', { WorldContextObject, Location, MaximumRange }) as ReturnValue<boolean>
        return ReturnValue
    }

    async AreSubtitlesEnabled(): Promise<boolean> {
        const { ReturnValue } = await this.call('AreSubtitlesEnabled') as ReturnValue<boolean>
        return ReturnValue
    }

    async AsyncLoadGameFromSlot(SlotName: FString, UserIndex: number, LoadedDelegate: FAsyncLoadGameFromSlotDelegate): Promise<void> {
        await this.call('AsyncLoadGameFromSlot', { SlotName, UserIndex, LoadedDelegate })
    }

    async AsyncSaveGameToSlot(SaveGameObject: USaveGame, SlotName: FString, UserIndex: number, SavedDelegate: FAsyncSaveGameToSlotDelegate): Promise<void> {
        await this.call('AsyncSaveGameToSlot', { SaveGameObject, SlotName, UserIndex, SavedDelegate })
    }

    async BeginDeferredActorSpawnFromClass(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>, SpawnTransform: FTransform, CollisionHandlingOverride: ESpawnActorCollisionHandlingMethod, Owner: AActor): Promise<UObjectRef<AActor>> {
        const { ReturnValue } = await this.call('BeginDeferredActorSpawnFromClass', { WorldContextObject, ActorClass, SpawnTransform, CollisionHandlingOverride, Owner }) as ReturnValue<UObjectRef<AActor>>
        return ReturnValue
    }

    async BeginSpawningActorFromBlueprint(WorldContextObject: UObject, Blueprint: UBlueprint, SpawnTransform: FTransform, bNoCollisionFail: boolean): Promise<UObjectRef<AActor>> {
        const { ReturnValue } = await this.call('BeginSpawningActorFromBlueprint', { WorldContextObject, Blueprint, SpawnTransform, bNoCollisionFail }) as ReturnValue<UObjectRef<AActor>>
        return ReturnValue
    }

    async Blueprint_PredictProjectilePath_Advanced(WorldContextObject: UObject, PredictParams: FPredictProjectilePathParams, PredictResult: FPredictProjectilePathResult): Promise<boolean> {
        const { ReturnValue } = await this.call('Blueprint_PredictProjectilePath_Advanced', { WorldContextObject, PredictParams, PredictResult }) as ReturnValue<boolean>
        return ReturnValue
    }

    async Blueprint_PredictProjectilePath_ByObjectType(WorldContextObject: UObject, StartPos: FVector, LaunchVelocity: FVector, bTracePath: boolean, ProjectileRadius: number, ObjectTypes: TEnumAsByte<EObjectTypeQuery>[], bTraceComplex: boolean, ActorsToIgnore: AActor[], DrawDebugType: EDrawDebugTrace, DrawDebugTime: number, SimFrequency: number, MaxSimTime: number, OverrideGravityZ: number): Promise<Blueprint_PredictProjectilePath_ByObjectTypeReturn> {
        return await this.call('Blueprint_PredictProjectilePath_ByObjectType', { WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, ObjectTypes, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ }) as Blueprint_PredictProjectilePath_ByObjectTypeReturn
    }

    async Blueprint_PredictProjectilePath_ByTraceChannel(WorldContextObject: UObject, StartPos: FVector, LaunchVelocity: FVector, bTracePath: boolean, ProjectileRadius: number, TraceChannel: TEnumAsByte<ECollisionChannel>, bTraceComplex: boolean, ActorsToIgnore: AActor[], DrawDebugType: EDrawDebugTrace, DrawDebugTime: number, SimFrequency: number, MaxSimTime: number, OverrideGravityZ: number): Promise<Blueprint_PredictProjectilePath_ByTraceChannelReturn> {
        return await this.call('Blueprint_PredictProjectilePath_ByTraceChannel', { WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, TraceChannel, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ }) as Blueprint_PredictProjectilePath_ByTraceChannelReturn
    }

    async BlueprintSuggestProjectileVelocity(WorldContextObject: UObject, TossVelocity: FVector, StartLocation: FVector, EndLocation: FVector, LaunchSpeed: number, OverrideGravityZ: number, TraceOption: ESuggestProjVelocityTraceOption, CollisionRadius: number, bFavorHighArc: boolean, bDrawDebug: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('BlueprintSuggestProjectileVelocity', { WorldContextObject, TossVelocity, StartLocation, EndLocation, LaunchSpeed, OverrideGravityZ, TraceOption, CollisionRadius, bFavorHighArc, bDrawDebug }) as ReturnValue<boolean>
        return ReturnValue
    }

    async BreakHitResult(Hit: FHitResult, bBlockingHit: boolean, bInitialOverlap: boolean, Time: number, Distance: number, Location: FVector, ImpactPoint: FVector, Normal: FVector, ImpactNormal: FVector, PhysMat: UPhysicalMaterial, HitActor: AActor, HitComponent: UPrimitiveComponent, HitBoneName: FName, HitItem: number, FaceIndex: number, TraceStart: FVector, TraceEnd: FVector): Promise<void> {
        await this.call('BreakHitResult', { Hit, bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd })
    }

    async CalculateViewProjectionMatricesFromMinimalView(MinimalViewInfo: FMinimalViewInfo, CustomProjectionMatrix: TOptional<FMatrix>): Promise<CalculateViewProjectionMatricesFromMinimalViewReturn> {
        return await this.call('CalculateViewProjectionMatricesFromMinimalView', { MinimalViewInfo, CustomProjectionMatrix }) as CalculateViewProjectionMatricesFromMinimalViewReturn
    }

    async CalculateViewProjectionMatricesFromViewTarget(InViewTarget: AActor): Promise<CalculateViewProjectionMatricesFromViewTargetReturn> {
        return await this.call('CalculateViewProjectionMatricesFromViewTarget', { InViewTarget }) as CalculateViewProjectionMatricesFromViewTargetReturn
    }

    async CancelAsyncLoading(): Promise<void> {
        await this.call('CancelAsyncLoading')
    }

    async ClearSoundMixClassOverride(WorldContextObject: UObject, InSoundMixModifier: USoundMix, InSoundClass: USoundClass, FadeOutTime: number): Promise<void> {
        await this.call('ClearSoundMixClassOverride', { WorldContextObject, InSoundMixModifier, InSoundClass, FadeOutTime })
    }

    async ClearSoundMixModifiers(WorldContextObject: UObject): Promise<void> {
        await this.call('ClearSoundMixModifiers', { WorldContextObject })
    }

    async CreatePlayer(WorldContextObject: UObject, ControllerId: number, bSpawnPlayerController: boolean): Promise<UObjectRef<APlayerController>> {
        const { ReturnValue } = await this.call('CreatePlayer', { WorldContextObject, ControllerId, bSpawnPlayerController }) as ReturnValue<UObjectRef<APlayerController>>
        return ReturnValue
    }

    async CreateSaveGameObject(SaveGameClass: TSubclassOf<USaveGame>): Promise<UObjectRef<USaveGame>> {
        const { ReturnValue } = await this.call('CreateSaveGameObject', { SaveGameClass }) as ReturnValue<UObjectRef<USaveGame>>
        return ReturnValue
    }

    async CreateSound2D(WorldContextObject: UObject, Sound: USoundBase, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, ConcurrencySettings: USoundConcurrency, bPersistAcrossLevelTransition: boolean, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('CreateSound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async DeactivateReverbEffect(WorldContextObject: UObject, TagName: FName): Promise<FPredictProjectilePathParams> {
        const { ReturnValue } = await this.call('DeactivateReverbEffect', { WorldContextObject, TagName }) as ReturnValue<FPredictProjectilePathParams>
        return ReturnValue
    }

    async DeleteGameInSlot(SlotName: FString, UserIndex: number): Promise<boolean> {
        const { ReturnValue } = await this.call('DeleteGameInSlot', { SlotName, UserIndex }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DeprojectScreenToWorld(Player: APlayerController, ScreenPosition: FVector2D, WorldPosition: FVector, WorldDirection: FVector): Promise<boolean> {
        const { ReturnValue } = await this.call('DeprojectScreenToWorld', { Player, ScreenPosition, WorldPosition, WorldDirection }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DoesSaveGameExist(SlotName: FString, UserIndex: number): Promise<boolean> {
        const { ReturnValue } = await this.call('DoesSaveGameExist', { SlotName, UserIndex }) as ReturnValue<boolean>
        return ReturnValue
    }

    async EnableLiveStreaming(Enable: boolean): Promise<void> {
        await this.call('EnableLiveStreaming', { Enable })
    }

    async FindCollisionUV(Hit: FHitResult, UVChannel: number, UV: FVector2D): Promise<boolean> {
        const { ReturnValue } = await this.call('FindCollisionUV', { Hit, UVChannel, UV }) as ReturnValue<boolean>
        return ReturnValue
    }

    async FinishSpawningActor(Actor: AActor, SpawnTransform: FTransform): Promise<UObjectRef<AActor>> {
        const { ReturnValue } = await this.call('FinishSpawningActor', { Actor, SpawnTransform }) as ReturnValue<UObjectRef<AActor>>
        return ReturnValue
    }

    async FlushLevelStreaming(WorldContextObject: UObject): Promise<void> {
        await this.call('FlushLevelStreaming', { WorldContextObject })
    }

    async GetAccurateRealTime(WorldContextObject: UObject, Seconds: number, PartialSeconds: number): Promise<void> {
        await this.call('GetAccurateRealTime', { WorldContextObject, Seconds, PartialSeconds })
    }

    async GetActorArrayAverageLocation(Actors: AActor[]): Promise<FVector> {
        const { ReturnValue } = await this.call('GetActorArrayAverageLocation', { Actors }) as ReturnValue<FVector>
        return ReturnValue
    }

    async GetActorArrayBounds(Actors: AActor[], bOnlyCollidingComponents: boolean, Center: FVector, BoxExtent: FVector): Promise<void> {
        await this.call('GetActorArrayBounds', { Actors, bOnlyCollidingComponents, Center, BoxExtent })
    }

    async GetActorOfClass(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>): Promise<UObjectRef<AActor>> {
        const { ReturnValue } = await this.call('GetActorOfClass', { WorldContextObject, ActorClass }) as ReturnValue<UObjectRef<AActor>>
        return ReturnValue
    }

    async GetAllActorsOfClass(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>): Promise<GetAllActorsOfClassReturn> {
        return await this.call('GetAllActorsOfClass', { WorldContextObject, ActorClass }) as GetAllActorsOfClassReturn
    }

    async GetAllActorsOfClassWithTag(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>, Tag: FName): Promise<GetAllActorsOfClassWithTagReturn> {
        return await this.call('GetAllActorsOfClassWithTag', { WorldContextObject, ActorClass, Tag }) as GetAllActorsOfClassWithTagReturn
    }

    async GetAllActorsWithInterface(WorldContextObject: UObject, Interface: TSubclassOf<UInterface>): Promise<GetAllActorsWithInterfaceReturn> {
        return await this.call('GetAllActorsWithInterface', { WorldContextObject, Interface }) as GetAllActorsWithInterfaceReturn
    }

    async GetAllActorsWithTag(WorldContextObject: UObject, Tag: FName): Promise<GetAllActorsWithTagReturn> {
        return await this.call('GetAllActorsWithTag', { WorldContextObject, Tag }) as GetAllActorsWithTagReturn
    }

    async GetAudioTimeSeconds(WorldContextObject: UObject): Promise<number> {
        const { ReturnValue } = await this.call('GetAudioTimeSeconds', { WorldContextObject }) as ReturnValue<number>
        return ReturnValue
    }

    async GetCurrentLevelName(WorldContextObject: UObject, bRemovePrefixString: boolean): Promise<FString> {
        const { ReturnValue } = await this.call('GetCurrentLevelName', { WorldContextObject, bRemovePrefixString }) as ReturnValue<FString>
        return ReturnValue
    }

    async GetCurrentReverbEffect(WorldContextObject: UObject): Promise<UObjectRef<UReverbEffect>> {
        const { ReturnValue } = await this.call('GetCurrentReverbEffect', { WorldContextObject }) as ReturnValue<UObjectRef<UReverbEffect>>
        return ReturnValue
    }

    async GetEnableWorldRendering(WorldContextObject: UObject): Promise<boolean> {
        const { ReturnValue } = await this.call('GetEnableWorldRendering', { WorldContextObject }) as ReturnValue<boolean>
        return ReturnValue
    }

    async GetGameInstance(WorldContextObject: UObject): Promise<UObjectRef<UGameInstance>> {
        const { ReturnValue } = await this.call('GetGameInstance', { WorldContextObject }) as ReturnValue<UObjectRef<UGameInstance>>
        return ReturnValue
    }

    async GetGameMode(WorldContextObject: UObject): Promise<UObjectRef<AGameModeBase>> {
        const { ReturnValue } = await this.call('GetGameMode', { WorldContextObject }) as ReturnValue<UObjectRef<AGameModeBase>>
        return ReturnValue
    }

    async GetGameState(WorldContextObject: UObject): Promise<UObjectRef<AGameStateBase>> {
        const { ReturnValue } = await this.call('GetGameState', { WorldContextObject }) as ReturnValue<UObjectRef<AGameStateBase>>
        return ReturnValue
    }

    async GetGlobalTimeDilation(WorldContextObject: UObject): Promise<number> {
        const { ReturnValue } = await this.call('GetGlobalTimeDilation', { WorldContextObject }) as ReturnValue<number>
        return ReturnValue
    }

    async GetIntOption(Options: FString, Key: FString, DefaultValue: number): Promise<number> {
        const { ReturnValue } = await this.call('GetIntOption', { Options, Key, DefaultValue }) as ReturnValue<number>
        return ReturnValue
    }

    async GetKeyValue(Pair: FString, Key: FString, Value: FString): Promise<void> {
        await this.call('GetKeyValue', { Pair, Key, Value })
    }

    async GetMaxAudioChannelCount(WorldContextObject: UObject): Promise<number> {
        const { ReturnValue } = await this.call('GetMaxAudioChannelCount', { WorldContextObject }) as ReturnValue<number>
        return ReturnValue
    }

    async GetObjectClass(Object: UObject): Promise<UObjectRef<UClass>> {
        const { ReturnValue } = await this.call('GetObjectClass', { Object }) as ReturnValue<UObjectRef<UClass>>
        return ReturnValue
    }

    async GetPlatformName(): Promise<FString> {
        const { ReturnValue } = await this.call('GetPlatformName') as ReturnValue<FString>
        return ReturnValue
    }

    async GetPlayerCameraManager(WorldContextObject: UObject, PlayerIndex: number): Promise<UObjectRef<APlayerCameraManager>> {
        const { ReturnValue } = await this.call('GetPlayerCameraManager', { WorldContextObject, PlayerIndex }) as ReturnValue<UObjectRef<APlayerCameraManager>>
        return ReturnValue
    }

    async GetPlayerCharacter(WorldContextObject: UObject, PlayerIndex: number): Promise<UObjectRef<ACharacter>> {
        const { ReturnValue } = await this.call('GetPlayerCharacter', { WorldContextObject, PlayerIndex }) as ReturnValue<UObjectRef<ACharacter>>
        return ReturnValue
    }

    async GetPlayerController(WorldContextObject: UObject, PlayerIndex: number): Promise<UObjectRef<APlayerController>> {
        const { ReturnValue } = await this.call('GetPlayerController', { WorldContextObject, PlayerIndex }) as ReturnValue<UObjectRef<APlayerController>>
        return ReturnValue
    }

    async GetPlayerControllerFromID(WorldContextObject: UObject, ControllerID: number): Promise<UObjectRef<APlayerController>> {
        const { ReturnValue } = await this.call('GetPlayerControllerFromID', { WorldContextObject, ControllerID }) as ReturnValue<UObjectRef<APlayerController>>
        return ReturnValue
    }

    async GetPlayerControllerID(Player: APlayerController): Promise<number> {
        const { ReturnValue } = await this.call('GetPlayerControllerID', { Player }) as ReturnValue<number>
        return ReturnValue
    }

    async GetPlayerPawn(WorldContextObject: UObject, PlayerIndex: number): Promise<UObjectRef<APawn>> {
        const { ReturnValue } = await this.call('GetPlayerPawn', { WorldContextObject, PlayerIndex }) as ReturnValue<UObjectRef<APawn>>
        return ReturnValue
    }

    async GetRealTimeSeconds(WorldContextObject: UObject): Promise<number> {
        const { ReturnValue } = await this.call('GetRealTimeSeconds', { WorldContextObject }) as ReturnValue<number>
        return ReturnValue
    }

    async GetStreamingLevel(WorldContextObject: UObject, PackageName: FName): Promise<UObjectRef<ULevelStreaming>> {
        const { ReturnValue } = await this.call('GetStreamingLevel', { WorldContextObject, PackageName }) as ReturnValue<UObjectRef<ULevelStreaming>>
        return ReturnValue
    }

    async GetSurfaceType(Hit: FHitResult): Promise<EPhysicalSurface> {
        const { ReturnValue } = await this.call('GetSurfaceType', { Hit }) as ReturnValue<EPhysicalSurface>
        return ReturnValue
    }

    async GetTimeSeconds(WorldContextObject: UObject): Promise<number> {
        const { ReturnValue } = await this.call('GetTimeSeconds', { WorldContextObject }) as ReturnValue<number>
        return ReturnValue
    }

    async GetUnpausedTimeSeconds(WorldContextObject: UObject): Promise<number> {
        const { ReturnValue } = await this.call('GetUnpausedTimeSeconds', { WorldContextObject }) as ReturnValue<number>
        return ReturnValue
    }

    async GetViewportMouseCaptureMode(WorldContextObject: UObject): Promise<EMouseCaptureMode> {
        const { ReturnValue } = await this.call('GetViewportMouseCaptureMode', { WorldContextObject }) as ReturnValue<EMouseCaptureMode>
        return ReturnValue
    }

    async GetViewProjectionMatrix(DesiredView: FMinimalViewInfo, ViewMatrix: FMatrix, ProjectionMatrix: FMatrix, ViewProjectionMatrix: FMatrix): Promise<void> {
        await this.call('GetViewProjectionMatrix', { DesiredView, ViewMatrix, ProjectionMatrix, ViewProjectionMatrix })
    }

    async GetWorldDeltaSeconds(WorldContextObject: UObject): Promise<number> {
        const { ReturnValue } = await this.call('GetWorldDeltaSeconds', { WorldContextObject }) as ReturnValue<number>
        return ReturnValue
    }

    async GetWorldOriginLocation(WorldContextObject: UObject): Promise<FIntVector> {
        const { ReturnValue } = await this.call('GetWorldOriginLocation', { WorldContextObject }) as ReturnValue<FIntVector>
        return ReturnValue
    }

    async GrabOption(Options: FString, ResultString: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('GrabOption', { Options, ResultString }) as ReturnValue<boolean>
        return ReturnValue
    }

    async GrassOverlappingSphereCount(WorldContextObject: UObject, StaticMesh: UStaticMesh, CenterPosition: FVector, Radius: number): Promise<number> {
        const { ReturnValue } = await this.call('GrassOverlappingSphereCount', { WorldContextObject, StaticMesh, CenterPosition, Radius }) as ReturnValue<number>
        return ReturnValue
    }

    async HasLaunchOption(OptionToCheck: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('HasLaunchOption', { OptionToCheck }) as ReturnValue<boolean>
        return ReturnValue
    }

    async HasOption(Options: FString, InKey: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('HasOption', { Options, InKey }) as ReturnValue<boolean>
        return ReturnValue
    }

    async IsGamePaused(WorldContextObject: UObject): Promise<boolean> {
        const { ReturnValue } = await this.call('IsGamePaused', { WorldContextObject }) as ReturnValue<boolean>
        return ReturnValue
    }

    async IsSplitscreenForceDisabled(WorldContextObject: UObject): Promise<boolean> {
        const { ReturnValue } = await this.call('IsSplitscreenForceDisabled', { WorldContextObject }) as ReturnValue<boolean>
        return ReturnValue
    }

    async LoadDataFromSlot(SlotName: FString, UserIndex: number): Promise<LoadDataFromSlotReturn> {
        return await this.call('LoadDataFromSlot', { SlotName, UserIndex }) as LoadDataFromSlotReturn
    }

    async LoadGameFromMemory(InSaveData: number[]): Promise<UObjectRef<USaveGame>> {
        const { ReturnValue } = await this.call('LoadGameFromMemory', { InSaveData }) as ReturnValue<UObjectRef<USaveGame>>
        return ReturnValue
    }

    async LoadGameFromSlot(SlotName: FString, UserIndex: number): Promise<UObjectRef<USaveGame>> {
        const { ReturnValue } = await this.call('LoadGameFromSlot', { SlotName, UserIndex }) as ReturnValue<UObjectRef<USaveGame>>
        return ReturnValue
    }

    async LoadStreamLevel(WorldContextObject: UObject, LevelName: FName, bMakeVisibleAfterLoad: boolean, bShouldBlockOnLoad: boolean, LatentInfo: FLatentActionInfo): Promise<void> {
        await this.call('LoadStreamLevel', { WorldContextObject, LevelName, bMakeVisibleAfterLoad, bShouldBlockOnLoad, LatentInfo })
    }

    async MakeHitResult(bBlockingHit: boolean, bInitialOverlap: boolean, Time: number, Distance: number, Location: FVector, ImpactPoint: FVector, Normal: FVector, ImpactNormal: FVector, PhysMat: UPhysicalMaterial, HitActor: AActor, HitComponent: UPrimitiveComponent, HitBoneName: FName, HitItem: number, FaceIndex: number, TraceStart: FVector, TraceEnd: FVector): Promise<FHitResult> {
        const { ReturnValue } = await this.call('MakeHitResult', { bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd }) as ReturnValue<FHitResult>
        return ReturnValue
    }

    async OpenLevel(WorldContextObject: UObject, LevelName: FName, bAbsolute: boolean, Options: FString): Promise<void> {
        await this.call('OpenLevel', { WorldContextObject, LevelName, bAbsolute, Options })
    }

    async ParseOption(Options: FString, Key: FString): Promise<FString> {
        const { ReturnValue } = await this.call('ParseOption', { Options, Key }) as ReturnValue<FString>
        return ReturnValue
    }

    async PlayDialogue2D(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number): Promise<void> {
        await this.call('PlayDialogue2D', { WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime })
    }

    async PlayDialogueAtLocation(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, Location: FVector, Rotation: FRotator, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation): Promise<void> {
        await this.call('PlayDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings })
    }

    async PlayDialogueAtLocation2(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, Location: FVector, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation): Promise<void> {
        await this.call('PlayDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings })
    }

    async PlaySound2D(WorldContextObject: UObject, Sound: USoundBase, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, ConcurrencySettings: USoundConcurrency, OwningActor: AActor): Promise<void> {
        await this.call('PlaySound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, OwningActor })
    }

    async PlaySoundAtLocation(WorldContextObject: UObject, Sound: USoundBase, Location: FVector, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency): Promise<void> {
        await this.call('PlaySoundAtLocation', { WorldContextObject, Sound, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings })
    }

    async PlaySoundAtLocation2(WorldContextObject: UObject, Sound: USoundBase, Location: FVector, Rotation: FRotator, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency, OwningActor: AActor): Promise<void> {
        await this.call('PlaySoundAtLocation', { WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, OwningActor })
    }

    async PlayWorldCameraShake(WorldContextObject: UObject, Shake: TSubclassOf<UCameraShake>, Epicenter: FVector, InnerRadius: number, Falloff: number, bOrientShakeTowardsEpicenter: boolean): Promise<PlayWorldCameraShakeReturn> {
        return await this.call('PlayWorldCameraShake', { WorldContextObject, Shake, Epicenter, InnerRadius, Falloff, bOrientShakeTowardsEpicenter }) as PlayWorldCameraShakeReturn
    }

    async PopSoundMixModifier(WorldContextObject: UObject, InSoundMixModifier: USoundMix): Promise<void> {
        await this.call('PopSoundMixModifier', { WorldContextObject, InSoundMixModifier })
    }

    async PredictProjectilePath(WorldContextObject: UObject, PredictParams: FPredictProjectilePathParams, PredictResult: FPredictProjectilePathResult): Promise<boolean> {
        const { ReturnValue } = await this.call('PredictProjectilePath', { WorldContextObject, PredictParams, PredictResult }) as ReturnValue<boolean>
        return ReturnValue
    }

    async PrimeSound(InSound: USoundBase): Promise<void> {
        await this.call('PrimeSound', { InSound })
    }

    async ProjectWorldToScreen(Player: APlayerController, WorldPosition: FVector, ScreenPosition: FVector2D, bPlayerViewportRelative: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('ProjectWorldToScreen', { Player, WorldPosition, ScreenPosition, bPlayerViewportRelative }) as ReturnValue<boolean>
        return ReturnValue
    }

    async PushSoundMixModifier(WorldContextObject: UObject, InSoundMixModifier: USoundMix): Promise<void> {
        await this.call('PushSoundMixModifier', { WorldContextObject, InSoundMixModifier })
    }

    async RebaseLocalOriginOntoZero(WorldContextObject: UObject, WorldLocation: FVector): Promise<FVector> {
        const { ReturnValue } = await this.call('RebaseLocalOriginOntoZero', { WorldContextObject, WorldLocation }) as ReturnValue<FVector>
        return ReturnValue
    }

    async RebaseZeroOriginOntoLocal(WorldContextObject: UObject, WorldLocation: FVector): Promise<FVector> {
        const { ReturnValue } = await this.call('RebaseZeroOriginOntoLocal', { WorldContextObject, WorldLocation }) as ReturnValue<FVector>
        return ReturnValue
    }

    async RemovePlayer(Player: APlayerController, bDestroyPawn: boolean): Promise<void> {
        await this.call('RemovePlayer', { Player, bDestroyPawn })
    }

    async SaveDataToSlot(InSaveData: number[], SlotName: FString, UserIndex: number): Promise<boolean> {
        const { ReturnValue } = await this.call('SaveDataToSlot', { InSaveData, SlotName, UserIndex }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SaveGameToMemory(SaveGameObject: USaveGame): Promise<SaveGameToMemoryReturn> {
        return await this.call('SaveGameToMemory', { SaveGameObject }) as SaveGameToMemoryReturn
    }

    async SaveGameToSlot(SaveGameObject: USaveGame, SlotName: FString, UserIndex: number): Promise<boolean> {
        const { ReturnValue } = await this.call('SaveGameToSlot', { SaveGameObject, SlotName, UserIndex }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SetBaseSoundMix(WorldContextObject: UObject, InSoundMix: USoundMix): Promise<void> {
        await this.call('SetBaseSoundMix', { WorldContextObject, InSoundMix })
    }

    async SetEnableWorldRendering(WorldContextObject: UObject, bEnable: boolean): Promise<void> {
        await this.call('SetEnableWorldRendering', { WorldContextObject, bEnable })
    }

    async SetForceDisableSplitscreen(WorldContextObject: UObject, bDisable: boolean): Promise<void> {
        await this.call('SetForceDisableSplitscreen', { WorldContextObject, bDisable })
    }

    async SetGamePaused(WorldContextObject: UObject, bPaused: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('SetGamePaused', { WorldContextObject, bPaused }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SetGlobalListenerFocusParameters(WorldContextObject: UObject, FocusAzimuthScale: number, NonFocusAzimuthScale: number, FocusDistanceScale: number, NonFocusDistanceScale: number, FocusVolumeScale: number, NonFocusVolumeScale: number, FocusPriorityScale: number, NonFocusPriorityScale: number): Promise<void> {
        await this.call('SetGlobalListenerFocusParameters', { WorldContextObject, FocusAzimuthScale, NonFocusAzimuthScale, FocusDistanceScale, NonFocusDistanceScale, FocusVolumeScale, NonFocusVolumeScale, FocusPriorityScale, NonFocusPriorityScale })
    }

    async SetGlobalPitchModulation(WorldContextObject: UObject, PitchModulation: number, TimeSec: number): Promise<void> {
        await this.call('SetGlobalPitchModulation', { WorldContextObject, PitchModulation, TimeSec })
    }

    async SetGlobalTimeDilation(WorldContextObject: UObject, TimeDilation: number): Promise<void> {
        await this.call('SetGlobalTimeDilation', { WorldContextObject, TimeDilation })
    }

    async SetMaxAudioChannelsScaled(WorldContextObject: UObject, MaxChannelCountScale: number): Promise<void> {
        await this.call('SetMaxAudioChannelsScaled', { WorldContextObject, MaxChannelCountScale })
    }

    async SetPlayerControllerID(Player: APlayerController, ControllerId: number): Promise<void> {
        await this.call('SetPlayerControllerID', { Player, ControllerId })
    }

    async SetSoundMixClassOverride(WorldContextObject: UObject, InSoundMixModifier: USoundMix, InSoundClass: USoundClass, Volume: number, Pitch: number, FadeInTime: number, bApplyToChildren: boolean): Promise<void> {
        await this.call('SetSoundMixClassOverride', { WorldContextObject, InSoundMixModifier, InSoundClass, Volume, Pitch, FadeInTime, bApplyToChildren })
    }

    async SetSubtitlesEnabled(bEnabled: boolean): Promise<void> {
        await this.call('SetSubtitlesEnabled', { bEnabled })
    }

    async SetViewportMouseCaptureMode(WorldContextObject: UObject, MouseCaptureMode: EMouseCaptureMode): Promise<void> {
        await this.call('SetViewportMouseCaptureMode', { WorldContextObject, MouseCaptureMode })
    }

    async SetWorldOriginLocation(WorldContextObject: UObject, NewLocation: FIntVector): Promise<void> {
        await this.call('SetWorldOriginLocation', { WorldContextObject, NewLocation })
    }

    async SpawnDecalAtLocation(WorldContextObject: UObject, DecalMaterial: UMaterialInterface, DecalSize: FVector, Location: FVector, Rotation: FRotator, LifeSpan: number): Promise<UObjectRef<UDecalComponent>> {
        const { ReturnValue } = await this.call('SpawnDecalAtLocation', { WorldContextObject, DecalMaterial, DecalSize, Location, Rotation, LifeSpan }) as ReturnValue<UObjectRef<UDecalComponent>>
        return ReturnValue
    }

    async SpawnDecalAttached(DecalMaterial: UMaterialInterface, DecalSize: FVector, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, LifeSpan: number): Promise<UObjectRef<UDecalComponent>> {
        const { ReturnValue } = await this.call('SpawnDecalAttached', { DecalMaterial, DecalSize, AttachToComponent, AttachPointName, Location, Rotation, LocationType, LifeSpan }) as ReturnValue<UObjectRef<UDecalComponent>>
        return ReturnValue
    }

    async SpawnDialogue2D(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('SpawnDialogue2D', { WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async SpawnDialogueAtLocation(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, Location: FVector, Rotation: FRotator, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('SpawnDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async SpawnDialogueAttached(Dialogue: UDialogueWave, Context: FDialogueContext, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('SpawnDialogueAttached', { Dialogue, Context, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async SpawnDialogueAttached2(Dialogue: UDialogueWave, Context: FDialogueContext, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('SpawnDialogueAttached', { Dialogue, Context, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async SpawnEmitterAtLocation(WorldContextObject: UObject, EmitterTemplate: UParticleSystem, Location: FVector, Rotation: FRotator, Scale: FVector, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivateSystem: boolean): Promise<UObjectRef<UParticleSystemComponent>> {
        const { ReturnValue } = await this.call('SpawnEmitterAtLocation', { WorldContextObject, EmitterTemplate, Location, Rotation, Scale, bAutoDestroy, PoolingMethod, bAutoActivateSystem }) as ReturnValue<UObjectRef<UParticleSystemComponent>>
        return ReturnValue
    }

    async SpawnEmitterAtLocation2(WorldContextObject: UObject, EmitterTemplate: UParticleSystem, Location: FVector, Rotation: FRotator, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivateSystem: boolean): Promise<UObjectRef<UParticleSystemComponent>> {
        const { ReturnValue } = await this.call('SpawnEmitterAtLocation', { WorldContextObject, EmitterTemplate, Location, Rotation, bAutoDestroy, PoolingMethod, bAutoActivateSystem }) as ReturnValue<UObjectRef<UParticleSystemComponent>>
        return ReturnValue
    }

    async SpawnEmitterAtLocation3(World: UWorld, EmitterTemplate: UParticleSystem, SpawnTransform: FTransform, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivate: boolean): Promise<UObjectRef<UParticleSystemComponent>> {
        const { ReturnValue } = await this.call('SpawnEmitterAtLocation', { World, EmitterTemplate, SpawnTransform, bAutoDestroy, PoolingMethod, bAutoActivate }) as ReturnValue<UObjectRef<UParticleSystemComponent>>
        return ReturnValue
    }

    async SpawnEmitterAttached(EmitterTemplate: UParticleSystem, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, Scale: FVector, LocationType: EAttachLocation, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivate: boolean): Promise<UObjectRef<UParticleSystemComponent>> {
        const { ReturnValue } = await this.call('SpawnEmitterAttached', { EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, Scale, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate }) as ReturnValue<UObjectRef<UParticleSystemComponent>>
        return ReturnValue
    }

    async SpawnEmitterAttached2(EmitterTemplate: UParticleSystem, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivate: boolean): Promise<UObjectRef<UParticleSystemComponent>> {
        const { ReturnValue } = await this.call('SpawnEmitterAttached', { EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate }) as ReturnValue<UObjectRef<UParticleSystemComponent>>
        return ReturnValue
    }

    async SpawnForceFeedbackAtLocation(WorldContextObject: UObject, ForceFeedbackEffect: UForceFeedbackEffect, Location: FVector, Rotation: FRotator, bLooping: boolean, IntensityMultiplier: number, StartTime: number, AttenuationSettings: UForceFeedbackAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UForceFeedbackComponent>> {
        const { ReturnValue } = await this.call('SpawnForceFeedbackAtLocation', { WorldContextObject, ForceFeedbackEffect, Location, Rotation, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy }) as ReturnValue<UObjectRef<UForceFeedbackComponent>>
        return ReturnValue
    }

    async SpawnForceFeedbackAttached(ForceFeedbackEffect: UForceFeedbackEffect, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, bLooping: boolean, IntensityMultiplier: number, StartTime: number, AttenuationSettings: UForceFeedbackAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UForceFeedbackComponent>> {
        const { ReturnValue } = await this.call('SpawnForceFeedbackAttached', { ForceFeedbackEffect, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy }) as ReturnValue<UObjectRef<UForceFeedbackComponent>>
        return ReturnValue
    }

    async SpawnObject(ObjectClass: TSubclassOf<UObject>): Promise<SpawnObjectReturn> {
        return await this.call('SpawnObject', { ObjectClass }) as SpawnObjectReturn
    }

    async SpawnSound2D(WorldContextObject: UObject, Sound: USoundBase, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, ConcurrencySettings: USoundConcurrency, bPersistAcrossLevelTransition: boolean, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('SpawnSound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async SpawnSoundAtLocation(WorldContextObject: UObject, Sound: USoundBase, Location: FVector, Rotation: FRotator, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('SpawnSoundAtLocation', { WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async SpawnSoundAttached(Sound: USoundBase, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('SpawnSoundAttached', { Sound, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async SpawnSoundAttached2(Sound: USoundBase, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>> {
        const { ReturnValue } = await this.call('SpawnSoundAttached', { Sound, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy }) as ReturnValue<UObjectRef<UAudioComponent>>
        return ReturnValue
    }

    async StripSaveGameHeader(SaveData: number[]): Promise<FMemoryReader> {
        const { ReturnValue } = await this.call('StripSaveGameHeader', { SaveData }) as ReturnValue<FMemoryReader>
        return ReturnValue
    }

    async SuggestProjectileVelocity(WorldContextObject: UObject, TossVelocity: FVector, StartLocation: FVector, EndLocation: FVector, TossSpeed: number, bHighArc: boolean, CollisionRadius: number, OverrideGravityZ: number, TraceOption: ESuggestProjVelocityTraceOption, ResponseParam: FCollisionResponseParams, ActorsToIgnore: AActor[], bDrawDebug: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('SuggestProjectileVelocity', { WorldContextObject, TossVelocity, StartLocation, EndLocation, TossSpeed, bHighArc, CollisionRadius, OverrideGravityZ, TraceOption, ResponseParam, ActorsToIgnore, bDrawDebug }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SuggestProjectileVelocity_CustomArc(WorldContextObject: UObject, StartPos: FVector, EndPos: FVector, OverrideGravityZ: number, ArcParam: number): Promise<SuggestProjectileVelocity_CustomArcReturn> {
        return await this.call('SuggestProjectileVelocity_CustomArc', { WorldContextObject, StartPos, EndPos, OverrideGravityZ, ArcParam }) as SuggestProjectileVelocity_CustomArcReturn
    }

    async UnloadStreamLevel(WorldContextObject: UObject, LevelName: FName, LatentInfo: FLatentActionInfo, bShouldBlockOnUnload: boolean): Promise<void> {
        await this.call('UnloadStreamLevel', { WorldContextObject, LevelName, LatentInfo, bShouldBlockOnUnload })
    }
}