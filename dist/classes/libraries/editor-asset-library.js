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
class EditorAssetLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorAssetLibrary');
    }
    CheckoutAsset(AssetToCheckout) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CheckoutAsset', { AssetToCheckout });
            return ReturnValue;
        });
    }
    CheckoutDirectory(DirectoryPath, bRecursive) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CheckoutDirectory', { DirectoryPath, bRecursive });
            return ReturnValue;
        });
    }
    CheckoutLoadedAsset(AssetToCheckout) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CheckoutLoadedAsset', { AssetToCheckout });
            return ReturnValue;
        });
    }
    CheckoutLoadedAssets(AssetsToCheckout) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CheckoutLoadedAssets', { AssetsToCheckout });
            return ReturnValue;
        });
    }
    ConsolidateAssets(AssetToConsolidateTo, AssetsToConsolidate) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ConsolidateAssets', { AssetToConsolidateTo, AssetsToConsolidate });
            return ReturnValue;
        });
    }
    DeleteAsset(AssetPathToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DeleteAsset', { AssetPathToDelete });
            return ReturnValue;
        });
    }
    DeleteDirectory(DirectoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DeleteDirectory', { DirectoryPath });
            return ReturnValue;
        });
    }
    DeleteLoadedAsset(AssetToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DeleteLoadedAsset', { AssetToDelete });
            return ReturnValue;
        });
    }
    DeleteLoadedAssets(AssetsToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DeleteLoadedAssets', { AssetsToDelete });
            return ReturnValue;
        });
    }
    DoAssetsExist(AssetPaths) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DoAssetsExist', { AssetPaths });
            return ReturnValue;
        });
    }
    DoesAssetExist(AssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DoesAssetExist', { AssetPath });
            return ReturnValue;
        });
    }
    DoesDirectoryExist(DirectoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DoesDirectoryExist', { DirectoryPath });
            return ReturnValue;
        });
    }
    DoesDirectoryHaveAssets(DirectoryPath, bRecursive) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DoesDirectoryHaveAssets', { DirectoryPath, bRecursive });
            return ReturnValue;
        });
    }
    DuplicateAsset(SourceAssetPath, DestinationAssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DuplicateAsset', { SourceAssetPath, DestinationAssetPath });
            return ReturnValue;
        });
    }
    DuplicateDirectory(SourceDirectoryPath, DestinationDirectoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DuplicateDirectory', { SourceDirectoryPath, DestinationDirectoryPath });
            return ReturnValue;
        });
    }
    DuplicateLoadedAsset(SourceAsset, DestinationAssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DuplicateLoadedAsset', { SourceAsset, DestinationAssetPath });
            return ReturnValue;
        });
    }
    FindAssetData(AssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('FindAssetData', { AssetPath });
            return ReturnValue;
        });
    }
    FindPackageReferencersForAsset(AssetPath, bLoadAssetsToConfirm) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('FindPackageReferencersForAsset', { AssetPath, bLoadAssetsToConfirm });
            return ReturnValue;
        });
    }
    GetMetadataTag(Object, Tag) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetMetadataTag', { Object, Tag });
            return ReturnValue;
        });
    }
    GetMetadataTagValues(Object) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetMetadataTagValues', { Object });
            return ReturnValue;
        });
    }
    GetPathNameForLoadedAsset(LoadedAsset) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPathNameForLoadedAsset', { LoadedAsset });
            return ReturnValue;
        });
    }
    GetTagValues(AssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetTagValues', { AssetPath });
            return ReturnValue;
        });
    }
    ListAssetByTagValue(TagName, TagValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ListAssetByTagValue', { TagName, TagValue });
            return ReturnValue;
        });
    }
    ListAssets(DirectoryPath, bRecursive, bIncludeFolder) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ListAssets', { DirectoryPath, bRecursive, bIncludeFolder });
            return ReturnValue;
        });
    }
    LoadAsset(AssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('LoadAsset', { AssetPath });
            return ReturnValue;
        });
    }
    LoadBlueprintClass(AssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('LoadBlueprintClass', { AssetPath });
            return ReturnValue;
        });
    }
    MakeDirectory(DirectoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('MakeDirectory', { DirectoryPath });
            return ReturnValue;
        });
    }
    RemoveMetadataTag(Object, Tag) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('RemoveMetadataTag', { Object, Tag });
        });
    }
    RenameAsset(SourceAssetPath, DestinationAssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RenameAsset', { SourceAssetPath, DestinationAssetPath });
            return ReturnValue;
        });
    }
    RenameDirectory(SourceDirectoryPath, DestinationDirectoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RenameDirectory', { SourceDirectoryPath, DestinationDirectoryPath });
            return ReturnValue;
        });
    }
    RenameLoadedAsset(SourceAsset, DestinationAssetPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RenameLoadedAsset', { SourceAsset, DestinationAssetPath });
            return ReturnValue;
        });
    }
    SaveAsset(AssetToSave, bOnlyIfIsDirty) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SaveAsset', { AssetToSave, bOnlyIfIsDirty });
            return ReturnValue;
        });
    }
    SaveDirectory(DirectoryPath, bOnlyIfIsDirty, bRecursive) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SaveDirectory', { DirectoryPath, bOnlyIfIsDirty, bRecursive });
            return ReturnValue;
        });
    }
    SaveLoadedAsset(AssetToSave, bOnlyIfIsDirty) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SaveLoadedAsset', { AssetToSave, bOnlyIfIsDirty });
            return ReturnValue;
        });
    }
    SaveLoadedAssets(AssetsToSave, bOnlyIfIsDirty) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SaveLoadedAssets', { AssetsToSave, bOnlyIfIsDirty });
            return ReturnValue;
        });
    }
    SetMetadataTag(Object, Tag, Value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetMetadataTag', { Object, Tag, Value });
        });
    }
    SyncBrowserToObjects(AssetPaths) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SyncBrowserToObjects', { AssetPaths });
        });
    }
}
exports.EditorAssetLibrary = EditorAssetLibrary;
//# sourceMappingURL=editor-asset-library.js.map