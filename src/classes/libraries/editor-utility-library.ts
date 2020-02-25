import { UObject } from "../uobject"
import { FString, UObjectRef, FAssetData, FVector } from "../../engine/types"
import { AActor } from "../actors/actor"
import { ReturnValue } from "../../api/schema"
import { UClass } from "../objects/class"

export class EditorUtilityLibrary extends UObject {
    constructor() {
        super('/Script/Blutility.Default__EditorUtilityLibrary')
    }

    async GetActorReference(PathToActor: FString): Promise<UObjectRef<AActor>> {
        const { ReturnValue } = await this.call('GetActorReference', { PathToActor }) as ReturnValue<UObjectRef<AActor>>
        return ReturnValue
    }

    async GetSelectedAssetData(): Promise<FAssetData[]> {
        const { ReturnValue } = await this.call('GetSelectedAssetData') as ReturnValue<FAssetData[]>
        return ReturnValue
    }

    async GetSelectedAssets(): Promise<UObjectRef<UObject>[]> {
        const { ReturnValue } = await this.call('GetSelectedAssets') as ReturnValue<UObjectRef<UObject>[]>
        return ReturnValue
    }

    async GetSelectedBlueprintClasses(): Promise<UObjectRef<UClass>[]> {
        const { ReturnValue } = await this.call('GetSelectedBlueprintClasses') as ReturnValue<UObjectRef<UClass>[]>
        return ReturnValue
    }

    async GetSelectionBounds(Origin: FVector, BoxExtent: FVector, SphereRadius: number): Promise<void> {
        await this.call('GetSelectionBounds', { Origin, BoxExtent, SphereRadius })
    }

    async GetSelectionSet(): Promise<UObjectRef<AActor>[]> {
        const { ReturnValue } = await this.call('GetSelectionSet') as ReturnValue<UObjectRef<AActor>[]>
        return ReturnValue
    }

    async RenameAsset(Asset: UObject, NewName: FString): Promise<void> {
        await this.call('RenameAsset', { Asset, NewName })
    }
}