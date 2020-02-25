export type UObjectPath = string

export type TMap<Key extends string | number, Value> = { [key: string]: Value };

export type FName = string

export type FString = string

export type FVector = {
    X: number,
    Y: number,
    Z: number
}

export type TEnumAsByte<E> = keyof E

export type FHitResult = {
    bBlockingHit: boolean,
    bStartPenetrating: boolean,
    FaceIndex: number,
    Time: number
    Distance: number,
    Location: FVector,
    ImpactPoint: FVector,
    Normal: FVector,
    ImpactNormal: FVector,
    TraceStart: FVector,
    TraceEnd: FVector,
    PenetrationDepth: number,
    Item: number,
    PhysMaterial: string,
    Actor: UObjectPath,
    Component: UObjectPath,
    BoneName: FName,
    MyBoneName: FName
}

export type FEditorScriptingCreateProxyMeshActorOptions = {

}

export type FEditorScriptingJoinStaticMeshActorsOptions = {

}

export type FEditorScriptingMergeStaticMeshActorsOptions = {

}

export type FRotator = {
    Pitch: number,
    Roll: number,
    Yaw: number
}

export type FVector2D = {
    X: number,
    Y: number
}

export type FAssetData = {

}

export type FEditorScriptingMeshReductionOptions = {

}

export enum EScriptingCollisionShapeType {
    Box = 'Box',
    Sphere = 'Sphere',
    Capsule = 'Capsule',
    NDOP10_X = 'NDOP10_X',
    NDOP10_Y = 'NDOP10_Y',
    NDOP10_Z = 'NDOP10_Z',
    NDOP18 = 'NDOP18',
    NDOP26 = 'NDOP26',
}

export enum ECollisionTraceFlag {
    CTF_UseDefault = 'CTF_UseDefault',
    CTF_UseSimpleAndComplex = 'CTF_UseSimpleAndComplex',
    CTF_UseSimpleAsComplex = 'CTF_UseSimpleAsComplex',
    CTF_UseComplexAsSimple = 'CTF_UseComplexAsSimple',
    CTF_MAX = 'CTF_MAX',
}

export enum EEditorScriptingFilterType {
    Include = 'Include',
    Exclude = 'Exclude',
}

export enum EEditorScriptingStringMatchType {
    Contains = 'Contains',
    MatchesWildcard = 'MatchesWildcard',
    ExactMatch = 'ExactMatch',
}