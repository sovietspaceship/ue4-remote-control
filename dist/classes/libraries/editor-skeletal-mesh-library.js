"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class EditorSkeletaMeshLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorSkeletaMeshLibrary');
    }
    async GetNumVerts(SkeletalMesh, LODIndex) {
        const { ReturnValue } = await this.call('GetNumVerts', { SkeletalMesh, LODIndex });
        return ReturnValue;
    }
    async RegenerateLOD(SkeletalMesh, NewLODCount, bRegenerateEvenIfImported, bGenerateBaseLOD) {
        const { ReturnValue } = await this.call('RegenerateLOD', { SkeletalMesh, NewLODCount, bRegenerateEvenIfImported, bGenerateBaseLOD });
        return ReturnValue;
    }
    async RenameSocket(SkeletalMesh, OldName, NewName) {
        const { ReturnValue } = await this.call('RenameSocket', { SkeletalMesh, OldName, NewName });
        return ReturnValue;
    }
}
exports.EditorSkeletaMeshLibrary = EditorSkeletaMeshLibrary;
//# sourceMappingURL=editor-skeletal-mesh-library.js.map