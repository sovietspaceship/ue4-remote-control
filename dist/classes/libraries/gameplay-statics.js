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
class GameplayStatics extends uobject_1.UObject {
    constructor() {
        super('/Script/Editor.Default__GameplayStatics');
    }
    ActivateReverbEffect(WorldContextObject, ReverbEffect, TagName, Priority, Volume, FadeTime) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('ActivateReverbEffect', { WorldContextObject, ReverbEffect, TagName, Priority, Volume, FadeTime });
        });
    }
    ApplyDamage(DamagedActor, BaseDamage, EventInstigator, DamageCauser, DamageTypeClass) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ApplyDamage', { DamagedActor, BaseDamage, EventInstigator, DamageCauser, DamageTypeClass });
            return ReturnValue;
        });
    }
    ApplyPointDamage(DamagedActor, BaseDamage, HitFromDirection, HitInfo, EventInstigator, DamageCauser, DamageTypeClass) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ApplyPointDamage', { DamagedActor, BaseDamage, HitFromDirection, HitInfo, EventInstigator, DamageCauser, DamageTypeClass });
            return ReturnValue;
        });
    }
    ApplyRadialDamage(WorldContextObject, BaseDamage, Origin, DamageRadius, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, bDoFullDamage, DamagePreventionChannel) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ApplyRadialDamage', { WorldContextObject, BaseDamage, Origin, DamageRadius, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, bDoFullDamage, DamagePreventionChannel });
            return ReturnValue;
        });
    }
    ApplyRadialDamageWithFalloff(WorldContextObject, BaseDamage, MinimumDamage, Origin, DamageInnerRadius, DamageOuterRadius, DamageFalloff, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, DamagePreventionChannel) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ApplyRadialDamageWithFalloff', { WorldContextObject, BaseDamage, MinimumDamage, Origin, DamageInnerRadius, DamageOuterRadius, DamageFalloff, DamageTypeClass, IgnoreActors, DamageCauser, InstigatedByController, DamagePreventionChannel });
            return ReturnValue;
        });
    }
    AreAnyListenersWithinRange(WorldContextObject, Location, MaximumRange) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('AreAnyListenersWithinRange', { WorldContextObject, Location, MaximumRange });
            return ReturnValue;
        });
    }
    AreSubtitlesEnabled() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('AreSubtitlesEnabled');
            return ReturnValue;
        });
    }
    AsyncLoadGameFromSlot(SlotName, UserIndex, LoadedDelegate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('AsyncLoadGameFromSlot', { SlotName, UserIndex, LoadedDelegate });
        });
    }
    AsyncSaveGameToSlot(SaveGameObject, SlotName, UserIndex, SavedDelegate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('AsyncSaveGameToSlot', { SaveGameObject, SlotName, UserIndex, SavedDelegate });
        });
    }
    BeginDeferredActorSpawnFromClass(WorldContextObject, ActorClass, SpawnTransform, CollisionHandlingOverride, Owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('BeginDeferredActorSpawnFromClass', { WorldContextObject, ActorClass, SpawnTransform, CollisionHandlingOverride, Owner });
            return ReturnValue;
        });
    }
    BeginSpawningActorFromBlueprint(WorldContextObject, Blueprint, SpawnTransform, bNoCollisionFail) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('BeginSpawningActorFromBlueprint', { WorldContextObject, Blueprint, SpawnTransform, bNoCollisionFail });
            return ReturnValue;
        });
    }
    Blueprint_PredictProjectilePath_Advanced(WorldContextObject, PredictParams, PredictResult) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('Blueprint_PredictProjectilePath_Advanced', { WorldContextObject, PredictParams, PredictResult });
            return ReturnValue;
        });
    }
    Blueprint_PredictProjectilePath_ByObjectType(WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, ObjectTypes, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('Blueprint_PredictProjectilePath_ByObjectType', { WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, ObjectTypes, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ });
        });
    }
    Blueprint_PredictProjectilePath_ByTraceChannel(WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, TraceChannel, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('Blueprint_PredictProjectilePath_ByTraceChannel', { WorldContextObject, StartPos, LaunchVelocity, bTracePath, ProjectileRadius, TraceChannel, bTraceComplex, ActorsToIgnore, DrawDebugType, DrawDebugTime, SimFrequency, MaxSimTime, OverrideGravityZ });
        });
    }
    BlueprintSuggestProjectileVelocity(WorldContextObject, TossVelocity, StartLocation, EndLocation, LaunchSpeed, OverrideGravityZ, TraceOption, CollisionRadius, bFavorHighArc, bDrawDebug) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('BlueprintSuggestProjectileVelocity', { WorldContextObject, TossVelocity, StartLocation, EndLocation, LaunchSpeed, OverrideGravityZ, TraceOption, CollisionRadius, bFavorHighArc, bDrawDebug });
            return ReturnValue;
        });
    }
    BreakHitResult(Hit, bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('BreakHitResult', { Hit, bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd });
        });
    }
    CalculateViewProjectionMatricesFromMinimalView(MinimalViewInfo, CustomProjectionMatrix) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('CalculateViewProjectionMatricesFromMinimalView', { MinimalViewInfo, CustomProjectionMatrix });
        });
    }
    CalculateViewProjectionMatricesFromViewTarget(InViewTarget) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('CalculateViewProjectionMatricesFromViewTarget', { InViewTarget });
        });
    }
    CancelAsyncLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('CancelAsyncLoading');
        });
    }
    ClearSoundMixClassOverride(WorldContextObject, InSoundMixModifier, InSoundClass, FadeOutTime) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('ClearSoundMixClassOverride', { WorldContextObject, InSoundMixModifier, InSoundClass, FadeOutTime });
        });
    }
    ClearSoundMixModifiers(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('ClearSoundMixModifiers', { WorldContextObject });
        });
    }
    CreatePlayer(WorldContextObject, ControllerId, bSpawnPlayerController) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CreatePlayer', { WorldContextObject, ControllerId, bSpawnPlayerController });
            return ReturnValue;
        });
    }
    CreateSaveGameObject(SaveGameClass) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CreateSaveGameObject', { SaveGameClass });
            return ReturnValue;
        });
    }
    CreateSound2D(WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CreateSound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy });
            return ReturnValue;
        });
    }
    DeactivateReverbEffect(WorldContextObject, TagName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DeactivateReverbEffect', { WorldContextObject, TagName });
            return ReturnValue;
        });
    }
    DeleteGameInSlot(SlotName, UserIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DeleteGameInSlot', { SlotName, UserIndex });
            return ReturnValue;
        });
    }
    DeprojectScreenToWorld(Player, ScreenPosition, WorldPosition, WorldDirection) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DeprojectScreenToWorld', { Player, ScreenPosition, WorldPosition, WorldDirection });
            return ReturnValue;
        });
    }
    DoesSaveGameExist(SlotName, UserIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DoesSaveGameExist', { SlotName, UserIndex });
            return ReturnValue;
        });
    }
    EnableLiveStreaming(Enable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('EnableLiveStreaming', { Enable });
        });
    }
    FindCollisionUV(Hit, UVChannel, UV) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('FindCollisionUV', { Hit, UVChannel, UV });
            return ReturnValue;
        });
    }
    FinishSpawningActor(Actor, SpawnTransform) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('FinishSpawningActor', { Actor, SpawnTransform });
            return ReturnValue;
        });
    }
    FlushLevelStreaming(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('FlushLevelStreaming', { WorldContextObject });
        });
    }
    GetAccurateRealTime(WorldContextObject, Seconds, PartialSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('GetAccurateRealTime', { WorldContextObject, Seconds, PartialSeconds });
        });
    }
    GetActorArrayAverageLocation(Actors) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetActorArrayAverageLocation', { Actors });
            return ReturnValue;
        });
    }
    GetActorArrayBounds(Actors, bOnlyCollidingComponents, Center, BoxExtent) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('GetActorArrayBounds', { Actors, bOnlyCollidingComponents, Center, BoxExtent });
        });
    }
    GetActorOfClass(WorldContextObject, ActorClass) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetActorOfClass', { WorldContextObject, ActorClass });
            return ReturnValue;
        });
    }
    GetAllActorsOfClass(WorldContextObject, ActorClass) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('GetAllActorsOfClass', { WorldContextObject, ActorClass });
        });
    }
    GetAllActorsOfClassWithTag(WorldContextObject, ActorClass, Tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('GetAllActorsOfClassWithTag', { WorldContextObject, ActorClass, Tag });
        });
    }
    GetAllActorsWithInterface(WorldContextObject, Interface) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('GetAllActorsWithInterface', { WorldContextObject, Interface });
        });
    }
    GetAllActorsWithTag(WorldContextObject, Tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('GetAllActorsWithTag', { WorldContextObject, Tag });
        });
    }
    GetAudioTimeSeconds(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetAudioTimeSeconds', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetCurrentLevelName(WorldContextObject, bRemovePrefixString) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetCurrentLevelName', { WorldContextObject, bRemovePrefixString });
            return ReturnValue;
        });
    }
    GetCurrentReverbEffect(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetCurrentReverbEffect', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetEnableWorldRendering(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetEnableWorldRendering', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetGameInstance(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetGameInstance', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetGameMode(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetGameMode', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetGameState(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetGameState', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetGlobalTimeDilation(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetGlobalTimeDilation', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetIntOption(Options, Key, DefaultValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetIntOption', { Options, Key, DefaultValue });
            return ReturnValue;
        });
    }
    GetKeyValue(Pair, Key, Value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('GetKeyValue', { Pair, Key, Value });
        });
    }
    GetMaxAudioChannelCount(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetMaxAudioChannelCount', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetObjectClass(Object) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetObjectClass', { Object });
            return ReturnValue;
        });
    }
    GetPlatformName() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPlatformName');
            return ReturnValue;
        });
    }
    GetPlayerCameraManager(WorldContextObject, PlayerIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPlayerCameraManager', { WorldContextObject, PlayerIndex });
            return ReturnValue;
        });
    }
    GetPlayerCharacter(WorldContextObject, PlayerIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPlayerCharacter', { WorldContextObject, PlayerIndex });
            return ReturnValue;
        });
    }
    GetPlayerController(WorldContextObject, PlayerIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPlayerController', { WorldContextObject, PlayerIndex });
            return ReturnValue;
        });
    }
    GetPlayerControllerFromID(WorldContextObject, ControllerID) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPlayerControllerFromID', { WorldContextObject, ControllerID });
            return ReturnValue;
        });
    }
    GetPlayerControllerID(Player) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPlayerControllerID', { Player });
            return ReturnValue;
        });
    }
    GetPlayerPawn(WorldContextObject, PlayerIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPlayerPawn', { WorldContextObject, PlayerIndex });
            return ReturnValue;
        });
    }
    GetRealTimeSeconds(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetRealTimeSeconds', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetStreamingLevel(WorldContextObject, PackageName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetStreamingLevel', { WorldContextObject, PackageName });
            return ReturnValue;
        });
    }
    GetSurfaceType(Hit) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetSurfaceType', { Hit });
            return ReturnValue;
        });
    }
    GetTimeSeconds(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetTimeSeconds', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetUnpausedTimeSeconds(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetUnpausedTimeSeconds', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetViewportMouseCaptureMode(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetViewportMouseCaptureMode', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetViewProjectionMatrix(DesiredView, ViewMatrix, ProjectionMatrix, ViewProjectionMatrix) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('GetViewProjectionMatrix', { DesiredView, ViewMatrix, ProjectionMatrix, ViewProjectionMatrix });
        });
    }
    GetWorldDeltaSeconds(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetWorldDeltaSeconds', { WorldContextObject });
            return ReturnValue;
        });
    }
    GetWorldOriginLocation(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetWorldOriginLocation', { WorldContextObject });
            return ReturnValue;
        });
    }
    GrabOption(Options, ResultString) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GrabOption', { Options, ResultString });
            return ReturnValue;
        });
    }
    GrassOverlappingSphereCount(WorldContextObject, StaticMesh, CenterPosition, Radius) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GrassOverlappingSphereCount', { WorldContextObject, StaticMesh, CenterPosition, Radius });
            return ReturnValue;
        });
    }
    HasLaunchOption(OptionToCheck) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('HasLaunchOption', { OptionToCheck });
            return ReturnValue;
        });
    }
    HasOption(Options, InKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('HasOption', { Options, InKey });
            return ReturnValue;
        });
    }
    IsGamePaused(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsGamePaused', { WorldContextObject });
            return ReturnValue;
        });
    }
    IsSplitscreenForceDisabled(WorldContextObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsSplitscreenForceDisabled', { WorldContextObject });
            return ReturnValue;
        });
    }
    LoadDataFromSlot(SlotName, UserIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('LoadDataFromSlot', { SlotName, UserIndex });
        });
    }
    LoadGameFromMemory(InSaveData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('LoadGameFromMemory', { InSaveData });
            return ReturnValue;
        });
    }
    LoadGameFromSlot(SlotName, UserIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('LoadGameFromSlot', { SlotName, UserIndex });
            return ReturnValue;
        });
    }
    LoadStreamLevel(WorldContextObject, LevelName, bMakeVisibleAfterLoad, bShouldBlockOnLoad, LatentInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('LoadStreamLevel', { WorldContextObject, LevelName, bMakeVisibleAfterLoad, bShouldBlockOnLoad, LatentInfo });
        });
    }
    MakeHitResult(bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('MakeHitResult', { bBlockingHit, bInitialOverlap, Time, Distance, Location, ImpactPoint, Normal, ImpactNormal, PhysMat, HitActor, HitComponent, HitBoneName, HitItem, FaceIndex, TraceStart, TraceEnd });
            return ReturnValue;
        });
    }
    OpenLevel(WorldContextObject, LevelName, bAbsolute, Options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('OpenLevel', { WorldContextObject, LevelName, bAbsolute, Options });
        });
    }
    ParseOption(Options, Key) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ParseOption', { Options, Key });
            return ReturnValue;
        });
    }
    PlayDialogue2D(WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PlayDialogue2D', { WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime });
        });
    }
    PlayDialogueAtLocation(WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PlayDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings });
        });
    }
    PlayDialogueAtLocation2(WorldContextObject, Dialogue, Context, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PlayDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings });
        });
    }
    PlaySound2D(WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, OwningActor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PlaySound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, OwningActor });
        });
    }
    PlaySoundAtLocation(WorldContextObject, Sound, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PlaySoundAtLocation', { WorldContextObject, Sound, Location, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings });
        });
    }
    PlaySoundAtLocation2(WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, OwningActor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PlaySoundAtLocation', { WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, OwningActor });
        });
    }
    PlayWorldCameraShake(WorldContextObject, Shake, Epicenter, InnerRadius, Falloff, bOrientShakeTowardsEpicenter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('PlayWorldCameraShake', { WorldContextObject, Shake, Epicenter, InnerRadius, Falloff, bOrientShakeTowardsEpicenter });
        });
    }
    PopSoundMixModifier(WorldContextObject, InSoundMixModifier) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PopSoundMixModifier', { WorldContextObject, InSoundMixModifier });
        });
    }
    PredictProjectilePath(WorldContextObject, PredictParams, PredictResult) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('PredictProjectilePath', { WorldContextObject, PredictParams, PredictResult });
            return ReturnValue;
        });
    }
    PrimeSound(InSound) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PrimeSound', { InSound });
        });
    }
    ProjectWorldToScreen(Player, WorldPosition, ScreenPosition, bPlayerViewportRelative) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectWorldToScreen', { Player, WorldPosition, ScreenPosition, bPlayerViewportRelative });
            return ReturnValue;
        });
    }
    PushSoundMixModifier(WorldContextObject, InSoundMixModifier) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('PushSoundMixModifier', { WorldContextObject, InSoundMixModifier });
        });
    }
    RebaseLocalOriginOntoZero(WorldContextObject, WorldLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RebaseLocalOriginOntoZero', { WorldContextObject, WorldLocation });
            return ReturnValue;
        });
    }
    RebaseZeroOriginOntoLocal(WorldContextObject, WorldLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RebaseZeroOriginOntoLocal', { WorldContextObject, WorldLocation });
            return ReturnValue;
        });
    }
    RemovePlayer(Player, bDestroyPawn) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('RemovePlayer', { Player, bDestroyPawn });
        });
    }
    SaveDataToSlot(InSaveData, SlotName, UserIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SaveDataToSlot', { InSaveData, SlotName, UserIndex });
            return ReturnValue;
        });
    }
    SaveGameToMemory(SaveGameObject) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('SaveGameToMemory', { SaveGameObject });
        });
    }
    SaveGameToSlot(SaveGameObject, SlotName, UserIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SaveGameToSlot', { SaveGameObject, SlotName, UserIndex });
            return ReturnValue;
        });
    }
    SetBaseSoundMix(WorldContextObject, InSoundMix) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetBaseSoundMix', { WorldContextObject, InSoundMix });
        });
    }
    SetEnableWorldRendering(WorldContextObject, bEnable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetEnableWorldRendering', { WorldContextObject, bEnable });
        });
    }
    SetForceDisableSplitscreen(WorldContextObject, bDisable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetForceDisableSplitscreen', { WorldContextObject, bDisable });
        });
    }
    SetGamePaused(WorldContextObject, bPaused) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetGamePaused', { WorldContextObject, bPaused });
            return ReturnValue;
        });
    }
    SetGlobalListenerFocusParameters(WorldContextObject, FocusAzimuthScale, NonFocusAzimuthScale, FocusDistanceScale, NonFocusDistanceScale, FocusVolumeScale, NonFocusVolumeScale, FocusPriorityScale, NonFocusPriorityScale) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetGlobalListenerFocusParameters', { WorldContextObject, FocusAzimuthScale, NonFocusAzimuthScale, FocusDistanceScale, NonFocusDistanceScale, FocusVolumeScale, NonFocusVolumeScale, FocusPriorityScale, NonFocusPriorityScale });
        });
    }
    SetGlobalPitchModulation(WorldContextObject, PitchModulation, TimeSec) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetGlobalPitchModulation', { WorldContextObject, PitchModulation, TimeSec });
        });
    }
    SetGlobalTimeDilation(WorldContextObject, TimeDilation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetGlobalTimeDilation', { WorldContextObject, TimeDilation });
        });
    }
    SetMaxAudioChannelsScaled(WorldContextObject, MaxChannelCountScale) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetMaxAudioChannelsScaled', { WorldContextObject, MaxChannelCountScale });
        });
    }
    SetPlayerControllerID(Player, ControllerId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetPlayerControllerID', { Player, ControllerId });
        });
    }
    SetSoundMixClassOverride(WorldContextObject, InSoundMixModifier, InSoundClass, Volume, Pitch, FadeInTime, bApplyToChildren) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetSoundMixClassOverride', { WorldContextObject, InSoundMixModifier, InSoundClass, Volume, Pitch, FadeInTime, bApplyToChildren });
        });
    }
    SetSubtitlesEnabled(bEnabled) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetSubtitlesEnabled', { bEnabled });
        });
    }
    SetViewportMouseCaptureMode(WorldContextObject, MouseCaptureMode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetViewportMouseCaptureMode', { WorldContextObject, MouseCaptureMode });
        });
    }
    SetWorldOriginLocation(WorldContextObject, NewLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetWorldOriginLocation', { WorldContextObject, NewLocation });
        });
    }
    SpawnDecalAtLocation(WorldContextObject, DecalMaterial, DecalSize, Location, Rotation, LifeSpan) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnDecalAtLocation', { WorldContextObject, DecalMaterial, DecalSize, Location, Rotation, LifeSpan });
            return ReturnValue;
        });
    }
    SpawnDecalAttached(DecalMaterial, DecalSize, AttachToComponent, AttachPointName, Location, Rotation, LocationType, LifeSpan) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnDecalAttached', { DecalMaterial, DecalSize, AttachToComponent, AttachPointName, Location, Rotation, LocationType, LifeSpan });
            return ReturnValue;
        });
    }
    SpawnDialogue2D(WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnDialogue2D', { WorldContextObject, Dialogue, Context, VolumeMultiplier, PitchMultiplier, StartTime, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnDialogueAtLocation(WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnDialogueAtLocation', { WorldContextObject, Dialogue, Context, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnDialogueAttached(Dialogue, Context, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnDialogueAttached', { Dialogue, Context, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnDialogueAttached2(Dialogue, Context, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnDialogueAttached', { Dialogue, Context, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnEmitterAtLocation(WorldContextObject, EmitterTemplate, Location, Rotation, Scale, bAutoDestroy, PoolingMethod, bAutoActivateSystem) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnEmitterAtLocation', { WorldContextObject, EmitterTemplate, Location, Rotation, Scale, bAutoDestroy, PoolingMethod, bAutoActivateSystem });
            return ReturnValue;
        });
    }
    SpawnEmitterAtLocation2(WorldContextObject, EmitterTemplate, Location, Rotation, bAutoDestroy, PoolingMethod, bAutoActivateSystem) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnEmitterAtLocation', { WorldContextObject, EmitterTemplate, Location, Rotation, bAutoDestroy, PoolingMethod, bAutoActivateSystem });
            return ReturnValue;
        });
    }
    SpawnEmitterAtLocation3(World, EmitterTemplate, SpawnTransform, bAutoDestroy, PoolingMethod, bAutoActivate) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnEmitterAtLocation', { World, EmitterTemplate, SpawnTransform, bAutoDestroy, PoolingMethod, bAutoActivate });
            return ReturnValue;
        });
    }
    SpawnEmitterAttached(EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, Scale, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnEmitterAttached', { EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, Scale, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate });
            return ReturnValue;
        });
    }
    SpawnEmitterAttached2(EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnEmitterAttached', { EmitterTemplate, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bAutoDestroy, PoolingMethod, bAutoActivate });
            return ReturnValue;
        });
    }
    SpawnForceFeedbackAtLocation(WorldContextObject, ForceFeedbackEffect, Location, Rotation, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnForceFeedbackAtLocation', { WorldContextObject, ForceFeedbackEffect, Location, Rotation, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnForceFeedbackAttached(ForceFeedbackEffect, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnForceFeedbackAttached', { ForceFeedbackEffect, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, bLooping, IntensityMultiplier, StartTime, AttenuationSettings, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnObject(ObjectClass) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('SpawnObject', { ObjectClass });
        });
    }
    SpawnSound2D(WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnSound2D', { WorldContextObject, Sound, VolumeMultiplier, PitchMultiplier, StartTime, ConcurrencySettings, bPersistAcrossLevelTransition, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnSoundAtLocation(WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnSoundAtLocation', { WorldContextObject, Sound, Location, Rotation, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnSoundAttached(Sound, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnSoundAttached', { Sound, AttachToComponent, AttachPointName, Location, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy });
            return ReturnValue;
        });
    }
    SpawnSoundAttached2(Sound, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SpawnSoundAttached', { Sound, AttachToComponent, AttachPointName, Location, Rotation, LocationType, bStopWhenAttachedToDestroyed, VolumeMultiplier, PitchMultiplier, StartTime, AttenuationSettings, ConcurrencySettings, bAutoDestroy });
            return ReturnValue;
        });
    }
    StripSaveGameHeader(SaveData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('StripSaveGameHeader', { SaveData });
            return ReturnValue;
        });
    }
    SuggestProjectileVelocity(WorldContextObject, TossVelocity, StartLocation, EndLocation, TossSpeed, bHighArc, CollisionRadius, OverrideGravityZ, TraceOption, ResponseParam, ActorsToIgnore, bDrawDebug) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SuggestProjectileVelocity', { WorldContextObject, TossVelocity, StartLocation, EndLocation, TossSpeed, bHighArc, CollisionRadius, OverrideGravityZ, TraceOption, ResponseParam, ActorsToIgnore, bDrawDebug });
            return ReturnValue;
        });
    }
    SuggestProjectileVelocity_CustomArc(WorldContextObject, StartPos, EndPos, OverrideGravityZ, ArcParam) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('SuggestProjectileVelocity_CustomArc', { WorldContextObject, StartPos, EndPos, OverrideGravityZ, ArcParam });
        });
    }
    UnloadStreamLevel(WorldContextObject, LevelName, LatentInfo, bShouldBlockOnUnload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('UnloadStreamLevel', { WorldContextObject, LevelName, LatentInfo, bShouldBlockOnUnload });
        });
    }
}
exports.GameplayStatics = GameplayStatics;
//# sourceMappingURL=gameplay-statics.js.map