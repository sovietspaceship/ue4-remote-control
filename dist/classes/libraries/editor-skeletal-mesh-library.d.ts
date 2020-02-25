import { UObject } from '../uobject';
import { FName } from '../../engine/types';
import { USkeletalMesh } from '../objects/skeletal-mesh';
export declare class EditorSkeletaMeshLibrary extends UObject {
    constructor();
    GetNumVerts(SkeletalMesh: USkeletalMesh, LODIndex: number): Promise<number>;
    RegenerateLOD(SkeletalMesh: USkeletalMesh, NewLODCount: number, bRegenerateEvenIfImported: boolean, bGenerateBaseLOD: boolean): Promise<boolean>;
    RenameSocket(SkeletalMesh: USkeletalMesh, OldName: FName, NewName: FName): Promise<boolean>;
}
