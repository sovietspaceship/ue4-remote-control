import { UObject } from '../uobject'
import { ReturnValue } from '../../api/schema'
import { FEditorScriptingMeshReductionOptions, ECollisionTraceFlag, TEnumAsByte, FVector, FRotator, FVector2D, EScriptingCollisionShapeType } from '../../engine/types'
import { UStaticMesh } from '../objects/static-mesh'
import { UStaticMeshComponent } from '../objects/static-mesh-component'

export class EditorStaticMeshLibrary extends UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorStaticMeshLibrary')
    }

    async AddSimpleCollisions(StaticMesh: UStaticMesh, ShapeType: EScriptingCollisionShapeType): Promise<number> {
        const { ReturnValue } = await this.call('AddSimpleCollisions', { StaticMesh, ShapeType }) as ReturnValue<number>
        return ReturnValue
    }

    async AddSimpleCollisionsWithNotification(StaticMesh: UStaticMesh, ShapeType: EScriptingCollisionShapeType, bApplyChanges: boolean): Promise<number> {
        const { ReturnValue } = await this.call('AddSimpleCollisionsWithNotification', { StaticMesh, ShapeType, bApplyChanges }) as ReturnValue<number>
        return ReturnValue
    }

    async AddUVChannel(StaticMesh: UStaticMesh, LODIndex: number): Promise<boolean> {
        const { ReturnValue } = await this.call('AddUVChannel', { StaticMesh, LODIndex }) as ReturnValue<boolean>
        return ReturnValue
    }

    async EnableSectionCastShadow(StaticMesh: UStaticMesh, bCastShadow: boolean, LODIndex: number, SectionIndex: number): Promise<void> {
        await this.call('EnableSectionCastShadow', { StaticMesh, bCastShadow, LODIndex, SectionIndex })
    }

    async EnableSectionCollision(StaticMesh: UStaticMesh, bCollisionEnabled: boolean, LODIndex: number, SectionIndex: number): Promise<void> {
        await this.call('EnableSectionCollision', { StaticMesh, bCollisionEnabled, LODIndex, SectionIndex })
    }

    async GenerateBoxUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number, Position: FVector, Orientation: FRotator, Size: FVector): Promise<boolean> {
        const { ReturnValue } = await this.call('GenerateBoxUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Size }) as ReturnValue<boolean>
        return ReturnValue
    }

    async GenerateCylindricalUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number, Position: FVector, Orientation: FRotator, Tiling: FVector2D): Promise<boolean> {
        const { ReturnValue } = await this.call('GenerateCylindricalUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling }) as ReturnValue<boolean>
        return ReturnValue
    }

    async GeneratePlanarUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number, Position: FVector, Orientation: FRotator, Tiling: FVector2D): Promise<boolean> {
        const { ReturnValue } = await this.call('GeneratePlanarUVChannel', { StaticMesh, LODIndex, UVChannelIndex, Position, Orientation, Tiling }) as ReturnValue<boolean>
        return ReturnValue
    }

    async GetCollisionComplexity(StaticMesh: UStaticMesh): Promise<TEnumAsByte<ECollisionTraceFlag>> {
        const { ReturnValue } = await this.call('GetCollisionComplexity', { StaticMesh }) as ReturnValue<TEnumAsByte<ECollisionTraceFlag>>
        return ReturnValue
    }

    async GetConvexCollisionCount(StaticMesh: UStaticMesh): Promise<number> {
        const { ReturnValue } = await this.call('GetConvexCollisionCount', { StaticMesh }) as ReturnValue<number>
        return ReturnValue
    }

    async GetLodCount(StaticMesh: UStaticMesh): Promise<number> {
        const { ReturnValue } = await this.call('GetLodCount', { StaticMesh }) as ReturnValue<number>
        return ReturnValue
    }

    async GetLodScreenSizes(StaticMesh: UStaticMesh): Promise<number[]> {
        const { ReturnValue } = await this.call('GetLodScreenSizes', { StaticMesh }) as ReturnValue<number[]>
        return ReturnValue
    }

    async GetNumberVerts(StaticMesh: UStaticMesh, LODIndex: number): Promise<number> {
        const { ReturnValue } = await this.call('GetNumberVerts', { StaticMesh, LODIndex }) as ReturnValue<number>
        return ReturnValue
    }

    async GetNumUVChannels(StaticMesh: UStaticMesh, LODIndex: number): Promise<number> {
        const { ReturnValue } = await this.call('GetNumUVChannels', { StaticMesh, LODIndex }) as ReturnValue<number>
        return ReturnValue
    }

    async GetSimpleCollisionCount(StaticMesh: UStaticMesh): Promise<number> {
        const { ReturnValue } = await this.call('GetSimpleCollisionCount', { StaticMesh }) as ReturnValue<number>
        return ReturnValue
    }

    async HasInstanceVertexColors(StaticMeshComponent: UStaticMeshComponent): Promise<boolean> {
        const { ReturnValue } = await this.call('HasInstanceVertexColors', { StaticMeshComponent }) as ReturnValue<boolean>
        return ReturnValue
    }

    async HasVertexColors(StaticMesh: UStaticMesh): Promise<boolean> {
        const { ReturnValue } = await this.call('HasVertexColors', { StaticMesh }) as ReturnValue<boolean>
        return ReturnValue
    }

    async InsertUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number): Promise<boolean> {
        const { ReturnValue } = await this.call('InsertUVChannel', { StaticMesh, LODIndex, UVChannelIndex }) as ReturnValue<boolean>
        return ReturnValue
    }

    async IsSectionCollisionEnabled(StaticMesh: UStaticMesh, LODIndex: number, SectionIndex: number): Promise<boolean> {
        const { ReturnValue } = await this.call('IsSectionCollisionEnabled', { StaticMesh, LODIndex, SectionIndex }) as ReturnValue<boolean>
        return ReturnValue
    }

    async RemoveCollisions(StaticMesh: UStaticMesh): Promise<boolean> {
        const { ReturnValue } = await this.call('RemoveCollisions', { StaticMesh }) as ReturnValue<boolean>
        return ReturnValue
    }

    async RemoveCollisionsWithNotification(StaticMesh: UStaticMesh, bApplyChanges: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('RemoveCollisionsWithNotification', { StaticMesh, bApplyChanges }) as ReturnValue<boolean>
        return ReturnValue
    }

    async RemoveLods(StaticMesh: UStaticMesh): Promise<boolean> {
        const { ReturnValue } = await this.call('RemoveLods', { StaticMesh }) as ReturnValue<boolean>
        return ReturnValue
    }

    async RemoveUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number): Promise<boolean> {
        const { ReturnValue } = await this.call('RemoveUVChannel', { StaticMesh, LODIndex, UVChannelIndex }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SetAllowCPUAccess(StaticMesh: UStaticMesh, bAllowCPUAccess: boolean): Promise<void> {
        await this.call('SetAllowCPUAccess', { StaticMesh, bAllowCPUAccess })
    }

    async SetConvexDecompositionCollisions(StaticMesh: UStaticMesh, HullCount: number, MaxHullVerts: number, HullPrecision: number): Promise<boolean> {
        const { ReturnValue } = await this.call('SetConvexDecompositionCollisions', { StaticMesh, HullCount, MaxHullVerts, HullPrecision }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SetConvexDecompositionCollisionsWithNotification(StaticMesh: UStaticMesh, HullCount: number, MaxHullVerts: number, HullPrecision: number, bApplyChanges: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('SetConvexDecompositionCollisionsWithNotification', { StaticMesh, HullCount, MaxHullVerts, HullPrecision, bApplyChanges }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SetGenerateLightmapUVs(StaticMesh: UStaticMesh, bGenerateLightmapUVs: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('SetGenerateLightmapUVs', { StaticMesh, bGenerateLightmapUVs }) as ReturnValue<boolean>
        return ReturnValue
    }

    async SetLodFromStaticMesh(DestinationStaticMesh: UStaticMesh, DestinationLodIndex: number, SourceStaticMesh: UStaticMesh, SourceLodIndex: number, bReuseExistingMaterialSlots: boolean): Promise<number> {
        const { ReturnValue } = await this.call('SetLodFromStaticMesh', { DestinationStaticMesh, DestinationLodIndex, SourceStaticMesh, SourceLodIndex, bReuseExistingMaterialSlots }) as ReturnValue<number>
        return ReturnValue
    }

    async SetLods(StaticMesh: UStaticMesh, ReductionOptions: FEditorScriptingMeshReductionOptions): Promise<number> {
        const { ReturnValue } = await this.call('SetLods', { StaticMesh, ReductionOptions }) as ReturnValue<number>
        return ReturnValue
    }

    async SetLodsWithNotification(StaticMesh: UStaticMesh, ReductionOptions: FEditorScriptingMeshReductionOptions, bApplyChanges: boolean): Promise<number> {
        const { ReturnValue } = await this.call('SetLodsWithNotification', { StaticMesh, ReductionOptions, bApplyChanges }) as ReturnValue<number>
        return ReturnValue
    }
}