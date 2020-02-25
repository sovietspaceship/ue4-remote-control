import { UObject } from '../uobject';
import { FVector, FHitResult } from '../../engine/types';
declare type SetActorLocationResult = {
    SweepHitResult: FHitResult;
    ReturnValue: boolean;
};
export declare class AActor extends UObject {
    SetActorLocation(newLocation: FVector, bSweep?: boolean): Promise<SetActorLocationResult>;
    GetActorLocation(): Promise<FVector>;
}
export {};
