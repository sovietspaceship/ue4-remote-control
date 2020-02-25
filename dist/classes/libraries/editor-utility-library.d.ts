import { UObject } from "../uobject";
import { FString, UObjectRef, FAssetData, FVector } from "../../engine/types";
import { AActor } from "../actors/actor";
import { UClass } from "../objects/class";
export declare class EditorUtilityLibrary extends UObject {
    constructor();
    GetActorReference(PathToActor: FString): Promise<UObjectRef<AActor>>;
    GetSelectedAssetData(): Promise<FAssetData[]>;
    GetSelectedAssets(): Promise<UObjectRef<UObject>[]>;
    GetSelectedBlueprintClasses(): Promise<UObjectRef<UClass>[]>;
    GetSelectionBounds(Origin: FVector, BoxExtent: FVector, SphereRadius: number): Promise<void>;
    GetSelectionSet(): Promise<UObjectRef<AActor>[]>;
    RenameAsset(Asset: UObject, NewName: FString): Promise<void>;
}
