"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class EditorAssetLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorAssetLibrary');
    }
    async CheckoutAsset(AssetToCheckout) {
        const { ReturnValue } = await this.call('CheckoutAsset', { AssetToCheckout });
        return ReturnValue;
    }
    async CheckoutDirectory(DirectoryPath, bRecursive) {
        const { ReturnValue } = await this.call('CheckoutDirectory', { DirectoryPath, bRecursive });
        return ReturnValue;
    }
    async CheckoutLoadedAsset(AssetToCheckout) {
        const { ReturnValue } = await this.call('CheckoutLoadedAsset', { AssetToCheckout });
        return ReturnValue;
    }
    async CheckoutLoadedAssets(AssetsToCheckout) {
        const { ReturnValue } = await this.call('CheckoutLoadedAssets', { AssetsToCheckout });
        return ReturnValue;
    }
    async ConsolidateAssets(AssetToConsolidateTo, AssetsToConsolidate) {
        const { ReturnValue } = await this.call('ConsolidateAssets', { AssetToConsolidateTo, AssetsToConsolidate });
        return ReturnValue;
    }
    async DeleteAsset(AssetPathToDelete) {
        const { ReturnValue } = await this.call('DeleteAsset', { AssetPathToDelete });
        return ReturnValue;
    }
    async DeleteDirectory(DirectoryPath) {
        const { ReturnValue } = await this.call('DeleteDirectory', { DirectoryPath });
        return ReturnValue;
    }
    async DeleteLoadedAsset(AssetToDelete) {
        const { ReturnValue } = await this.call('DeleteLoadedAsset', { AssetToDelete });
        return ReturnValue;
    }
    async DeleteLoadedAssets(AssetsToDelete) {
        const { ReturnValue } = await this.call('DeleteLoadedAssets', { AssetsToDelete });
        return ReturnValue;
    }
    async DoAssetsExist(AssetPaths) {
        const { ReturnValue } = await this.call('DoAssetsExist', { AssetPaths });
        return ReturnValue;
    }
    async DoesAssetExist(AssetPath) {
        const { ReturnValue } = await this.call('DoesAssetExist', { AssetPath });
        return ReturnValue;
    }
    async DoesDirectoryExist(DirectoryPath) {
        const { ReturnValue } = await this.call('DoesDirectoryExist', { DirectoryPath });
        return ReturnValue;
    }
    async DoesDirectoryHaveAssets(DirectoryPath, bRecursive) {
        const { ReturnValue } = await this.call('DoesDirectoryHaveAssets', { DirectoryPath, bRecursive });
        return ReturnValue;
    }
    async DuplicateAsset(SourceAssetPath, DestinationAssetPath) {
        const { ReturnValue } = await this.call('DuplicateAsset', { SourceAssetPath, DestinationAssetPath });
        return ReturnValue;
    }
    async DuplicateDirectory(SourceDirectoryPath, DestinationDirectoryPath) {
        const { ReturnValue } = await this.call('DuplicateDirectory', { SourceDirectoryPath, DestinationDirectoryPath });
        return ReturnValue;
    }
    async DuplicateLoadedAsset(SourceAsset, DestinationAssetPath) {
        const { ReturnValue } = await this.call('DuplicateLoadedAsset', { SourceAsset, DestinationAssetPath });
        return ReturnValue;
    }
    async FindAssetData(AssetPath) {
        const { ReturnValue } = await this.call('FindAssetData', { AssetPath });
        return ReturnValue;
    }
    async FindPackageReferencersForAsset(AssetPath, bLoadAssetsToConfirm) {
        const { ReturnValue } = await this.call('FindPackageReferencersForAsset', { AssetPath, bLoadAssetsToConfirm });
        return ReturnValue;
    }
    async GetMetadataTag(Object, Tag) {
        const { ReturnValue } = await this.call('GetMetadataTag', { Object, Tag });
        return ReturnValue;
    }
    async GetMetadataTagValues(Object) {
        const { ReturnValue } = await this.call('GetMetadataTagValues', { Object });
        return ReturnValue;
    }
    async GetPathNameForLoadedAsset(LoadedAsset) {
        const { ReturnValue } = await this.call('GetPathNameForLoadedAsset', { LoadedAsset });
        return ReturnValue;
    }
    async GetTagValues(AssetPath) {
        const { ReturnValue } = await this.call('GetTagValues', { AssetPath });
        return ReturnValue;
    }
    async ListAssetByTagValue(TagName, TagValue) {
        const { ReturnValue } = await this.call('ListAssetByTagValue', { TagName, TagValue });
        return ReturnValue;
    }
    async ListAssets(DirectoryPath, bRecursive, bIncludeFolder) {
        const { ReturnValue } = await this.call('ListAssets', { DirectoryPath, bRecursive, bIncludeFolder });
        return ReturnValue;
    }
    async LoadAsset(AssetPath) {
        const { ReturnValue } = await this.call('LoadAsset', { AssetPath });
        return ReturnValue;
    }
    async LoadBlueprintClass(AssetPath) {
        const { ReturnValue } = await this.call('LoadBlueprintClass', { AssetPath });
        return ReturnValue;
    }
    async MakeDirectory(DirectoryPath) {
        const { ReturnValue } = await this.call('MakeDirectory', { DirectoryPath });
        return ReturnValue;
    }
    async RemoveMetadataTag(Object, Tag) {
        await this.call('RemoveMetadataTag', { Object, Tag });
    }
    async RenameAsset(SourceAssetPath, DestinationAssetPath) {
        const { ReturnValue } = await this.call('RenameAsset', { SourceAssetPath, DestinationAssetPath });
        return ReturnValue;
    }
    async RenameDirectory(SourceDirectoryPath, DestinationDirectoryPath) {
        const { ReturnValue } = await this.call('RenameDirectory', { SourceDirectoryPath, DestinationDirectoryPath });
        return ReturnValue;
    }
    async RenameLoadedAsset(SourceAsset, DestinationAssetPath) {
        const { ReturnValue } = await this.call('RenameLoadedAsset', { SourceAsset, DestinationAssetPath });
        return ReturnValue;
    }
    async SaveAsset(AssetToSave, bOnlyIfIsDirty) {
        const { ReturnValue } = await this.call('SaveAsset', { AssetToSave, bOnlyIfIsDirty });
        return ReturnValue;
    }
    async SaveDirectory(DirectoryPath, bOnlyIfIsDirty, bRecursive) {
        const { ReturnValue } = await this.call('SaveDirectory', { DirectoryPath, bOnlyIfIsDirty, bRecursive });
        return ReturnValue;
    }
    async SaveLoadedAsset(AssetToSave, bOnlyIfIsDirty) {
        const { ReturnValue } = await this.call('SaveLoadedAsset', { AssetToSave, bOnlyIfIsDirty });
        return ReturnValue;
    }
    async SaveLoadedAssets(AssetsToSave, bOnlyIfIsDirty) {
        const { ReturnValue } = await this.call('SaveLoadedAssets', { AssetsToSave, bOnlyIfIsDirty });
        return ReturnValue;
    }
    async SetMetadataTag(Object, Tag, Value) {
        await this.call('SetMetadataTag', { Object, Tag, Value });
    }
    async SyncBrowserToObjects(AssetPaths) {
        await this.call('SyncBrowserToObjects', { AssetPaths });
    }
}
exports.EditorAssetLibrary = EditorAssetLibrary;
//# sourceMappingURL=editor-asset-library.js.map