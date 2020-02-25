import { UObject } from '../uobject'
import { ReturnValue } from '../../api/schema'
import { FName } from '../../engine/types'
import { USkeletalMesh } from '../objects/skeletal-mesh'

export class EditorSkeletaMeshLibrary extends UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorSkeletaMeshLibrary')
    }

    async GetNumVerts(SkeletalMesh: USkeletalMesh, LODIndex: number): Promise<number> {
        const { ReturnValue } = await this.call('GetNumVerts', { SkeletalMesh, LODIndex }) as ReturnValue<number>
        return ReturnValue
    }

    async RegenerateLOD(SkeletalMesh: USkeletalMesh, NewLODCount: number, bRegenerateEvenIfImported: boolean, bGenerateBaseLOD: boolean): Promise<boolean> {
        const { ReturnValue } = await this.call('RegenerateLOD', { SkeletalMesh, NewLODCount, bRegenerateEvenIfImported, bGenerateBaseLOD }) as ReturnValue<boolean>
        return ReturnValue
    }

    async RenameSocket(SkeletalMesh: USkeletalMesh, OldName: FName, NewName: FName): Promise<boolean> {
        const { ReturnValue } = await this.call('RenameSocket', { SkeletalMesh, OldName, NewName }) as ReturnValue<boolean>
        return ReturnValue
    }
}