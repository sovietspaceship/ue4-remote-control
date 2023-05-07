"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class EditorUtilityLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/Blutility.Default__EditorUtilityLibrary');
    }
    async GetActorReference(PathToActor) {
        const { ReturnValue } = await this.call('GetActorReference', { PathToActor });
        return ReturnValue;
    }
    async GetSelectedAssetData() {
        const { ReturnValue } = await this.call('GetSelectedAssetData');
        return ReturnValue;
    }
    async GetSelectedAssets() {
        const { ReturnValue } = await this.call('GetSelectedAssets');
        return ReturnValue;
    }
    async GetSelectedBlueprintClasses() {
        const { ReturnValue } = await this.call('GetSelectedBlueprintClasses');
        return ReturnValue;
    }
    async GetSelectionBounds(Origin, BoxExtent, SphereRadius) {
        await this.call('GetSelectionBounds', { Origin, BoxExtent, SphereRadius });
    }
    async GetSelectionSet() {
        const { ReturnValue } = await this.call('GetSelectionSet');
        return ReturnValue;
    }
    async RenameAsset(Asset, NewName) {
        await this.call('RenameAsset', { Asset, NewName });
    }
}
exports.EditorUtilityLibrary = EditorUtilityLibrary;
//# sourceMappingURL=editor-utility-library.js.map