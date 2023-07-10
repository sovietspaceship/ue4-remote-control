"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class EditorStaticMeshLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorStaticMeshLibrary');
    }
    async AddSimpleCollisions(StaticMesh, ShapeType) {
        const { ReturnValue } = await this.call('AddSimpleCollisions', { StaticMesh, ShapeType });
        return ReturnValue;
    }
    async AddSimpleCollisionsWithNotification(StaticMesh, ShapeType, bApplyChanges) {
        const { ReturnValue } = await this.call('AddSimpleCollisionsWithNotification', { StaticMesh, ShapeType, bApplyChanges });
        return ReturnValue;
    }
    async AddUVChannel(StaticMesh, LODIndex) {
        const { ReturnValue } = await this.call('AddUVChannel', { StaticMesh, LODIndex });
        return ReturnValue;
    }
    async EnableSectionCastShadow(StaticMesh, bCastShadow, LODIndex, SectionIndex) {
        await this.call('EnableSectionCastShadow', { StaticMesh, bCastShadow, LODIndex, SectionIndex });
    }
    async EnableSectionCollision(StaticMesh, bCollisionEnabled, LODIndex, SectionIndex) {
        await this.call('EnableSectionCollision', { StaticMesh, bCollisionEnabled, LODIndex, SectionIndex });
    }
    async GenerateBoxUVChannel(StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Size) {
        const { ReturnValue } = await this.call('GenerateBoxUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Size });
        return ReturnValue;
    }
    async GenerateCylindricalUVChannel(StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling) {
        const { ReturnValue } = await this.call('GenerateCylindricalUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling });
        return ReturnValue;
    }
    async GeneratePlanarUVChannel(StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling) {
        const { ReturnValue } = await this.call('GeneratePlanarUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling });
        return ReturnValue;
    }
    async GetCollisionComplexity(StaticMesh) {
        const { ReturnValue } = await this.call('GetCollisionComplexity', { StaticMesh });
        return ReturnValue;
    }
    async GetConvexCollisionCount(StaticMesh) {
        const { ReturnValue } = await this.call('GetConvexCollisionCount', { StaticMesh });
        return ReturnValue;
    }
    async GetLodCount(StaticMesh) {
        const { ReturnValue } = await this.call('GetLodCount', { StaticMesh });
        return ReturnValue;
    }
    async GetLodScreenSizes(StaticMesh) {
        const { ReturnValue } = await this.call('GetLodScreenSizes', { StaticMesh });
        return ReturnValue;
    }
    async GetNumberVerts(StaticMesh, LODIndex) {
        const { ReturnValue } = await this.call('GetNumberVerts', { StaticMesh, LODIndex });
        return ReturnValue;
    }
    async GetNumUVChannels(StaticMesh, LODIndex) {
        const { ReturnValue } = await this.call('GetNumUVChannels', { StaticMesh, LODIndex });
        return ReturnValue;
    }
    async GetSimpleCollisionCount(StaticMesh) {
        const { ReturnValue } = await this.call('GetSimpleCollisionCount', { StaticMesh });
        return ReturnValue;
    }
    async HasInstanceVertexColors(StaticMeshComponent) {
        const { ReturnValue } = await this.call('HasInstanceVertexColors', { StaticMeshComponent });
        return ReturnValue;
    }
    async HasVertexColors(StaticMesh) {
        const { ReturnValue } = await this.call('HasVertexColors', { StaticMesh });
        return ReturnValue;
    }
    async InsertUVChannel(StaticMesh, LODIndex, UVChannelIndex) {
        const { ReturnValue } = await this.call('InsertUVChannel', { StaticMesh, LODIndex, UVChannelIndex });
        return ReturnValue;
    }
    async IsSectionCollisionEnabled(StaticMesh, LODIndex, SectionIndex) {
        const { ReturnValue } = await this.call('IsSectionCollisionEnabled', { StaticMesh, LODIndex, SectionIndex });
        return ReturnValue;
    }
    async RemoveCollisions(StaticMesh) {
        const { ReturnValue } = await this.call('RemoveCollisions', { StaticMesh });
        return ReturnValue;
    }
    async RemoveCollisionsWithNotification(StaticMesh, bApplyChanges) {
        const { ReturnValue } = await this.call('RemoveCollisionsWithNotification', { StaticMesh, bApplyChanges });
        return ReturnValue;
    }
    async RemoveLods(StaticMesh) {
        const { ReturnValue } = await this.call('RemoveLods', { StaticMesh });
        return ReturnValue;
    }
    async RemoveUVChannel(StaticMesh, LODIndex, UVChannelIndex) {
        const { ReturnValue } = await this.call('RemoveUVChannel', { StaticMesh, LODIndex, UVChannelIndex });
        return ReturnValue;
    }
    async SetAllowCPUAccess(StaticMesh, bAllowCPUAccess) {
        await this.call('SetAllowCPUAccess', { StaticMesh, bAllowCPUAccess });
    }
    async SetConvexDecompositionCollisions(StaticMesh, HullCount, MaxHullVerts, HullPrecision) {
        const { ReturnValue } = await this.call('SetConvexDecompositionCollisions', { StaticMesh, HullCount, MaxHullVerts, HullPrecision });
        return ReturnValue;
    }
    async SetConvexDecompositionCollisionsWithNotification(StaticMesh, HullCount, MaxHullVerts, HullPrecision, bApplyChanges) {
        const { ReturnValue } = await this.call('SetConvexDecompositionCollisionsWithNotification', { StaticMesh, HullCount, MaxHullVerts, HullPrecision, bApplyChanges });
        return ReturnValue;
    }
    async SetGenerateLightmapUVs(StaticMesh, bGenerateLightmapUVs) {
        const { ReturnValue } = await this.call('SetGenerateLightmapUVs', { StaticMesh, bGenerateLightmapUVs });
        return ReturnValue;
    }
    async SetLodFromStaticMesh(DestinationStaticMesh, DestinationLodIndex, SourceStaticMesh, SourceLodIndex, bReuseExistingMaterialSlots) {
        const { ReturnValue } = await this.call('SetLodFromStaticMesh', { DestinationStaticMesh, DestinationLodIndex, SourceStaticMesh, SourceLodIndex, bReuseExistingMaterialSlots });
        return ReturnValue;
    }
    async SetLods(StaticMesh, ReductionOptions) {
        const { ReturnValue } = await this.call('SetLods', { StaticMesh, ReductionOptions });
        return ReturnValue;
    }
    async SetLodsWithNotification(StaticMesh, ReductionOptions, bApplyChanges) {
        const { ReturnValue } = await this.call('SetLodsWithNotification', { StaticMesh, ReductionOptions, bApplyChanges });
        return ReturnValue;
    }
}
exports.EditorStaticMeshLibrary = EditorStaticMeshLibrary;
//# sourceMappingURL=editor-static-mesh-library.js.map