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
class EditorStaticMeshLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorStaticMeshLibrary');
    }
    AddSimpleCollisions(StaticMesh, ShapeType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('AddSimpleCollisions', { StaticMesh, ShapeType });
            return ReturnValue;
        });
    }
    AddSimpleCollisionsWithNotification(StaticMesh, ShapeType, bApplyChanges) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('AddSimpleCollisionsWithNotification', { StaticMesh, ShapeType, bApplyChanges });
            return ReturnValue;
        });
    }
    AddUVChannel(StaticMesh, LODIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('AddUVChannel', { StaticMesh, LODIndex });
            return ReturnValue;
        });
    }
    EnableSectionCastShadow(StaticMesh, bCastShadow, LODIndex, SectionIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('EnableSectionCastShadow', { StaticMesh, bCastShadow, LODIndex, SectionIndex });
        });
    }
    EnableSectionCollision(StaticMesh, bCollisionEnabled, LODIndex, SectionIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('EnableSectionCollision', { StaticMesh, bCollisionEnabled, LODIndex, SectionIndex });
        });
    }
    GenerateBoxUVChannel(StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Size) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GenerateBoxUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Size });
            return ReturnValue;
        });
    }
    GenerateCylindricalUVChannel(StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GenerateCylindricalUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling });
            return ReturnValue;
        });
    }
    GeneratePlanarUVChannel(StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GeneratePlanarUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling });
            return ReturnValue;
        });
    }
    GetCollisionComplexity(StaticMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetCollisionComplexity', { StaticMesh });
            return ReturnValue;
        });
    }
    GetConvexCollisionCount(StaticMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetConvexCollisionCount', { StaticMesh });
            return ReturnValue;
        });
    }
    GetLodCount(StaticMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetLodCount', { StaticMesh });
            return ReturnValue;
        });
    }
    GetLodScreenSizes(StaticMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetLodScreenSizes', { StaticMesh });
            return ReturnValue;
        });
    }
    GetNumberVerts(StaticMesh, LODIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetNumberVerts', { StaticMesh, LODIndex });
            return ReturnValue;
        });
    }
    GetNumUVChannels(StaticMesh, LODIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetNumUVChannels', { StaticMesh, LODIndex });
            return ReturnValue;
        });
    }
    GetSimpleCollisionCount(StaticMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetSimpleCollisionCount', { StaticMesh });
            return ReturnValue;
        });
    }
    HasInstanceVertexColors(StaticMeshComponent) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('HasInstanceVertexColors', { StaticMeshComponent });
            return ReturnValue;
        });
    }
    HasVertexColors(StaticMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('HasVertexColors', { StaticMesh });
            return ReturnValue;
        });
    }
    InsertUVChannel(StaticMesh, LODIndex, UVChannelIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('InsertUVChannel', { StaticMesh, LODIndex, UVChannelIndex });
            return ReturnValue;
        });
    }
    IsSectionCollisionEnabled(StaticMesh, LODIndex, SectionIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsSectionCollisionEnabled', { StaticMesh, LODIndex, SectionIndex });
            return ReturnValue;
        });
    }
    RemoveCollisions(StaticMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RemoveCollisions', { StaticMesh });
            return ReturnValue;
        });
    }
    RemoveCollisionsWithNotification(StaticMesh, bApplyChanges) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RemoveCollisionsWithNotification', { StaticMesh, bApplyChanges });
            return ReturnValue;
        });
    }
    RemoveLods(StaticMesh) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RemoveLods', { StaticMesh });
            return ReturnValue;
        });
    }
    RemoveUVChannel(StaticMesh, LODIndex, UVChannelIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RemoveUVChannel', { StaticMesh, LODIndex, UVChannelIndex });
            return ReturnValue;
        });
    }
    SetAllowCPUAccess(StaticMesh, bAllowCPUAccess) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetAllowCPUAccess', { StaticMesh, bAllowCPUAccess });
        });
    }
    SetConvexDecompositionCollisions(StaticMesh, HullCount, MaxHullVerts, HullPrecision) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetConvexDecompositionCollisions', { StaticMesh, HullCount, MaxHullVerts, HullPrecision });
            return ReturnValue;
        });
    }
    SetConvexDecompositionCollisionsWithNotification(StaticMesh, HullCount, MaxHullVerts, HullPrecision, bApplyChanges) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetConvexDecompositionCollisionsWithNotification', { StaticMesh, HullCount, MaxHullVerts, HullPrecision, bApplyChanges });
            return ReturnValue;
        });
    }
    SetGenerateLightmapUVs(StaticMesh, bGenerateLightmapUVs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetGenerateLightmapUVs', { StaticMesh, bGenerateLightmapUVs });
            return ReturnValue;
        });
    }
    SetLodFromStaticMesh(DestinationStaticMesh, DestinationLodIndex, SourceStaticMesh, SourceLodIndex, bReuseExistingMaterialSlots) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetLodFromStaticMesh', { DestinationStaticMesh, DestinationLodIndex, SourceStaticMesh, SourceLodIndex, bReuseExistingMaterialSlots });
            return ReturnValue;
        });
    }
    SetLods(StaticMesh, ReductionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetLods', { StaticMesh, ReductionOptions });
            return ReturnValue;
        });
    }
    SetLodsWithNotification(StaticMesh, ReductionOptions, bApplyChanges) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetLodsWithNotification', { StaticMesh, ReductionOptions, bApplyChanges });
            return ReturnValue;
        });
    }
}
exports.EditorStaticMeshLibrary = EditorStaticMeshLibrary;
//# sourceMappingURL=editor-static-mesh-library.js.map