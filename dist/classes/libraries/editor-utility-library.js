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
class EditorUtilityLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/Blutility.Default__EditorUtilityLibrary');
    }
    GetActorReference(PathToActor) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetActorReference', { PathToActor });
            return ReturnValue;
        });
    }
    GetSelectedAssetData() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetSelectedAssetData');
            return ReturnValue;
        });
    }
    GetSelectedAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetSelectedAssets');
            return ReturnValue;
        });
    }
    GetSelectedBlueprintClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetSelectedBlueprintClasses');
            return ReturnValue;
        });
    }
    GetSelectionBounds(Origin, BoxExtent, SphereRadius) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('GetSelectionBounds', { Origin, BoxExtent, SphereRadius });
        });
    }
    GetSelectionSet() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetSelectionSet');
            return ReturnValue;
        });
    }
    RenameAsset(Asset, NewName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('RenameAsset', { Asset, NewName });
        });
    }
}
exports.EditorUtilityLibrary = EditorUtilityLibrary;
//# sourceMappingURL=editor-utility-library.js.map