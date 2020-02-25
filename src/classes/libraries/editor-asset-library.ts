import { UObject } from '../uobject'
import { ReturnValue } from '../../api/schema'
import { FString, FName, TMap, FAssetData, UObjectPath } from '../../engine/types'
import { UClass } from '../objects/class'

export class EditorAssetLibrary extends UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorAssetLibrary')
    }
    async CheckoutAsset(AssetToCheckout: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('CheckoutAsset', { AssetToCheckout }) as ReturnValue<boolean>
        return ReturnValue
    }

    async CheckoutDirectory(DirectoryPath: FString, bRecursive: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('CheckoutDirectory', { DirectoryPath, bRecursive }) as ReturnValue<boolean>
        return ReturnValue
    }

    async CheckoutLoadedAsset(AssetToCheckout: UObject): Promise<boolean> {
        const { ReturnValue } = await this.call('CheckoutLoadedAsset', { AssetToCheckout }) as ReturnValue<boolean>
        return ReturnValue
    }

    async CheckoutLoadedAssets(AssetsToCheckout: UObject[]): Promise<boolean> {
        const { ReturnValue } = await this.call('CheckoutLoadedAssets', { AssetsToCheckout }) as ReturnValue<boolean>
        return ReturnValue
    }

    async ConsolidateAssets(AssetToConsolidateTo: UObject, AssetsToConsolidate: UObject[]): Promise<boolean> {
        const { ReturnValue } = await this.call('ConsolidateAssets', { AssetToConsolidateTo, AssetsToConsolidate }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DeleteAsset(AssetPathToDelete: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('DeleteAsset', { AssetPathToDelete }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DeleteDirectory(DirectoryPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('DeleteDirectory', { DirectoryPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DeleteLoadedAsset(AssetToDelete: UObject): Promise<boolean> {
        const { ReturnValue } = await this.call('DeleteLoadedAsset', { AssetToDelete }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DeleteLoadedAssets(AssetsToDelete: UObject[]): Promise<boolean> {
        const { ReturnValue } = await this.call('DeleteLoadedAssets', { AssetsToDelete }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DoAssetsExist(AssetPaths: FString[]): Promise<boolean> {
        const { ReturnValue } = await this.call('DoAssetsExist', { AssetPaths }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DoesAssetExist(AssetPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('DoesAssetExist', { AssetPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DoesDirectoryExist(DirectoryPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('DoesDirectoryExist', { DirectoryPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DoesDirectoryHaveAssets(DirectoryPath: FString, bRecursive: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('DoesDirectoryHaveAssets', { DirectoryPath, bRecursive }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DuplicateAsset(SourceAssetPath: FString, DestinationAssetPath: FString): Promise<UObjectPath> {
        const { ReturnValue } = await this.call('DuplicateAsset', { SourceAssetPath, DestinationAssetPath }) as ReturnValue<UObjectPath>
        return ReturnValue
    }

    async DuplicateDirectory(SourceDirectoryPath: FString, DestinationDirectoryPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('DuplicateDirectory', { SourceDirectoryPath, DestinationDirectoryPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async DuplicateLoadedAsset(SourceAsset: UObject, DestinationAssetPath: FString): Promise<UObjectPath> {
        const { ReturnValue } = await this.call('DuplicateLoadedAsset', { SourceAsset, DestinationAssetPath }) as ReturnValue<UObjectPath>
        return ReturnValue
    }

    async FindAssetData(AssetPath: FString): Promise<FAssetData> {
        const { ReturnValue } = await this.call('FindAssetData', { AssetPath }) as ReturnValue<FAssetData>
        return ReturnValue
    }

    async FindPackageReferencersForAsset(AssetPath: FString, bLoadAssetsToConfirm: boolean): Promise<FString[]> {
        const { ReturnValue } = await this.call('FindPackageReferencersForAsset', { AssetPath, bLoadAssetsToConfirm }) as ReturnValue<FString[]>
        return ReturnValue
    }

    async GetMetadataTag(Object: UObject, Tag: FName): Promise<FString> {
        const { ReturnValue } = await this.call('GetMetadataTag', { Object, Tag }) as ReturnValue<FString>
        return ReturnValue
    }

    async GetMetadataTagValues(Object: UObject): Promise<TMap<FName, FString>> {
        const { ReturnValue } = await this.call('GetMetadataTagValues', { Object }) as ReturnValue<TMap<FName, FString>>
        return ReturnValue
    }

    async GetPathNameForLoadedAsset(LoadedAsset: UObject): Promise<FString> {
        const { ReturnValue } = await this.call('GetPathNameForLoadedAsset', { LoadedAsset }) as ReturnValue<FString>
        return ReturnValue
    }

    async GetTagValues(AssetPath: FString): Promise<TMap<FName, FString>> {
        const { ReturnValue } = await this.call('GetTagValues', { AssetPath }) as ReturnValue<TMap<FName, FString>>
        return ReturnValue
    }

    async ListAssetByTagValue(TagName: FName, TagValue: FString): Promise<FString[]> {
        const { ReturnValue } = await this.call('ListAssetByTagValue', { TagName, TagValue }) as ReturnValue<FString[]>
        return ReturnValue
    }

    async ListAssets(DirectoryPath: FString, bRecursive: boolean, bIncludeFolder: boolean): Promise<FString[]> {
        const { ReturnValue } = await this.call('ListAssets', { DirectoryPath, bRecursive, bIncludeFolder }) as ReturnValue<FString[]>
        return ReturnValue
    }

    async LoadAsset(AssetPath: FString): Promise<UObjectPath> {
        const { ReturnValue } = await this.call('LoadAsset', { AssetPath }) as ReturnValue<UObjectPath>
        return ReturnValue
    }

    async LoadBlueprintClass(AssetPath: FString): Promise<UObjectPath> {
        const { ReturnValue } = await this.call('LoadBlueprintClass', { AssetPath }) as ReturnValue<UObjectPath>
        return ReturnValue
    }

    async MakeDirectory(DirectoryPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('MakeDirectory', { DirectoryPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async RemoveMetadataTag(Object: UObject, Tag: FName): Promise<void> {
        await this.call('RemoveMetadataTag', { Object, Tag })
    }

    async RenameAsset(SourceAssetPath: FString, DestinationAssetPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('RenameAsset', { SourceAssetPath, DestinationAssetPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async RenameDirectory(SourceDirectoryPath: FString, DestinationDirectoryPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('RenameDirectory', { SourceDirectoryPath, DestinationDirectoryPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async RenameLoadedAsset(SourceAsset: UObject, DestinationAssetPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('RenameLoadedAsset', { SourceAsset, DestinationAssetPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SaveAsset(AssetToSave: FString, bOnlyIfIsDirty: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('SaveAsset', { AssetToSave, bOnlyIfIsDirty }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SaveDirectory(DirectoryPath: FString, bOnlyIfIsDirty: boolean, bRecursive: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('SaveDirectory', { DirectoryPath, bOnlyIfIsDirty, bRecursive }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SaveLoadedAsset(AssetToSave: UObject, bOnlyIfIsDirty: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('SaveLoadedAsset', { AssetToSave, bOnlyIfIsDirty }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SaveLoadedAssets(AssetsToSave: UObject[], bOnlyIfIsDirty: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('SaveLoadedAssets', { AssetsToSave, bOnlyIfIsDirty }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SetMetadataTag(Object: UObject, Tag: FName, Value: FString): Promise<void> {
        await this.call('SetMetadataTag', { Object, Tag, Value })
    }

    async SyncBrowserToObjects(AssetPaths: FString[]): Promise<void> {
        await this.call('SyncBrowserToObjects', { AssetPaths })
    }
}