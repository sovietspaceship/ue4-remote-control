import { UClass } from "../classes/objects/class";
export declare type UObjectPath = string;
export declare type UObjectRef<T> = UObjectPath;
export declare type TMap<Key extends string | number, Value> = {
    [key: string]: Value;
};
export declare type FName = string;
export declare type FString = string;
export declare type TSubclassOf<T> = UObjectRef<UClass>;
export declare type FVector = {
    X: number;
    Y: number;
    Z: number;
};
export declare type TEnumAsByte<E> = keyof E;
export declare type TOptional<T> = T | null;
export declare type FText = string;
export declare type FHitResult = {
    bBlockingHit: boolean;
    bStartPenetrating: boolean;
    FaceIndex: number;
    Time: number;
    Distance: number;
    Location: FVector;
    ImpactPoint: FVector;
    Normal: FVector;
    ImpactNormal: FVector;
    TraceStart: FVector;
    TraceEnd: FVector;
    PenetrationDepth: number;
    Item: number;
    PhysMaterial: string;
    Actor: UObjectPath;
    Component: UObjectPath;
    BoneName: FName;
    MyBoneName: FName;
};
export declare type FEditorScriptingCreateProxyMeshActorOptions = {};
export declare type FEditorScriptingJoinStaticMeshActorsOptions = {};
export declare type FEditorScriptingMergeStaticMeshActorsOptions = {};
export declare type FRotator = {
    Pitch: number;
    Roll: number;
    Yaw: number;
};
export declare type FVector2D = {
    X: number;
    Y: number;
};
export declare type FMatrix = {
    M: number[][];
};
export declare type FAssetData = {};
export declare type FEditorScriptingMeshReductionOptions = {};
export declare enum EScriptingCollisionShapeType {
    Box = "Box",
    Sphere = "Sphere",
    Capsule = "Capsule",
    NDOP10_X = "NDOP10_X",
    NDOP10_Y = "NDOP10_Y",
    NDOP10_Z = "NDOP10_Z",
    NDOP18 = "NDOP18",
    NDOP26 = "NDOP26"
}
export declare enum ECollisionTraceFlag {
    CTF_UseDefault = "CTF_UseDefault",
    CTF_UseSimpleAndComplex = "CTF_UseSimpleAndComplex",
    CTF_UseSimpleAsComplex = "CTF_UseSimpleAsComplex",
    CTF_UseComplexAsSimple = "CTF_UseComplexAsSimple",
    CTF_MAX = "CTF_MAX"
}
export declare enum EEditorScriptingFilterType {
    Include = "Include",
    Exclude = "Exclude"
}
export declare enum EEditorScriptingStringMatchType {
    Contains = "Contains",
    MatchesWildcard = "MatchesWildcard",
    ExactMatch = "ExactMatch"
}
