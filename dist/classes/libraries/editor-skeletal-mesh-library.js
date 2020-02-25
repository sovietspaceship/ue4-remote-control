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
class EditorSkeletaMeshLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorSkeletaMeshLibrary');
    }
    GetNumVerts(SkeletalMesh, LODIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetNumVerts', { SkeletalMesh, LODIndex });
            return ReturnValue;
        });
    }
    RegenerateLOD(SkeletalMesh, NewLODCount, bRegenerateEvenIfImported, bGenerateBaseLOD) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RegenerateLOD', { SkeletalMesh, NewLODCount, bRegenerateEvenIfImported, bGenerateBaseLOD });
            return ReturnValue;
        });
    }
    RenameSocket(SkeletalMesh, OldName, NewName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RenameSocket', { SkeletalMesh, OldName, NewName });
            return ReturnValue;
        });
    }
}
exports.EditorSkeletaMeshLibrary = EditorSkeletaMeshLibrary;
//# sourceMappingURL=editor-skeletal-mesh-library.js.map