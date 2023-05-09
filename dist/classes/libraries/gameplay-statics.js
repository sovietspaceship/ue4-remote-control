"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class GameplayStatics extends uobject_1.UObject {
    constructor() {
        super('/Script/Default__GameplayStatics');
    }
    async ActivateReverbEffect(WorldContextObject, ReverbEffect, TagName, Priority, Volume, FadeTime) {
        await this.call('ActivateReverbEffect', { WorldContextObject, ReverbEffect, TagName, Priority, Volume, FadeTime });
    }
    async ApplyDamage(DamagedActor, BaseDamage, EventInstigator, DamageCauser, DamageTypeClass) {
        const { ReturnValue } = await this.call('ApplyDamage', { DamagedActor, BaseDamage, EventInstigator, DamageCauser, DamageTypeClass });
        return ReturnValue;
    }
    async ApplyPointDamage(DamagedActor, BaseDamage, HitFromDirection, HitInfo, EventInstigator, DamageCauser, DamageTypeClass) {
        const { ReturnValue } = await this.call('ApplyPointDamage', { DamagedActor, BaseDamage, HitFromDirection, HitInfo, EventInstigator, DamageCauser, DamageTypeClass });
        return ReturnValue;
    }
    async ApplyRadialDamage(WorldContextObject, BaseDamage, Origin, DamageRadius, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, bDoFullDamage, DamagePreventionChannel) {
        const { ReturnValue } = await this.call('ApplyRadialDamage', { WorldContextObject, BaseDamage, Origin, DamageRadius, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, bDoFullDamage, DamagePreventionChannel });
        return ReturnValue;
    }
    async ApplyRadialDamageWithFalloff(WorldContextObject, BaseDamage, MinimumDamage, Origin, DamageInnerRadius, DamageOuterRadius, DamageFalloff, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, DamagePreventionChannel) {
        const { ReturnValue } = await this.call('ApplyRadialDamageWithFalloff', { WorldContextObject, BaseDamage, MinimumDamage, Origin, DamageInnerRadius, DamageOuterRadius, DamageFalloff, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, DamagePreventionChannel });
        return ReturnValue;
    }
    async AreAnyListenersWithinRange(WorldContextObject, Location, MaximumRange) {
        const { ReturnValue } = await this.call('AreAnyListenersWithinRange', { WorldContextObject, Location, MaximumRange });
        return ReturnValue;
    }
    async AreSubtitlesEnabled() {
        const { ReturnValue } = await this.call('AreSubtitlesEnabled');
        return ReturnValue;
    }
    async AsyncLoadGameFromSlot(SlotName, UserIndex, LoadedDelegate) {
        await this.call('AsyncLoadGameFromSlot', { SlotName, UserIndex, LoadedDelegate });
    }
    async AsyncSaveGameToSlot(SaveGameObject, SlotName, UserIndex, SavedDelegate) {
        await this.call('AsyncSaveGameToSlot', { SaveGameObject, SlotName, UserIndex, SavedDelegate });
    }
    async BeginDeferredActorSpawnFromClass(WorldContextObject, ActorClass, SpawnTransform, CollisionHandlingOverride, Owner) {
        const { ReturnValue } = await this.call('BeginDeferredActorSpawnFromClass', { WorldContextObject, ActorClass, SpawnTransform, CollisionHandlingOverride, Owner });
        return ReturnValue;
    }
    async BeginSpawningActorFromBlueprint(WorldContextObject, Blueprint, SpawnTransform, bNoCollisionFail) {
        const { ReturnValue } = await this.call('BeginSpawningActorFromBlueprint', { WorldContextObject, Blueprint, SpawnTransform, bNoCollisionFail });
        return ReturnValue;
    }
    async Blueprint_PredictProjectilePath_Advanced(WorldContextObject, PredictParams, PredictResult) {
        const { ReturnValue } = await this.call('Blueprint_PredictProjectilePath_Advanced', { WorldContextObject, PredictParams, PredictResult });
        return ReturnValue;
    }
    async Blueprint_PredictProjectilePath_ByObjectType(WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, ObjectTypes, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ) {
        return await this.call('Blueprint_PredictProjectilePath_ByObjectType', { WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, ObjectTypes, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ });
    }
    async Blueprint_PredictProjectilePath_ByTraceChannel(WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, TraceChannel, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ) {
        return await this.call('Blueprint_PredictProjectilePath_ByTraceChannel', { WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, TraceChannel, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ });
    }
    async BlueprintSuggestProjectileVelocity(WorldContextObject, TossVelocity, StartLocation, EndLocation, LaunchSpeed, OverrideGravityZ, TraceOption, CollisionRadius, bFavorHighArc, bDrawDebug) {
        const { ReturnValue } = await this.call('BlueprintSuggestProjectileVelocity', { WorldContextObject, TossVelocity, StartLocation, EndLocation, LaunchSpeed, OverrideGravityZ, TraceOption, CollisionRadius, bFavorHighArc, bDrawDebug });
        return ReturnValue;
    }
    async BreakHitResult(Hit, bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd) {
        await this.call('BreakHitResult', { Hit, bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd });
    }
    async CalculateViewProjectionMatricesFromMinimalView(MinimalViewInfo, CustomProjectionMatrix) {
        return await this.call('CalculateViewProjectionMatricesFromMinimalView', { MinimalViewInfo, CustomProjectionMatrix });
    }
    async CalculateViewProjectionMatricesFromViewTarget(InViewTarget) {
        return await this.call('CalculateViewProjectionMatricesFromViewTarget', { InViewTarget });
    }
    async CancelAsyncLoading() {
        await this.call('CancelAsyncLoading');
    }
    async ClearSoundMixClassOverride(WorldContextObject, InSoundMixModifier, InSoundClass, FadeOutTime) {
        await this.call('ClearSoundMixClassOverride', { WorldContextObject, InSoundMixModifier, InSoundClass, FadeOutTime });
    }
    async ClearSoundMixModifiers(WorldContextObject) {
        await this.call('ClearSoundMixModifiers', { WorldContextObject });
    }
    async CreatePlayer(WorldContextObject, ControllerId, bSpawnPlayerController) {
        const { ReturnValue } = await this.call('CreatePlayer', { WorldContextObject, ControllerId, bSpawnPlayerController });
        return ReturnValue;
    }
    async CreateSaveGameObject(SaveGameClass) {
        const { ReturnValue } = await this.call('CreateSaveGameObject', { SaveGameClass });
        return ReturnValue;
    }
    async CreateSound2D(WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy) {
        const { ReturnValue } = await this.call('CreateSound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy });
        return ReturnValue;
    }
    async DeactivateReverbEffect(WorldContextObject, TagName) {
        const { ReturnValue } = await this.call('DeactivateReverbEffect', { WorldContextObject, TagName });
        return ReturnValue;
    }
    async DeleteGameInSlot(SlotName, UserIndex) {
        const { ReturnValue } = await this.call('DeleteGameInSlot', { SlotName, UserIndex });
        return ReturnValue;
    }
    async DeprojectScreenToWorld(Player, ScreenPosition, WorldPosition, WorldDirection) {
        const { ReturnValue } = await this.call('DeprojectScreenToWorld', { Player, ScreenPosition, WorldPosition, WorldDirection });
        return ReturnValue;
    }
    async DoesSaveGameExist(SlotName, UserIndex) {
        const { ReturnValue } = await this.call('DoesSaveGameExist', { SlotName, UserIndex });
        return ReturnValue;
    }
    async EnableLiveStreaming(Enable) {
        await this.call('EnableLiveStreaming', { Enable });
    }
    async FindCollisionUV(Hit, UVChannel, UV) {
        const { ReturnValue } = await this.call('FindCollisionUV', { Hit, UVChannel, UV });
        return ReturnValue;
    }
    async FinishSpawningActor(Actor, SpawnTransform) {
        const { ReturnValue } = await this.call('FinishSpawningActor', { Actor, SpawnTransform });
        return ReturnValue;
    }
    async FlushLevelStreaming(WorldContextObject) {
        await this.call('FlushLevelStreaming', { WorldContextObject });
    }
    async GetAccurateRealTime(WorldContextObject, Seconds, PartialSeconds) {
        await this.call('GetAccurateRealTime', { WorldContextObject, Seconds, PartialSeconds });
    }
    async GetActorArrayAverageLocation(Actors) {
        const { ReturnValue } = await this.call('GetActorArrayAverageLocation', { Actors });
        return ReturnValue;
    }
    async GetActorArrayBounds(Actors, bOnlyCollidingComponents, Center, BoxExtent) {
        await this.call('GetActorArrayBounds', { Actors, bOnlyCollidingComponents, Center, BoxExtent });
    }
    async GetActorOfClass(WorldContextObject, ActorClass) {
        const { ReturnValue } = await this.call('GetActorOfClass', { WorldContextObject, ActorClass });
        return ReturnValue;
    }
    async GetAllActorsOfClass(WorldContextObject, ActorClass) {
        return await this.call('GetAllActorsOfClass', { WorldContextObject, ActorClass });
    }
    async GetAllActorsOfClassWithTag(WorldContextObject, ActorClass, Tag) {
        return await this.call('GetAllActorsOfClassWithTag', { WorldContextObject, ActorClass, Tag });
    }
    async GetAllActorsWithInterface(WorldContextObject, Interface) {
        return await this.call('GetAllActorsWithInterface', { WorldContextObject, Interface });
    }
    async GetAllActorsWithTag(WorldContextObject, Tag) {
        return await this.call('GetAllActorsWithTag', { WorldContextObject, Tag });
    }
    async GetAudioTimeSeconds(WorldContextObject) {
        const { ReturnValue } = await this.call('GetAudioTimeSeconds', { WorldContextObject });
        return ReturnValue;
    }
    async GetCurrentLevelName(WorldContextObject, bRemovePrefixString) {
        const { ReturnValue } = await this.call('GetCurrentLevelName', { WorldContextObject, bRemovePrefixString });
        return ReturnValue;
    }
    async GetCurrentReverbEffect(WorldContextObject) {
        const { ReturnValue } = await this.call('GetCurrentReverbEffect', { WorldContextObject });
        return ReturnValue;
    }
    async GetEnableWorldRendering(WorldContextObject) {
        const { ReturnValue } = await this.call('GetEnableWorldRendering', { WorldContextObject });
        return ReturnValue;
    }
    async GetGameInstance(WorldContextObject) {
        const { ReturnValue } = await this.call('GetGameInstance', { WorldContextObject });
        return ReturnValue;
    }
    async GetGameMode(WorldContextObject) {
        const { ReturnValue } = await this.call('GetGameMode', { WorldContextObject });
        return ReturnValue;
    }
    async GetGameState(WorldContextObject) {
        const { ReturnValue } = await this.call('GetGameState', { WorldContextObject });
        return ReturnValue;
    }
    async GetGlobalTimeDilation(WorldContextObject) {
        const { ReturnValue } = await this.call('GetGlobalTimeDilation', { WorldContextObject });
        return ReturnValue;
    }
    async GetIntOption(Options, Key, DefaultValue) {
        const { ReturnValue } = await this.call('GetIntOption', { Options, Key, DefaultValue });
        return ReturnValue;
    }
    async GetKeyValue(Pair, Key, Value) {
        await this.call('GetKeyValue', { Pair, Key, Value });
    }
    async GetMaxAudioChannelCount(WorldContextObject) {
        const { ReturnValue } = await this.call('GetMaxAudioChannelCount', { WorldContextObject });
        return ReturnValue;
    }
    async GetObjectClass(Object) {
        const { ReturnValue } = await this.call('GetObjectClass', { Object });
        return ReturnValue;
    }
    async GetPlatformName() {
        const { ReturnValue } = await this.call('GetPlatformName');
        return ReturnValue;
    }
    async GetPlayerCameraManager(WorldContextObject, PlayerIndex) {
        const { ReturnValue } = await this.call('GetPlayerCameraManager', { WorldContextObject, PlayerIndex });
        return ReturnValue;
    }
    async GetPlayerCharacter(WorldContextObject, PlayerIndex) {
        const { ReturnValue } = await this.call('GetPlayerCharacter', { WorldContextObject, PlayerIndex });
        return ReturnValue;
    }
    async GetPlayerController(WorldContextObject, PlayerIndex) {
        const { ReturnValue } = await this.call('GetPlayerController', { WorldContextObject, PlayerIndex });
        return ReturnValue;
    }
    async GetPlayerControllerFromID(WorldContextObject, ControllerID) {
        const { ReturnValue } = await this.call('GetPlayerControllerFromID', { WorldContextObject, ControllerID });
        return ReturnValue;
    }
    async GetPlayerControllerID(Player) {
        const { ReturnValue } = await this.call('GetPlayerControllerID', { Player });
        return ReturnValue;
    }
    async GetPlayerPawn(WorldContextObject, PlayerIndex) {
        const { ReturnValue } = await this.call('GetPlayerPawn', { WorldContextObject, PlayerIndex });
        return ReturnValue;
    }
    async GetRealTimeSeconds(WorldContextObject) {
        const { ReturnValue } = await this.call('GetRealTimeSeconds', { WorldContextObject });
        return ReturnValue;
    }
    async GetStreamingLevel(WorldContextObject, PackageName) {
        const { ReturnValue } = await this.call('GetStreamingLevel', { WorldContextObject, PackageName });
        return ReturnValue;
    }
    async GetSurfaceType(Hit) {
        const { ReturnValue } = await this.call('GetSurfaceType', { Hit });
        return ReturnValue;
    }
    async GetTimeSeconds(WorldContextObject) {
        const { ReturnValue } = await this.call('GetTimeSeconds', { WorldContextObject });
        return ReturnValue;
    }
    async GetUnpausedTimeSeconds(WorldContextObject) {
        const { ReturnValue } = await this.call('GetUnpausedTimeSeconds', { WorldContextObject });
        return ReturnValue;
    }
    async GetViewportMouseCaptureMode(WorldContextObject) {
        const { ReturnValue } = await this.call('GetViewportMouseCaptureMode', { WorldContextObject });
        return ReturnValue;
    }
    async GetViewProjectionMatrix(DesiredView, ViewMatrix, ProjectionMatrix, ViewProjectionMatrix) {
        await this.call('GetViewProjectionMatrix', { DesiredView, ViewMatrix, ProjectionMatrix, ViewProjectionMatrix });
    }
    async GetWorldDeltaSeconds(WorldContextObject) {
        const { ReturnValue } = await this.call('GetWorldDeltaSeconds', { WorldContextObject });
        return ReturnValue;
    }
    async GetWorldOriginLocation(WorldContextObject) {
        const { ReturnValue } = await this.call('GetWorldOriginLocation', { WorldContextObject });
        return ReturnValue;
    }
    async GrabOption(Options, ResultString) {
        const { ReturnValue } = await this.call('GrabOption', { Options, ResultString });
        return ReturnValue;
    }
    async GrassOverlappingSphereCount(WorldContextObject, StaticMesh, CenterPosition, Radius) {
        const { ReturnValue } = await this.call('GrassOverlappingSphereCount', { WorldContextObject, StaticMesh, CenterPosition, Radius });
        return ReturnValue;
    }
    async HasLaunchOption(OptionToCheck) {
        const { ReturnValue } = await this.call('HasLaunchOption', { OptionToCheck });
        return ReturnValue;
    }
    async HasOption(Options, InKey) {
        const { ReturnValue } = await this.call('HasOption', { Options, InKey });
        return ReturnValue;
    }
    async IsGamePaused(WorldContextObject) {
        const { ReturnValue } = await this.call('IsGamePaused', { WorldContextObject });
        return ReturnValue;
    }
    async IsSplitscreenForceDisabled(WorldContextObject) {
        const { ReturnValue } = await this.call('IsSplitscreenForceDisabled', { WorldContextObject });
        return ReturnValue;
    }
    async LoadDataFromSlot(SlotName, UserIndex) {
        return await this.call('LoadDataFromSlot', { SlotName, UserIndex });
    }
    async LoadGameFromMemory(InSaveData) {
        const { ReturnValue } = await this.call('LoadGameFromMemory', { InSaveData });
        return ReturnValue;
    }
    async LoadGameFromSlot(SlotName, UserIndex) {
        const { ReturnValue } = await this.call('LoadGameFromSlot', { SlotName, UserIndex });
        return ReturnValue;
    }
    async LoadStreamLevel(WorldContextObject, LevelName, bMakeVisibleAfterLoad, bShouldBlockOnLoad, LatentInfo) {
        await this.call('LoadStreamLevel', { WorldContextObject, LevelName, bMakeVisibleAfterLoad, bShouldBlockOnLoad, LatentInfo });
    }
    async MakeHitResult(bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd) {
        const { ReturnValue } = await this.call('MakeHitResult', { bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd });
        return ReturnValue;
    }
    async OpenLevel(WorldContextObject, LevelName, bAbsolute, Options) {
        await this.call('OpenLevel', { WorldContextObject, LevelName, bAbsolute, Options });
    }
    async ParseOption(Options, Key) {
        const { ReturnValue } = await this.call('ParseOption', { Options, Key });
        return ReturnValue;
    }
    async PlayDialogue2D(WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime) {
        await this.call('PlayDialogue2D', { WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime });
    }
    async PlayDialogueAtLocation(WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings) {
        await this.call('PlayDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings });
    }
    async PlayDialogueAtLocation2(WorldContextObject, Dialogue, Context, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings) {
        await this.call('PlayDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings });
    }
    async PlaySound2D(WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, OwningActor) {
        await this.call('PlaySound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, OwningActor });
    }
    async PlaySoundAtLocation(WorldContextObject, Sound, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings) {
        await this.call('PlaySoundAtLocation', { WorldContextObject, Sound, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings });
    }
    async PlaySoundAtLocation2(WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, OwningActor) {
        await this.call('PlaySoundAtLocation', { WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, OwningActor });
    }
    async PlayWorldCameraShake(WorldContextObject, Shake, Epicenter, InnerRadius, Falloff, bOrientShakeTowardsEpicenter) {
        return await this.call('PlayWorldCameraShake', { WorldContextObject, Shake, Epicenter, InnerRadius, Falloff, bOrientShakeTowardsEpicenter });
    }
    async PopSoundMixModifier(WorldContextObject, InSoundMixModifier) {
        await this.call('PopSoundMixModifier', { WorldContextObject, InSoundMixModifier });
    }
    async PredictProjectilePath(WorldContextObject, PredictParams, PredictResult) {
        const { ReturnValue } = await this.call('PredictProjectilePath', { WorldContextObject, PredictParams, PredictResult });
        return ReturnValue;
    }
    async PrimeSound(InSound) {
        await this.call('PrimeSound', { InSound });
    }
    async ProjectWorldToScreen(Player, WorldPosition, ScreenPosition, bPlayerViewportRelative) {
        const { ReturnValue } = await this.call('ProjectWorldToScreen', { Player, WorldPosition, ScreenPosition, bPlayerViewportRelative });
        return ReturnValue;
    }
    async PushSoundMixModifier(WorldContextObject, InSoundMixModifier) {
        await this.call('PushSoundMixModifier', { WorldContextObject, InSoundMixModifier });
    }
    async RebaseLocalOriginOntoZero(WorldContextObject, WorldLocation) {
        const { ReturnValue } = await this.call('RebaseLocalOriginOntoZero', { WorldContextObject, WorldLocation });
        return ReturnValue;
    }
    async RebaseZeroOriginOntoLocal(WorldContextObject, WorldLocation) {
        const { ReturnValue } = await this.call('RebaseZeroOriginOntoLocal', { WorldContextObject, WorldLocation });
        return ReturnValue;
    }
    async RemovePlayer(Player, bDestroyPawn) {
        await this.call('RemovePlayer', { Player, bDestroyPawn });
    }
    async SaveDataToSlot(InSaveData, SlotName, UserIndex) {
        const { ReturnValue } = await this.call('SaveDataToSlot', { InSaveData, SlotName, UserIndex });
        return ReturnValue;
    }
    async SaveGameToMemory(SaveGameObject) {
        return await this.call('SaveGameToMemory', { SaveGameObject });
    }
    async SaveGameToSlot(SaveGameObject, SlotName, UserIndex) {
        const { ReturnValue } = await this.call('SaveGameToSlot', { SaveGameObject, SlotName, UserIndex });
        return ReturnValue;
    }
    async SetBaseSoundMix(WorldContextObject, InSoundMix) {
        await this.call('SetBaseSoundMix', { WorldContextObject, InSoundMix });
    }
    async SetEnableWorldRendering(WorldContextObject, bEnable) {
        await this.call('SetEnableWorldRendering', { WorldContextObject, bEnable });
    }
    async SetForceDisableSplitscreen(WorldContextObject, bDisable) {
        await this.call('SetForceDisableSplitscreen', { WorldContextObject, bDisable });
    }
    async SetGamePaused(WorldContextObject, bPaused) {
        const { ReturnValue } = await this.call('SetGamePaused', { WorldContextObject, bPaused });
        return ReturnValue;
    }
    async SetGlobalListenerFocusParameters(WorldContextObject, FocusAzimuthScale, NonFocusAzimuthScale, FocusDistanceScale, NonFocusDistanceScale, FocusVolumeScale, NonFocusVolumeScale, FocusPriorityScale, NonFocusPriorityScale) {
        await this.call('SetGlobalListenerFocusParameters', { WorldContextObject, FocusAzimuthScale, NonFocusAzimuthScale, FocusDistanceScale, NonFocusDistanceScale, FocusVolumeScale, NonFocusVolumeScale, FocusPriorityScale, NonFocusPriorityScale });
    }
    async SetGlobalPitchModulation(WorldContextObject, PitchModulation, TimeSec) {
        await this.call('SetGlobalPitchModulation', { WorldContextObject, PitchModulation, TimeSec });
    }
    async SetGlobalTimeDilation(WorldContextObject, TimeDilation) {
        await this.call('SetGlobalTimeDilation', { WorldContextObject, TimeDilation });
    }
    async SetMaxAudioChannelsScaled(WorldContextObject, MaxChannelCountScale) {
        await this.call('SetMaxAudioChannelsScaled', { WorldContextObject, MaxChannelCountScale });
    }
    async SetPlayerControllerID(Player, ControllerId) {
        await this.call('SetPlayerControllerID', { Player, ControllerId });
    }
    async SetSoundMixClassOverride(WorldContextObject, InSoundMixModifier, InSoundClass, Volume, Pitch, FadeInTime, bApplyToChildren) {
        await this.call('SetSoundMixClassOverride', { WorldContextObject, InSoundMixModifier, InSoundClass, Volume, Pitch, FadeInTime, bApplyToChildren });
    }
    async SetSubtitlesEnabled(bEnabled) {
        await this.call('SetSubtitlesEnabled', { bEnabled });
    }
    async SetViewportMouseCaptureMode(WorldContextObject, MouseCaptureMode) {
        await this.call('SetViewportMouseCaptureMode', { WorldContextObject, MouseCaptureMode });
    }
    async SetWorldOriginLocation(WorldContextObject, NewLocation) {
        await this.call('SetWorldOriginLocation', { WorldContextObject, NewLocation });
    }
    async SpawnDecalAtLocation(WorldContextObject, DecalMaterial, DecalSize, Location, Rotation, LifeSpan) {
        const { ReturnValue } = await this.call('SpawnDecalAtLocation', { WorldContextObject, DecalMaterial, DecalSize, Location, Rotation, LifeSpan });
        return ReturnValue;
    }
    async SpawnDecalAttached(DecalMaterial, DecalSize, AttachToComponent, AttachPointName, Location, Rotation, LocationType, LifeSpan) {
        const { ReturnValue } = await this.call('SpawnDecalAttached', { DecalMaterial, DecalSize, AttachToComponent, AttachPointName, Location, Rotation, LocationType, LifeSpan });
        return ReturnValue;
    }
    async SpawnDialogue2D(WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnDialogue2D', { WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnDialogueAtLocation(WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnDialogueAttached(Dialogue, Context, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnDialogueAttached', { Dialogue, Context, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnDialogueAttached2(Dialogue, Context, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnDialogueAttached', { Dialogue, Context, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnEmitterAtLocation(WorldContextObject, EmitterTemplate, Location, Rotation, Scale, bAutoDestroy, PoolingMethod, bAutoActivateSystem) {
        const { ReturnValue } = await this.call('SpawnEmitterAtLocation', { WorldContextObject, EmitterTemplate, Location, Rotation, Scale, bAutoDestroy, PoolingMethod, bAutoActivateSystem });
        return ReturnValue;
    }
    async SpawnEmitterAtLocation2(WorldContextObject, EmitterTemplate, Location, Rotation, bAutoDestroy, PoolingMethod, bAutoActivateSystem) {
        const { ReturnValue } = await this.call('SpawnEmitterAtLocation', { WorldContextObject, EmitterTemplate, Location, Rotation, bAutoDestroy, PoolingMethod, bAutoActivateSystem });
        return ReturnValue;
    }
    async SpawnEmitterAtLocation3(World, EmitterTemplate, SpawnTransform, bAutoDestroy, PoolingMethod, bAutoActivate) {
        const { ReturnValue } = await this.call('SpawnEmitterAtLocation', { World, EmitterTemplate, SpawnTransform, bAutoDestroy, PoolingMethod, bAutoActivate });
        return ReturnValue;
    }
    async SpawnEmitterAttached(EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, Scale, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate) {
        const { ReturnValue } = await this.call('SpawnEmitterAttached', { EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, Scale, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate });
        return ReturnValue;
    }
    async SpawnEmitterAttached2(EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate) {
        const { ReturnValue } = await this.call('SpawnEmitterAttached', { EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate });
        return ReturnValue;
    }
    async SpawnForceFeedbackAtLocation(WorldContextObject, ForceFeedbackEffect, Location, Rotation, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnForceFeedbackAtLocation', { WorldContextObject, ForceFeedbackEffect, Location, Rotation, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnForceFeedbackAttached(ForceFeedbackEffect, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnForceFeedbackAttached', { ForceFeedbackEffect, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnObject(ObjectClass) {
        return await this.call('SpawnObject', { ObjectClass });
    }
    async SpawnSound2D(WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnSound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnSoundAtLocation(WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnSoundAtLocation', { WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnSoundAttached(Sound, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnSoundAttached', { Sound, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy });
        return ReturnValue;
    }
    async SpawnSoundAttached2(Sound, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy) {
        const { ReturnValue } = await this.call('SpawnSoundAttached', { Sound, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy });
        return ReturnValue;
    }
    async StripSaveGameHeader(SaveData) {
        const { ReturnValue } = await this.call('StripSaveGameHeader', { SaveData });
        return ReturnValue;
    }
    async SuggestProjectileVelocity(WorldContextObject, TossVelocity, StartLocation, EndLocation, TossSpeed, bHighArc, CollisionRadius, OverrideGravityZ, TraceOption, ResponseParam, ActorsToIgnore, bDrawDebug) {
        const { ReturnValue } = await this.call('SuggestProjectileVelocity', { WorldContextObject, TossVelocity, StartLocation, EndLocation, TossSpeed, bHighArc, CollisionRadius, OverrideGravityZ, TraceOption, ResponseParam, ActorsToIgnore, bDrawDebug });
        return ReturnValue;
    }
    async SuggestProjectileVelocity_CustomArc(WorldContextObject, StartPos, EndPos, OverrideGravityZ, ArcParam) {
        return await this.call('SuggestProjectileVelocity_CustomArc', { WorldContextObject, StartPos, EndPos, OverrideGravityZ, ArcParam });
    }
    async UnloadStreamLevel(WorldContextObject, LevelName, LatentInfo, bShouldBlockOnUnload) {
        await this.call('UnloadStreamLevel', { WorldContextObject, LevelName, LatentInfo, bShouldBlockOnUnload });
    }
}
exports.GameplayStatics = GameplayStatics;
//# sourceMappingURL=gameplay-statics.js.map